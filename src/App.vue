<template>
  <div id="app">
    <div>菜单</div>
    <cascader :options=options  v-model="value"></cascader>
  </div>
</template>

<script>
import axios from 'axios';
import Cascader from './components/Cascader.vue';

export default {
  name: 'App',
  components: {
    Cascader,
  },
  data() {
    return {
      value: [],
      options: [],
    };
  },
  created() {
    axios.get('http://114.215.182.183:3000/api/foods').then((res) => {
      // console.log(res);
      this.options = res.data;
    });
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
