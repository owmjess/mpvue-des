<template>
  <div class="myorder">
      <van-tabs :active="active">
        <van-tab v-for="(item,index) in tabName" :key="index" :title="item"></van-tab>
      </van-tabs>
      {{motto}}
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello Worlds',
      userInfo: {},
      tabName: ['全部','待接单','待取货', '运送中', '已送达', '已取消'],
      active:'3'
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '/packageA/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>
<style lang="scss">
  .myorder{
    .van-tabs__line {
      z-index: 1;
      height: 2rpx;
      position: absolute;
      background-color: #FF7D00!important;
    }
    .van-tabs__wrap--scrollable .van-tab {
      -webkit-flex: 0 0 16.5%;
      flex-basis: 16.5% !important;
    }
  }
</style>
<style  lang='scss' scoped>
</style>
