<template>
  <el-table :data="tableData" style="width: 100%" height="100vh">
      <el-table-column prop="USE_NUM" label="id" width="130"> </el-table-column>
    <el-table-column prop="ID" label="卡号" width="180"> </el-table-column>
    <el-table-column prop="NAME" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="MALE" label="性别" width="180"> </el-table-column>
    <el-table-column prop="TEL" label="电话"> </el-table-column>
    <el-table-column prop="ADDRESS" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
import {
	mapState
} from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    ...mapState({
			tableData: state => state.chikazhe.allchikazhe
		}),
  },
  methods: {},
  created() {},
  mounted() {
    this.$store.dispatch('getallchikazhe');
  },
};
</script>
<style lang="scss" scoped>
</style>