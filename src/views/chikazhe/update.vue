<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="USE_NUM">
      <el-input v-model="form.USE_NUM"></el-input>
    </el-form-item>
    <el-form-item label="ID">
      <el-input v-model="form.ID"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.NAME"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio v-model="form.MALE" label="男">男</el-radio>
      <el-radio v-model="form.MALE" label="女">女</el-radio>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.TEL"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.ADDRESS"></el-input>
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
        USE_NUM: "",
        ID: "",
        NAME: "",
        MALE: "",
        TEL: "",
        ADDRESS: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit() {
      // console.log(11);
      this.$store.dispatch("updatechikazhe", this.form);
    },
    onSubmit1() {
      // console.log(11);
      this.$store.dispatch("addchikazhe", this.form);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>