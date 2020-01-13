<template>
  <div class="chart">
    <div id="leftFiveDuty"></div>
    <div id="leftFourState"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import {
  leftFiveDutyOption,
  leftFourStateOption
} from "@/utils/echartsOption.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      leftFiveDuty: {
        select: "day",
        chart: ""
      },
      leftFourState: {
        select: "day",
        chart: ""
      },
      fiveDutys: [
        {
          name: "医生",
          value: "9"
        },
        {
          name: "教师",
          value: "3"
        },
        {
          name: "码农",
          value: "15"
        },
        {
          name: "农民",
          value: "5"
        },
        {
          name: "农民工",
          value: "7"
        }
      ],
      FourState: [
        {
          name: "在线",
          value: "9"
        },
        {
          name: "离线",
          value: "6"
        },
        {
          name: "忙碌",
          value: "1"
        }
      ],
      allDutyNum: 0,
      allStateNum: 0,
      dataIndex:-1,
      dataIndex2:-1,
    };
  },
  mounted() {
    this.getChartsData();
  },
  methods: {
    initEcharts() {
      //创建echart对象
      this.leftFiveDuty.chart = echarts.init(
        document.getElementById("leftFiveDuty")
      );
      this.leftFourState.chart = echarts.init(
        document.getElementById("leftFourState")
      );
      let current = this;
      this.leftFiveDuty.chart.setOption(leftFiveDutyOption);
      this.leftFiveDuty.chart.on("click", function() {
        // clearInterval(current.timer);
        clearInterval(current.nowtimer1);
      });
      this.leftFourState.chart.setOption(leftFourStateOption);
      this.leftFourState.chart.on("click", function() {
        // clearInterval(current.timer);
        clearInterval(current.nowtimer2);
      });
    },
    getChartsData() {
      let leftFiveDutyRes = this.formatEchartData(this.fiveDutys);
      this.allDutyNum = 0;
      leftFiveDutyRes.valueArr.forEach(v => {
        this.allDutyNum += v;
      });
      leftFiveDutyOption.series[0].data = this.fiveDutys;
      leftFiveDutyOption.title.text = [
        "{name|职能人数}",
        "{value|" + this.allDutyNum + "}"
      ].join("\n");

      //饼二
      leftFourStateOption.series[0].data = this.FourState;
      // leftFourStateOption.series[1].data = data.statusPie;
      let leftFourStateRes = this.formatEchartData(this.FourState);
      this.allStateNum = 0;
      leftFourStateRes.valueArr.forEach(v => {
        this.allStateNum += v;
      });
      // console.log("hhh", leftFourStateRes, this.allStateNum);
      leftFourStateOption.title.text = [
        "{name|勤务状态}",
        "{value|" + this.allStateNum + "}"
      ].join("\n");
      //定时器
      if (this.nowtimer1) {
        clearInterval(this.nowtimer1);
      }
      if (this.nowtimer2) {
        clearInterval(this.nowtimer2);
      }
      let current = this;
      this.nowtimer1 = setInterval(function() {
        current.reFresh();
      }, 1500);
      this.nowtimer2 = setInterval(function() {
        current.reFreshStatus();
      }, 1500);
      this.initEcharts();
    },
     reFresh() {
      // this.dataIndex = 0;
      if (this.dataIndex > -1) {
        let before = leftFiveDutyOption.series[0].data[this.dataIndex];
        before.selected = false;
        before.label = {};
        before.labelLine = {};
        this.leftFiveDuty.chart.setOption(leftFiveDutyOption);
      }
      // 数据index++
      this.dataIndex =
        (this.dataIndex + 1) % leftFiveDutyOption.series[0].data.length;
      //选中本次状态
      let after = leftFiveDutyOption.series[0].data[this.dataIndex];
      after.selected = true;
      after.label = {
        normal: {
          show: true
        }
      };
      after.labelLine = {
        show: true
      };
      this.leftFiveDuty.chart.setOption(leftFiveDutyOption);
      // this.dataIndex++;
    },
    reFreshStatus() {
      // this.dataIndex = 0;
      if (this.dataIndex2 > -1) {
        let before = leftFourStateOption.series[0].data[this.dataIndex2];
        before.selected = false;
        before.label = {};
        before.labelLine = {};
        this.leftFourState.chart.setOption(leftFourStateOption);
      }
      // 数据index++
      this.dataIndex2 =
        (this.dataIndex2 + 1) % leftFourStateOption.series[0].data.length;
      //选中本次状态
      let after = leftFourStateOption.series[0].data[this.dataIndex2];
      after.selected = true;
      after.label = {
        normal: {
          show: true
        }
      };
      after.labelLine = {
        show: true
      };
      this.leftFourState.chart.setOption(leftFourStateOption);
      // this.dataIndex++;
    },
    formatEchartData(data) {
      let res = { nameArr: [], valueArr: [] };
      data.forEach(e => {
        res.nameArr.push(e.name);
        res.valueArr.push(parseInt(e.value));
      });
      return res;
    }
  }
};
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  // padding-left: 10px;
  // padding-right: 10px;
  #leftFiveDuty {
    display: inline-block;
    width: 50%;
    height: 100%;
    // background-color: red;
  }
  #leftFourState {
    display: inline-block;
    width: 50%;
    height: 100%;
    // background-color: blue;
  }
}
</style>
