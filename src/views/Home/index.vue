<template>
  <div>
    <van-nav-bar title="首页" fixed>
      <template v-slot:left>
        <img class="logo" src="https://www.baidu.com/favicon.ico" alt="">
      </template>
      <template #right>
        <!-- postcss只能翻译style内的css样式 -->
        <van-icon name="search" size="0.48rem" color="#fff"></van-icon>
      </template>
    </van-nav-bar>
    <div class="content">
      <van-tabs v-model="active" animated>
        <van-tab v-for="item,index in headForm" :key="index" :title="item">
        </van-tab>
      </van-tabs>
    </div>

  </div>

</template>
<script>

export default {
  name: 'HomePage',
  data () {
    return {
      active: 0,
      headForm: ['推荐', '人工智能', 'js']
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .van-nav-bar {
    background-color: rgb(75, 139, 176);
    .logo{
      height: 20px;
      width: 20px;
    }
  }
  .content{
    margin-top: 50px;
  }
</style>
