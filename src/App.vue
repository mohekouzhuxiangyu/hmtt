<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { getAllChannelsAPI } from '@/api/index'
export default {
  async created () {
    try {
      const data = await getAllChannelsAPI()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
