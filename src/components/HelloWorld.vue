<template>
  <div class="page">
    <!-- <nav-bar title="中奖记录" left-arrow></nav-bar> -->
    <ul class="content" v-if="records.length > 0">
      <li class="item" v-for="(item, i) in records" :key="i">
        <div class="imgs">
          <van-image
            width="100px"
            height="74px"
            :src="item.image"
            fit="cover"
          />
        </div>
        <div class="detail">
          <div class="top">
            <p class="price" :class="{ gray: item.redeemStatus == 12 }">
              {{ item.prizeName }}
            </p>
            <p class="name" :class="{ gray: item.redeemStatus == 12 }">
              {{ item.activityName }}
            </p>
          </div>

          <div class="last" :class="{ gray: item.redeemStatus == 12 }">
            <span class="status">{{ status(item.redeemStatus) }}</span>
            <span class="links" @click="goLink(item)">{{
              links(item.redeemStatus)
            }}</span>
          </div>
        </div>
      </li>
    </ul>

    <div class="noImg" v-else>
      <!-- <img src="~/assets/img/act/noRecord.png" mode="aspectFit" /> -->
      <div class="tips">暂无中奖纪录</div>
    </div>
  </div>
</template>
<script>
// import {
//   Basic,
//   Navigator,
// } from "~/utils/jDSSDKConfig/index.js";
export default {
  components: {},

  data() {
    return {
      title: "中奖记录",
      records: [
        {
          activityId:3,
          prizeName: "价值10000元iphone手机",
          activityName: "探趣开跑，奔向2021",
          redeemStatus: 10,
          prizeType: 1,
          id:1,
          image:'https://mspace.gmmc.com.cn/myfiles/lottery/1st-prize.png'
        },
        {
          activityId:3,
          prizeName: "价值10000元iphone手机",
          activityName: "探趣开跑，奔向2021",
          redeemStatus: 12,
          prizeType: 1,
          id:2,
          image:'https://mspace.gmmc.com.cn/myfiles/lottery/1st-prize.png'
        },
        {
          activityId:3,
          prizeName: "价值10000元iphone手机",
          activityName: "探趣开跑，奔向2021",
          redeemStatus: 11,
          prizeType: 1,
          id:3,
          image:'https://mspace.gmmc.com.cn/myfiles/lottery/1st-prize.png'
        },
        {
          activityId:3,
          prizeName: "500积分",
          activityName: "探趣开跑，奔向2021",
          redeemStatus: 20,
          prizeType: 2,
          id:4,
          image:'https://mspace.gmmc.com.cn/myfiles/lottery/1st-prize.png'
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
    };
  },

  methods: {
    //个人中奖记录
    prizeRecords() {
      // this.$axios
      //   .post("/lottery-app/activityPrize/prizeRecords", {})
      //   .then((res) => {
      //     this.records = res.data.list;
      //   });
    },
    status(index) {
      // 兑换状态(0-未中奖，10-待兑换，11-已兑换，12-已过期,20-已发放
      if (index === 10) return "待兑换";
      if (index === 11) return "已兑换";
      if (index === 12) return "已过期";
      if (index === 20) return "已发放";
    },
    links(index) {
      if (index === 10) return "马上兑换";
      if (index === 11) return "查看详情";
      if (index === 20) return "积分明细";
    },
    goLink(item) {
      this.$router.push('jump')
    }
  },
  mounted() {
    this.prizeRecords();
  },
};
</script>
<style lang="scss" scoped>
.gray {
  color: #cac9e1 !important;
}
.noImg {
  width: 172px;
  height: 160px;
  margin: 152px auto 0;
  .tips {
    text-align: center;
    font-size: 14px;
    color: #9796a9;
    margin-top: 22px;
  }
  img {
    width: 100%;
  }
}
.content {
  margin-top: 10px;
  padding-bottom: 40px;
  .item {
    background-color: #fff;
    // @include flexBetween;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    border-bottom: 10px solid #f7f8fa;
    .imgs {
      margin-right: 10px;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .detail {
      flex: 4.3;
      height: 100px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .top {
        .price {
          font-size: 14px;
          font-weight: 600;
          color: #2b303c;
          line-height: 16px;
          margin-bottom: 15px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .name {
          margin-top: 15px;
          font-size: 14px;
          font-weight: 400;
          color: #9796a9;
          line-height: 12px;
        }
      }
      .last {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #2b303c;
        .status {
          font-size: 14px;
          font-weight: 500;
          line-height: 14px;
        }
        .links {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
