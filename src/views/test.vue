<template>
  <div>
    <div class="top">
      <el-input class="input" placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-tag>查询</el-tag>
      <el-tag type="success">添加</el-tag>
      <el-tag type="info">查询全部</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      input: "",
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
.top{
    
    .input{
        width: 200px;
        margin-right: 15px;
    }
}
</style>