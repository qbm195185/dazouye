<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="use_num">
        <el-input v-model="formInline.user" placeholder="use_num"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit1">删除</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" height="100vh">
      <el-table-column prop="USE_NUM" label="id" width="130"> </el-table-column>
      <el-table-column prop="ID" label="卡号" width="180"> </el-table-column>
      <el-table-column prop="NAME" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="MALE" label="性别" width="180"> </el-table-column>
      <el-table-column prop="TEL" label="电话"> </el-table-column>
      <el-table-column prop="ADDRESS" label="地址"> </el-table-column>
    </el-table>
  </div>
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
      formInline: {
        user: "",
      },
    };
  },
  watch: {},
  computed: {
    ...mapState({
			tableData: state => state.chikazhe.onechikazhe
		}),
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      this.$store.dispatch("getonechikazhe", this.formInline.user);
    },
    onSubmit1(){
      this.$store.dispatch('deletechikazhe',this.formInline.user)
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>