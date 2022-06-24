<template>
  <el-container>
    <el-header height="80px" style="padding: 0">
      <div class="header">教务系统学生管理</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="aside"
          @select="selectFunc"
          default-active="1"
          :unique-opened="true"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>三年级</span>
            </template>
            <el-menu-item>1班</el-menu-item>
            <el-menu-item>2班</el-menu-item>
            <el-menu-item>3班</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>四年级</span>
            </template>
            <el-menu-item>1班</el-menu-item>
            <el-menu-item>2班</el-menu-item>
            <el-menu-item>3班</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>五年级</span>
            </template>
            <el-menu-item>1班</el-menu-item>
            <el-menu-item>2班</el-menu-item>
            <el-menu-item>3班</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header height="80px" style="padding: 0; margin: 0">
          <el-container class="subHeader">
            <div class="desc">{{ desc }}</div>
            <el-button style="width: 100px; height: 30px; margin: 20px"
              >新增记录</el-button
            >
          </el-container>
        </el-header>
        <el-main style="margin: 0; padding: 0">
          <div class="content">
            <el-table :data="stus">
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="age" label="年龄"></el-table-column>
              <el-table-column prop="sex" label="性别"></el-table-column>
              <el-table-column prop="date" label="录入日期"></el-table-column>
            </el-table>
          </div>
        </el-main>
        <el-footer height="30px" class="footer">Vue、ElementPlus</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      desc: "3年1班学生统计",
      stus: [
        {
          name: "小王",
          age: 9,
          sex: "男",
          date: "2020年8月15日",
        },
        {
          name: "小李",
          age: 8,
          sex: "男",
          date: "2020年8月15日",
        },
        {
          name: "小杨",
          age: 9,
          sex: "女",
          date: "2020年8月15日",
        },
      ],
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 30px;
  line-height: 80px;
  background-color: #f1f1f1;
}
.aside {
  background-color: wheat;
  height: 600;
}
.subHeader {
  background-color: cornflowerblue;
}
.desc {
  font-size: 25px;
  line-height: 80px;
  color: white;
  width: 800px;
}
.content {
  height: 410px;
}
.footer {
  background-color: dimgrey;
  color: white;
  font-size: 17px;
  line-height: 30px;
}
</style>
