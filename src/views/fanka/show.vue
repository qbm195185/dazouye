<template>
  <el-table :data="tableData" style="width: 100%" height="100vh">
    <el-table-column prop="ID" label="id" width="130"> </el-table-column>
    <el-table-column prop="SUM" label="余额" width="180"> </el-table-column>
    <el-table-column prop="FANKALOCK" label="锁" width="180"> </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      tableData: (state) => state.fanka.allfanka,
    }),
  },
  methods: {},
  created() {},
  mounted() {
    this.$store.dispatch("getallfanka");
  },
};
</script>
<style lang="scss" scoped>
</style>