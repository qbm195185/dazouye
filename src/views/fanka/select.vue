<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="id">
        <el-input v-model="formInline.id" placeholder="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit1">删除</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" height="100vh">
      <el-table-column prop="ID" label="id" width="130"> </el-table-column>
      <el-table-column prop="SUM" label="余额" width="180"> </el-table-column>
      <el-table-column prop="FANKALOCK" label="锁" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {
      formInline: {
        id: "",
      },
    };
  },
  watch: {},
  computed: {
    ...mapState({
      tableData: (state) => state.fanka.onefanka,
    }),
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      this.$store.dispatch("getonefanka", this.formInline.id);
    },
    onSubmit1() {
      this.$store.dispatch("deletefanka", this.formInline.id);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>