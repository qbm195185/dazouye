<template>
  <el-row>
    <el-col :span="8">
      <el-card class="user-card">
        <div class="user">
          <img src="../assets/logo.png" alt="" />
          <div class="userinfo">
            <p class="name">{{this.$store.state.user.name}}</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2022-11-26</span></p>
          <p>上次登录地点:<span>南京</span></p>
        </div>
      </el-card>
      <el-card class="info-card">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="item in tableLabel"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          />
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableLabel: [
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
    };
  },
  watch: {},
  computed: {
     ...mapState({
      name: (state) => state.user.name,
    }),
  },
  methods: {},
  created() {},
  mounted() {
    console.log("name",this.name);
  },
};
</script>
<style lang="less" scoped>
.user-card {
  min-width: 400px;
  max-width: 500px;
  margin-bottom: 50px;
  .user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    img {
      margin-right: 40px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .userinfo {
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access {
        color: #999999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #666666;
        margin-left: 60px;
      }
    }
  }
}
.info-card {
  min-width: 400px;
  max-width: 500px;
}
</style>