<template>
  <el-form
    label-width="100px"
    :inline="true"
    class="login-container"
    :model="form"
    :rules="rules"
  >
    <h3 class="login_title">系统登陆111</h3>
    <el-form-item label="usename" prop="usename">
      <el-input v-model="form.usename" placeholder="请输入usename"></el-input>
    </el-form-item>
    <el-form-item label="useid" prop="useid">
      <el-input
        type="password"
        v-model="form.useid"
        placeholder="请输入useid"
      ></el-input>
    </el-form-item>
    <el-form-item label="usetype" prop="usetype">
      <el-radio-group v-model="form.usetype">
        <el-radio label="0">管理员</el-radio>
        <el-radio label="1">用户</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit" style="margin-left: 120px"
        >登录</el-button
      >
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
        usename: "",
        useid: "",
        usetype: 0,
      },
      rules: {
        usename: [
          { required: true, trigger: "blur", message: "请输入usename" },
        ],
        useid: [{ required: true, trigger: "blur", message: "请输入useid" }],
        usetype: [{ required: true, trigger: "change", message: "请选择用户" }],
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    submit() {
      // console.log('login1');
      this.$store.dispatch('login',this.form);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.login-container {
  width: 360px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 15px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .el-input {
    width: 198px;
  }
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
}
</style>