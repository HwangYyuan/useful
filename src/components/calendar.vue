<template>
    <div>
        <vue-hash-calendar :visible.sync="isShowCalendar" :showTodayButton="false"
      :isShowAction="false"
      :disabledWeekView="true" :isShowWeekView="false"></vue-hash-calendar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShowCalendar:true
        }
    }
}
</script>