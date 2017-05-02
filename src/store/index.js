// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const account = {
  totalTime: 0,
  list: [{
    time: '2017/05/02',
    type: '食物',
    name: '中餐',
    price: '20',
    marks: '我是备注'
  }]
};

// 先写个假数据
const state = {
  totalTime: 0,
  list: [{
    name: '二哲',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日完善，陪女朋友一起过圣诞节需要6个小时'
  }]
};


export default new Vuex.Store({
  state,
  account
})
