<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control :titles="titles" @tabClick="iTabClick"></tab-control>
    <div style="width: 200px; height: 500px"></div>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ["流行", "新款", "精选"],
    };
  },
  methods: {
    iTabClick(index) {
      console.log(index);
    },
  },
  async created() {
    let res = await getHomeMultidata();
    this.banners = res?.data?.banner?.list;
    this.recommends = res?.data?.recommend?.list;
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
}
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
  padding-top: 44px;
}
</style>