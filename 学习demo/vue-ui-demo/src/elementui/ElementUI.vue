<template>
  <div>
    <h3>我是ElementUI</h3>
    <el-button @click="get">按钮</el-button>
    <el-button type="primary">按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-button type="success">按钮</el-button>
    <el-button type="info" icon="el-icon-loading">按钮</el-button>
    <el-button type="warning" icon="el-icon-search">按钮</el-button>

    <el-radio v-model="radio" label="1">好</el-radio>
    <el-radio v-model="radio" label="2">不好</el-radio>

    <el-pagination
      layout="prev, pager, next"
      :total="500">
    </el-pagination>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <i class="el-icon-loading"></i>

    <!--<el-row>-->
      <!--<el-col :span="3">-->
        <!--<div></div>-->
      <!--</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
      <!--<el-col :span="3" class="my-table">3</el-col>-->
    <!--</el-row>-->

    <!--<div>-->
    <!--<DateView ></DateView>-->
    <!--</div>-->

    <RequestButton @click.native="get"></RequestButton>
    <div>{{requestMsg}}</div>
  </div>
</template>

<script>
  import Vue from 'vue';

  // 全部引入
  // import ElementUI from 'element-ui';
  // import DateView from '../components/DateView.vue';
  //
  // Vue.use(ElementUI);

  // 按需引入
  import {Button, Radio, Pagination, Tabs, TabPane} from 'element-ui';
  Vue.use(Button);
  Vue.use(Radio);
  Vue.use(Pagination);
  Vue.use(Tabs);
  Vue.use(TabPane);

  import RequestButton from '../components/Button.vue';
  import axios from 'axios';

  export default {
        name: "ElementUI",
        data() {
          return {
            radio: "1",
            activeName: "second",
            requestMsg: "请求数据"
          }
        },
        methods: {
          handleClick() {

          },
          get() {
            axios.get('a.txt')
              .then(res => {
                this.requestMsg = res.data;
              })
              .catch(error => {

              });
          }
        },
        components: {
          // DateView,
          RequestButton,
        }
    }
</script>

<style scoped lang="less">
  @color: red;
  .my-table {
    border: 1px solid @color;
  }
</style>
