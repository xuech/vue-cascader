<template>
  <div id="app">
    <div>菜单</div>
    <!-- <cascader
      :options=options
      v-model="value"
    ></cascader> -->

    <tree-menu :data="tree"></tree-menu>
  </div>
</template>

<script>
// import axios from 'axios';
// import Cascader from './components/Cascader.vue';

// import TreeMenu from './components/Tree-menu.vue';
import TreeMenu from './components/Tree-menu';

export default {
  name: 'App',
  components: {
    // Cascader,
    TreeMenu,
  },
  data() {
    return {
      value: [],
      options: [],
      tree: [{
        title: '菜单1',
        children: [
          {
            title: '菜单1-1',
          },
        ],
      }, {
        title: '菜单2',
        children: [
          {
            title: '菜单2-1',
          },
        ],
      }, {
        title: '菜单3',
        children: [
          {
            title: '菜单3-1',
            children: [
              {
                title: '菜单3-1-1',
              },
            ],
          },
        ],
      }],
    };
  },
  created() {
    // axios.get('http://114.215.182.183:3001/api/foods').then((res) => {
    //   // console.log(res);
    //   this.options = res.data;
    // });
    // this.options = [
    //   {
    //     label: '水果',
    //     value: [
    //       {
    //         label: '苹果',
    //       },
    //     ],

    //   },
    // ];
  },
};
</script>

<style lang="stylus"></style>
