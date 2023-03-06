<template>
  <div class="header-container">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-s-tools"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>


export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: white;
    font-size: 14px;
    margin-left: 10px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
}
</style>