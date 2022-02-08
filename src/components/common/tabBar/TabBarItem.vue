<template>
    <div @click="itemClick" class="tab-bar-item" :style="isActive">
        <div><slot name="tab-icon"></slot></div>
        <div><slot name="tab-txt"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    components: {

    },
    props: {
        path: {
            type: String,
            default: "/"
        },
        activeColor: {
            type: String,
            default: "red"
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path);
            console.log(this.path);
        }
    },
    computed: {
        isActive() {
            return this.$route.path.includes(this.path) ? {"color": this.activeColor} : {};
        }
    }
}
</script>

<style scoped>
.iconfont{
    font-family:"iconfont" !important;
    font-size:20px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.tab-bar-item {
    flex: 1;
    text-align: center;
}
.isactive {
    color: red;
}
</style>