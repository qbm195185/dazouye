<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <h3>{{isCollapse?"后台":"饭卡后台管理系统"}}</h3>
      <el-menu-item
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
        @click="routerPush(item.path)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.label"
        :key="item.label"
        v-for="item in hasChildren"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.children"
          :key="subItem.path"
          style="overflow: hidden;width:100px"
        >
          <el-menu-item
            :index="subItem.path"
            @click="routerPush(subItem.path)"
            style="overflow: hidden;width:100px"
            >{{ subItem.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
        },
        {
          label: "持卡者",
          icon: "s-custom",
          children: [
            {
              path: "/ckz_show",
              name: "ckz_show",
              label: "显示",
              icon: "setting",
            },
            {
              path: "/ckz_select",
              name: "ckz_select",
              label: "查询",
              icon: "setting",
            },
            {
              path: "/ckz_update",
              name: "ckz_update",
              label: "修改",
              icon: "setting",
            }
          ],
        },
        {
          label: "饭卡",
          icon: "collection-tag",
          children: [
            {
              path: "/fanka_show",
              name: "fanka_show",
              label: "显示",
              icon: "setting",
            },
            {
              path: "/fanka_delete",
              name: "fanka_delete",
              label: "查找/删除",
              icon: "setting",
            },
            {
              path: "/fanka_update",
              name: "fanka_update",
              label: "修改/添加",
              icon: "setting",
            }
          ]
        },
        {
          label: "消费",
          icon: "reading",
          children: [
            {
              path: "/history_show",
              name: "fanka_show",
              label: "显示",
            },
            {
              path: "/history_select",
              name: "fanka_select",
              label: "查询",
            },
          ]
        }
      ],
    };
  },
  watch: {},
  computed: {
    noChildren() {
      //   console.log(this.menuData.filter((item) => !item.children));
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      //   console.log(this.menuData.filter((item) => item.children));
      return this.menuData.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    routerPush(path) {
      // console.log(path);
      if (
        path != this.$route.path &&
        !(this.$route.path === "/home" && path === "/")
      ) {
        this.$router.push(path);
      }
    },
  },
  created() {},
  mounted() {
    // console.log(this.menuData)
  },
};
</script>
<style lang="less" scoped>
.el-menu {
  border-right: none;
  padding: 8px;
  height: 100vh;
  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>