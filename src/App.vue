<template>
  <div id="app">
    <span class="test">1rem</span>
    <van-button class="main">测试</van-button>
  </div>
</template>

<style lang="less" scoped>
@import url('./assets/css/var.less');
.test {
  font-size: 1rem;
  color: @BLUE;
}
.main {
  color: #fff;
  background-color: @BLUE;
}
</style>