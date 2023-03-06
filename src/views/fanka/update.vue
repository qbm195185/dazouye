<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="id">
      <el-input v-model="form.id"></el-input>
    </el-form-item>
    <el-form-item label="sum">
      <el-input v-model="form.sum"></el-input>
    </el-form-item>
    <el-form-item label="lock">
      <el-input v-model="form.lock"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">更改</el-button>
      <el-button type="primary" @click="onSubmit1">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        id: "",
        sum: "",
        lock: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      // console.log(11);
      this.$store.dispatch("updatefanka", this.form);
    },
    onSubmit1() {
      // console.log(11);
      this.$store.dispatch("addfanka", this.form);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>