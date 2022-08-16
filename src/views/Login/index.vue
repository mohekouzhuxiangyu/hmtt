<template>
  <div>
    <van-nav-bar title="欢迎登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="username"
        label="手机号"
        placeholder="请输入手机号"
        required
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.code"
        type="password"
        name="code"
        label="密码"
        placeholder="密码"
        required
        :rules="[{ required: true, message: '请填写密码',  }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"  :disabled="isLoading" :loading='isLoading' loading-text="登陆中...">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { phoneValidator } from '@/utils/validator'
import { login } from '@/api/index'
import { Notify } from 'vant'
import { setToken } from '@/utils/token'
export default {
  name: 'LoginPage',
  data () {
    return {
      isLoading: false,
      user: {
        mobile: '15255229219',
        code: '246810'
      }
    }
  },
  methods: {
    validPhone (value, rules) {
      return phoneValidator(value, rules)
    },
    async onSubmit (values) {
      this.isLoading = true
      try {
        const res = await login(this.user)
        // console.log(res.data.data.token)
        setToken(res.data.data.token)
        Notify({ type: 'success', message: '登陆成功' })
        this.$router.replace('/layout/home')
      } catch (err) {
        Notify({ type: 'danger', message: '账号或密码错误' })
      }
      this.isLoading = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .van-nav-bar {
    background-color: lightblue;
  }
</style>
