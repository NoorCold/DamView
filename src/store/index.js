import { createStore } from 'vuex'

export default createStore({
  state: {
    viewer3D: {},
    viewToken: "48ad216156f9484cbf424b5a37a2b5b7",
    dsData: {
      name: '大坝结构',
      families: [
        {
          fname: '左岸非溢流坝段',
          f: '左岸非溢流坝段',
          isClose: true,
          isTransparent: false,
          HavefType: false,
          structions: [],
        },
        {
          fname: '右岸非溢流坝段',
          f: '右岸非溢流坝段',
          isClose: true,
          isTransparent: false,
          structions: [],
        },
        {
          fname: '溢流坝段',
          f: '溢流坝段',
          isClose: true,
          isTransparent: false,
          HavefType: true,
          structions: [
            {
              sname: '溢流坝段坝块①',
              fType: '溢流坝段坝块20m',
              isTransparent: false,
            },
            {
              sname: '溢流坝段坝块②',
              fType: '溢流坝段坝块24m',
              isTransparent: false,
            },
          ],
        },
        {
          fname: '底孔坝段',
          f: '底孔坝段6m',
          isClose: true,
          isTransparent: false,
          HavefType: false,
          structions: [],
        },
        {
          fname: '中墩',
          f: '中墩',
          isClose: true,
          isTransparent: false,
          HavefType: true,
          structions: [
            {
              sname: '中墩①',
              fType: '中墩①',
              isTransparent: false,
            },
            {
              sname: '中墩②',
              fType: '中墩②',
              isTransparent: false,
            },
          ],
        },
        {
          fname: '边墩及导流墙',
          f: '边墩及导流墙',
          isClose: true,
          isTransparent: false,
          HavefType: false,
          structions: [],
        },
        {
          fname: '坝顶交通桥',
          f: '坝顶交通',
          isClose: true,
          isTransparent: false,
          HavefType: false,
          structions: [],
        },
      ]
    },
    mData: {
      name: '监测器',
      families: [
        {
          fname: '三向测缝计',
          f: '三向测缝计及振弦式扬压力计',
          isClose: true,
          isTransparent: false,
          HavefType: true,
          structions: [
            {
              sname:'三向测缝计1',
              sid:227192,
              isTransparent: false,
            },
            {
              sname:'三向测缝计2',
              sid:259609,
              isTransparent: false,
            },
            {
              sname:'三向测缝计3',
              sid:259624,
              isTransparent: false,
            },
            {
              sname:'三向测缝计4',
              sid:259638,
              isTransparent: false,
            },
            {
              sname:'三向测缝计5',
              sid:259648,
              isTransparent: false,
            },
            {
              sname:'三向测缝计6',
              sid:259660,
              isTransparent: false,
            },
            {
              sname:'三向测缝计7',
              sid:259673,
              isTransparent: false,
            },
            {
              sname:'三向测缝计8',
              sid:259683,
              isTransparent: false,
            },
          ],
        },
        {
          fname: '温度计',
          f: '温度计',
          isClose: true,
          isTransparent: false,
          HavefType: false,
          structions: [],
        },
        {
          fname: '观测墩',
          f: '观测墩',
          isClose: true,
          isTransparent: false,
          HavefType: true,
          structions: [
            {
              sname:'观测墩1',
              sid:232412,
              isTransparent: false,
            },
            {
              sname:'观测墩2',
              sid:259272,
              isTransparent: false,
            },
            {
              sname:'观测墩3',
              sid:259461,
              isTransparent: false,
            },
            {
              sname:'观测墩4',
              sid:259477,
              isTransparent: false,
            },
            {
              sname:'观测墩5',
              sid:259490,
              isTransparent: false,
            },
            {
              sname:'观测墩6',
              sid:259506,
              isTransparent: false,
            },
            {
              sname:'观测墩7',
              sid:259517,
              isTransparent: false,
            },
            {
              sname:'观测墩8',
              sid:259530,
              isTransparent: false,
            },
            {
              sname:'观测墩9',
              sid:259546,
              isTransparent: false,
            },
            {
              sname:'观测墩10',
              sid:259562,
              isTransparent: false,
            },
            {
              sname:'观测墩11',
              sid:259575,
              isTransparent: false,
            },
          ],
        },
        {
          fname: '遥测引张线监测仪',
          f: '遥测引张线监测仪',
          isClose: true,
          isTransparent: false,
          HavefType: true,
          structions: [
            {
              sname:'遥测引张线监测仪1',
              sid:232074,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪2',
              sid:259271,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪3',
              sid:259460,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪4',
              sid:259476,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪5',
              sid:259489,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪6',
              sid:259505,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪7',
              sid:259516,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪1',
              sid:259529,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪8',
              sid:259545,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪9',
              sid:259561,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪10',
              sid:259574,
              isTransparent: false,
            },
            {
              sname:'遥测引张线监测仪11',
              sid:259271,
              isTransparent: false,
            },
          ],
        },
      ]
    },
    echartsOption: {
      title: {
        text: '月度水位变化',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['上游水位', '下游水位'],
        textStyle: {
          color: '#ccc'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2020年1月1日', '2020年1月2日', '2020年1月3日', '2020年1月4日', '2020年1月5日', '2020年1月6日', '2020年1月7日', '2020年1月8日', '2020年1月9日', '2020年1月10日', '2020年1月11日', '2020年1月12日', '2020年1月13日', '2020年1月14日', '2020年1月15日', '2020年1月16日', '2020年1月17日', '2020年1月18日', '2020年1月19日', '2020年1月20日', '2020年1月21日', '2020年1月22日', '2020年1月23日', '2020年1月24日', '2020年1月25日', '2020年1月26日', '2020年1月27日', '2020年1月28日', '2020年1月29日', '2020年1月30日', '2020年1月31日'],
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '上游水位',
          type: 'line',
          stack: 'Total',
          data: [245.96, 243.94, 241.59, 248.67, 265.36, 243.7, 262.58, 261.03, 259.24, 257.66, 254.38, 257.8, 259.62, 257.77, 266.14, 265.14, 264.56, 262.95, 260.16, 258.33, 253.76, 252.07, 252.41, 252.66, 252.35, 243.18, 243.18, 242.5, 242.6, 241.5, 240.09]
        },
        {
          name: '下游水位',
          type: 'line',
          stack: 'Total',
          data: [245.96, 243.94, 241.59, 248.67, 265.36, 243.7, 262.58, 261.03, 259.24, 257.66, 254.38, 257.8, 259.62, 257.77, 266.14, 265.14, 264.56, 262.95, 260.16, 258.33, 253.76, 252.07, 252.41, 252.66, 252.35, 243.18, 243.18, 242.5, 242.6, 241.5, 240.09]
        }
      ]
    },
    mListData: [
      {
        "ID": 1,
        "检测器编号": "232052",
        "日期": "1959/1/1",
        "上游水位(m)": "240.67",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-19.5"
      },
      {
        "ID": 2,
        "检测器编号": "232052",
        "日期": "1959/1/2",
        "上游水位(m)": "240.63",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-20.1"
      },
      {
        "ID": 3,
        "检测器编号": "232052",
        "日期": "1959/1/3",
        "上游水位(m)": "240.59",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-19.9"
      },
      {
        "ID": 4,
        "检测器编号": "232052",
        "日期": "1959/1/4",
        "上游水位(m)": "240.55",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-24.0"
      },
      {
        "ID": 5,
        "检测器编号": "232052",
        "日期": "1959/1/5",
        "上游水位(m)": "240.5",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-24.6"
      },
      {
        "ID": 6,
        "检测器编号": "232052",
        "日期": "1959/1/6",
        "上游水位(m)": "240.45",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-20.9"
      },
      {
        "ID": 7,
        "检测器编号": "232052",
        "日期": "1959/1/7",
        "上游水位(m)": "240.4",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-19.4"
      },
      {
        "ID": 8,
        "检测器编号": "232052",
        "日期": "1959/1/8",
        "上游水位(m)": "240.33",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-18.3"
      },
      {
        "ID": 9,
        "检测器编号": "232052",
        "日期": "1959/1/9",
        "上游水位(m)": "240.26",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-15.8"
      },
      {
        "ID": 10,
        "检测器编号": "232052",
        "日期": "1959/1/10",
        "上游水位(m)": "240.23",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-19.4"
      },
      {
        "ID": 11,
        "检测器编号": "232052",
        "日期": "1959/1/11",
        "上游水位(m)": "240.19",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-16.1"
      },
      {
        "ID": 12,
        "检测器编号": "232052",
        "日期": "1959/1/12",
        "上游水位(m)": "240.15",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-16.8"
      },
      {
        "ID": 13,
        "检测器编号": "232052",
        "日期": "1959/1/13",
        "上游水位(m)": "240.09",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-17.3"
      },
      {
        "ID": 14,
        "检测器编号": "232052",
        "日期": "1959/1/14",
        "上游水位(m)": "240.05",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-13.8"
      },
      {
        "ID": 15,
        "检测器编号": "232052",
        "日期": "1959/1/15",
        "上游水位(m)": "239.99",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-12.8"
      },
      {
        "ID": 16,
        "检测器编号": "232052",
        "日期": "1959/1/16",
        "上游水位(m)": "239.94",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-22.6"
      },
      {
        "ID": 17,
        "检测器编号": "232052",
        "日期": "1959/1/17",
        "上游水位(m)": "239.9",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-24.5"
      },
      {
        "ID": 18,
        "检测器编号": "232052",
        "日期": "1959/1/18",
        "上游水位(m)": "239.85",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-22.1"
      },
      {
        "ID": 19,
        "检测器编号": "232052",
        "日期": "1959/1/19",
        "上游水位(m)": "239.8",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-16.1"
      },
      {
        "ID": 20,
        "检测器编号": "232052",
        "日期": "1959/1/20",
        "上游水位(m)": "239.76",
        "下游水位(m)": "-99.0",
        "温度(℃)": "-9.7"
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
