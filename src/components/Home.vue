// src/components/Home.vue

<template>
  <div class="container">
    <div class="col-sm-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="text-center">月度支出</h1>
        </div>
        <div class="panel-body">
          <h1 class="text-center">{{ month }} 月</h1>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="text-center">支出总计</h1>
        </div>
        <div class="panel-body">
          <h1 class="text-center">{{ money }} 元</h1>
        </div>
      </div>
    </div>
    <div class="col-sm-9">
      <div class="jumbotron">
        <h1>本月账单</h1>
        <p>
          <strong>
            <router-link to="/time-entries">新增</router-link>
          </strong>
        </p>
      </div>
      <!--账单主体-->
      <div class="time-entries">
        <p v-if="!plans.length"><strong>还没有任何计划</strong></p>

        <div class="list-group">

          <a class="list-group-item" v-for="(plan,index) in plans">
            <div class="row">
              <div class="col-sm-2 user-details">


                <img :src="plan.avatar" class="avatar img-circle img-responsive" />
                <p class="text-center">
                  <strong>
                  {{ plan.name }}
                </strong>
                </p>
              </div>

              <div class="col-sm-2 text-center time-block">
                <h3 class="list-group-item-text total-time">
                  <i class="glyphicon glyphicon-time"></i> {{ plan.totalTime }}
                </h3>
                <p class="label label-primary text-center">
                  <i class="glyphicon glyphicon-calendar"></i> {{ plan.date }}
                </p>
              </div>

              <div class="col-sm-7 comment-section">
                <p>{{ plan.comment }}</p>
              </div>

              <div class="col-sm-1">
                <button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">
              X
              </button>
              </div>

            </div>
          </a>

        </div>
      </div>
      <table class="table table-bordered table-striped table-hover" v-for="(list,index) in lists">
        <thead>
          <tr>
            <td>日期</td>
            <td>类型</td>
            <td>项目</td>
            <td>金额</td>
            <td>备注</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{list.time}}</td>
            <td>食物</td>
            <td>早餐</td>
            <td>5</td>
            <td>我是备注</td>
          </tr>
          <tr>
            <td>2016/1/1</td>
            <td>食物</td>
            <td>早餐</td>
            <td>5</td>
            <td>我是备注</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TimeEntries',
    computed: {
      plans() {
        // 从store中取出数据
        return this.$store.state.list
      },
      // lists() {
      //   // 从store中取出数据
      //   return this.$store.account.lists
      // }
    },
    methods: {
      // deletePlan(idx) {
      //   // 稍后再来说这里的方法
      //   // 减去总时间
      //   this.$store.dispatch('decTotalTime', this.plans[idx].totalTime)
      //   // 删除该计划
      //   this.$store.dispatch('deletePlan', idx)
      // }
    }
  }

</script>
<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }

  .time-block {
    padding: 10px;
  }

  .comment-section {
    padding: 20px;
  }

</style>
