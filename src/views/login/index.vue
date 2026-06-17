<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFromRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          name="password"
          :type="passType"
        />
        <span class="show-pwd" @click="passTypeChange">
          <el-icon>
            <svg-icon :icon="passType === 'password' ? 'eye' : 'eye-open'" />
          </el-icon>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="login"
        :loading="loading"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
import router from '@/router'
const store = useStore()
const loginFromRef = ref(null)
const passType = ref('password')
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const loginRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, validator: validatePassword(), trigger: 'blur' }]
})

const loading = ref(false)

const passTypeChange = () => {
  if (passType.value === 'password') {
    passType.value = 'text'
  } else {
    passType.value = 'password'
  }
}

const login = async () => {
  if (!loginFromRef.value) return
  loading.value = true
  await loginFromRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      store
        .dispatch('user/login', loginForm.value)
        .then((data) => {
          router.push('/')
          loading.value = false
        })
        .catch((err) => {
          console.log('error submit!', err)
          loading.value = false
        })
    } else {
      console.log('error submit!', fields)
      loading.value = false
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;

  ::v-deep .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #654545;
  }

  ::v-deep .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
    }
  }
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: $dark_gray;
  vertical-align: middle;
  display: inline-block;
}

.title-container {
  position: relative;
}

.title {
  font-size: 26px;
  color: $light_gray;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
}
</style>
