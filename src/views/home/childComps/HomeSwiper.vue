<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="195px">
      <el-carousel-item v-for="(item, id) in banners" :key="id">
        <a :href="void 0">
          <img :src="item.image" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
    },
  },
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>