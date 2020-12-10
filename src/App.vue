<template>
  <div id="app">
    <cascader :options=options :value="value" v-model="value"></cascader>
  </div>
</template>

<script>

import Cascader from './components/Cascader.vue';

export default {
  name: 'App',
  components: {
    Cascader,
  },
  data() {
    return {
      value: [],
      options: [
        {
          label: '肉类',
          children: [
            {
              label: '猪肉',
              children: [
                {
                  label: '五花肉',
                },
                {
                  label: '里脊肉',
                },
              ],
            },
          ],
        },
        {
          label: '乳类',
          children: [
            {
              label: '牛奶',
              children: [
                {
                  label: '伊犁',
                },
                {
                  label: '蒙牛',
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="stylus"></style>
