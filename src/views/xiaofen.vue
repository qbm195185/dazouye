<template>
  <el-form
    label-width="100px"
    :inline="true"
    class="login-container"
    :model="form"
    :rules="rules"
  >
    <h3 class="login_title">消费</h3>
    <el-form-item label="id" prop="id">
      <el-input v-model="form.id" placeholder="请输入卡号id"></el-input>
    </el-form-item>
    <el-form-item label="sum" prop="sum">
      <el-input v-model="form.sum" placeholder="请输入金额"></el-input>
    </el-form-item>
    <el-form-item label="op" prop="op">
      <el-input v-model="form.op" placeholder="op"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit" style="margin-left: 120px"
        >确认</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { addhistory } from "../api/xiaofen";
import { updatefanka } from "../api/fanka";

export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        id: null,
        daytime: new Date(),
        sum: null,
        op: "",
        lock: 0,
      },
      rules: {
        id: [{ required: true, trigger: "blur", message: "请输入id" }],
        sum: [{ required: true, trigger: "blur", message: "请输入金额" }],
        op: [{ required: true, trigger: "blur", message: "op" }],
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    async submit() {
      const fanka = {
        id: this.form.id,
        sum: this.form.sum * -1,
        lock: this.form.lock,
      };
      const res = await updatefanka(fanka);
      if (res.status == 200) {
        let y = this.form.daytime.getFullYear();
        let m = this.form.daytime.getMonth() + 1;
        let d = this.form.daytime.getDate();
        this.form.daytime = d + "-" + m + "月-" + y;
        this.form.sum = -1 * this.form.sum;
        const res1 = await addhistory(this.form);
        if (res1.status == 200) {
          this.$alert("消费成功", "消费", {
            confirmButtonText: "确定",
            callback: (action) => {
              this.$message({
                type: "info",
                message: `action: ${action}`,
              });
            },
          });
        } else {
          this.$alert("消费成功", "消费", {
            confirmButtonText: "确定",
            callback: (action) => {
              this.$message({
                type: "info",
                message: `action: ${action}`,
              });
            },
          });
        }
      } else {
        this.$alert("消费成功", "消费", {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        });
      }
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