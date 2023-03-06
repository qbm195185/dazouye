<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import commonAside from '../components/commonAside.vue'
import commonHeader from '../components/commonHeader.vue'

export default {
  components: {
    commonAside,
    commonHeader
  },
  props: {},
  data() {
    return {
      
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.el-header{
  padding: 0;
}
</style>