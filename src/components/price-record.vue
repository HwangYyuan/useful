<template>
  <div id="priceRecord">
    <ul class="staffList">
      <li class="items" v-for="(item, index) in list" :key="index">
        <div class="rank">
          {{ item.ranking }}
        </div>
        <div class="imgs">
          <van-image
            round
            fit="cover"
            width="1.12rem"
            height="1.12rem"
            :src="item.photo"
          />
        </div>
        <div class="content">
          <div class="top">
            <span>{{item.name}}</span>
            <span>{{item.hour}}小时</span>
          </div>
          <div class="bottom">{{item.department}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "priceRecord",
  data() {
    return {
      list: [
        {
          ranking: "1",
          photo: "https://mspace.gmmc.com.cn/myfiles/lottery/1st-prize.png",
          name: "张三",
          department: "销售部销售部销售部销售部销售部销售部销售部销售部",
          hour:'1'
        },
        {
          ranking: "2",
          photo: "https://mspace.gmmc.com.cn/myfiles/lottery/1st-prize.png",
          name: "李四",
          department: "技术部",
          hour:'0'
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.staffList {
  width: 100vw;
  padding: 0 0.533333rem;
  box-sizing: border-box;
  .items {
    @include flexBetween;
    padding: 0.4rem;
    box-sizing: border-box;
    background:$base-color;
    border-radius:.213333rem;
    margin-bottom:.266667rem;
    .rank {
      width: 1.333333rem;
      height: 1.12rem;
      line-height: 42px;
      text-align: center;
    }
    .imgs{
      img{
        width:100%;
        height:100%;
      }
    }
    .content{
      // height:1.12rem;
      flex:1;
      padding-left:.266667rem;
      box-sizing: border-box;
      font-size:.373333rem;
      .top{
        @include flexBetween;
        display:-webkit-flex;
        line-height:.56rem;
      }
      .bottom{
        text-align:left;
        line-height: .746667rem;
      }
    }
  }
}
</style>