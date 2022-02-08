<template>
  <tab-bar>
    <tab-bar-item activeColor="blue" path="/home">
        <i slot="tab-icon" class="iconfont">&#xe62d;</i>
        <div slot="tab-txt">首页</div>
    </tab-bar-item>
    <tab-bar-item activeColor="pink" path="/category">
        <i slot="tab-icon" class="iconfont">&#xe64f;</i>
        <div slot="tab-txt">分类</div>>
    </tab-bar-item>
    <tab-bar-item activeColor="red" path="/cart">
        <i slot="tab-icon" class="iconfont">&#xe70b;</i>
        <div slot="tab-txt">购物车</div>
    </tab-bar-item>
    <tab-bar-item activeColor="green" path="/profile">
        <i slot="tab-icon" class="iconfont">&#xe75e;</i>
        <div slot="tab-txt">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabBar/TabBar.vue'
  import TabBarItem from 'components/common/tabBar/TabBarItem.vue'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
@font-face {
    font-family: 'iconfont';  /* project id 3167898 */
    src: url('');
    src: url('?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_3167898_wuis7092wrr.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_3167898_wuis7092wrr.woff') format('woff'),
    url('//at.alicdn.com/t/font_3167898_wuis7092wrr.ttf') format('truetype'),
    url('#iconfont') format('svg');
}
</style>
