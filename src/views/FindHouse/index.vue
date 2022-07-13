<template>
  <div class="wrapper">
    <!-- navbar -->
    <van-nav-bar left-arrow>
      <template #title>
        <!-- 搜索框 -->
        <van-search
          v-model="value"
          placeholder="请输入小区或者地址"
          @search="onSearch"
        >
          <template #label>
            <div @click="onSearch">
              <span @click="toCityList" class="addressName"> 北京</span>
              <van-icon class="addressIcon" name="play" />
            </div>
          </template>
        </van-search>
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 粘性定位导航栏 -->
    <van-sticky>
      <van-dropdown-menu active-color="#1cb676">
        <van-dropdown-item v-model="value" title="区域"
          ><van-picker title="标题" :columns="columns" @change="onChange"
        /></van-dropdown-item>
        <van-dropdown-item v-model="value" title="方式"
          ><van-picker title="标题" :columns="columns2" @change="onChange"
        /></van-dropdown-item>
        <van-dropdown-item v-model="value" title="租金"
          ><van-picker title="标题" :columns="columns3" @change="onChange"
        /></van-dropdown-item>
        <van-dropdown-item
          @open="showPopup"
          v-model="value"
          title="筛选"
          overlay="false"
        >
        </van-dropdown-item>
      </van-dropdown-menu>
      <van-popup
        v-model="show"
        get-container="body"
        position="right"
        :style="{ height: '100%', width: '80%' }"
        >内容</van-popup
      >
    </van-sticky>
    <!-- 房源列表 -->
    <div class="findhouseWrapper">
      <FindHouseCell
        class="unitCell"
        v-for="(item, index) in houseList"
        :key="index"
        :item="item"
      ></FindHouseCell>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { findHouse } from '@/api/findhouse'
import FindHouseCell from '@/components/FindHouseCell.vue'
export default {
  name: 'FindHouse',
  // props: {
  //   rentType: {
  //     type: Boolean,
  //     required: false
  //   }
  // },
  created () {
    // 发起ajax请求找房子
    this.getHouses()
    // 根据区域发起ajax请求找房子
  },
  data () {
    return {
      value: '',
      active: 0,
      houseList: [],
      // 区域 级联选择 数据
      columns: [
        {
          text: '区域',
          children: [
            {
              text: '不限',
              children: [{ text: '' }]
            },
            {
              text: '杨浦',
              children: [{ text: '不限' }, { text: '鞍山' }, { text: '东外滩' }, { text: '黄兴公园' }, { text: '周家嘴路' }, { text: '控江路' }, { text: '新江湾城' }, { text: '五角场' }]
            },
            {
              text: '徐汇',
              children: [{ text: '不限' }, { text: '徐家汇' }, { text: '斜土路' }, { text: '田林' }, { text: '建国西路' }, { text: '衡山路' }, { text: '康健' }, { text: '徐汇滨江' }, { text: '龙华' }, { text: '万体馆' }, { text: '漕河泾' }, { text: '上海南站' }, { text: '华东理工' }, { text: '长桥' }]
            },
            {
              text: '普陀',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '浦东',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '闸北',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '静安',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '黄浦',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '宝山',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '闵行',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '青浦',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '虹口',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '嘉定',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            },
            {
              text: '奉贤',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '地铁',
          children: [
            {
              text: '不限',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '1号线',
              children: [{ text: '不限' }, { text: '徐家汇' }, { text: '汉中路' }, { text: '莘庄' }, { text: '上海体育馆' }, { text: '延长路' }, { text: '上海马戏城' }, { text: '上海火车站' }, { text: '宝安公路' }, { text: '常熟路' }, { text: '新闸路' }, { text: '衡山路' }]
            },
            {
              text: '9号线',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      // 方式 级联选择 数据
      columns2: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      // 租金 级联选择 数据
      columns3: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      show: false
    }
  },
  methods: {
    onSearch () {

    },
    onChange (picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
    },
    // 定义根据参数找房子的函数
    async getHouses () {
      try {
        const res = await findHouse({
          cityId: 'AREA|88cff55c-aaa4-e2e0',
          rentType: this.$route.query.rentType
        })
        const { list } = res.data.body
        this.houseList.push(...list)
      } catch (err) {
        console.log(err)
      }
    },
    // 右侧弹出层显示
    showPopup () {
      console.log('show=true')
      this.show = true
    },
    // 跳转城市列表
    toCityList () {
      this.$router.push('/citylist')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { FindHouseCell }
}
</script>

<style scoped lang='less'>
.van-search {
  background-color: #1cb676;
  height: 46px;
}
/deep/ .van-nav-bar__title {
  max-width: unset;
}

.van-search {
  /deep/ .van-icon {
    color: #7f7f80 !important;
  }
}
/deep/ .van-nav-bar__arrow {
  font-size: 22px !important;
}
.wrapper {
  width: 100%;
  height: 100%;
}
.stickyNav {
  overflow: hidden;
  /deep/ .van-tab__text {
    font-size: 17px;
  }
  /deep/ .van-tabs__wrap {
    border-bottom: 1px solid #e4e6f0;
  }
  .van-icon {
    transform: rotate(90deg);
  }
}
.findhouseWrapper {
  margin-bottom: 60px;
}
</style>
