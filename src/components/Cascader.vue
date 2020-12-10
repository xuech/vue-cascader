<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">{{result}}</div>
    <div v-if="isVisible">
      <cascader-item  :options=options :value="value"
      :level=level @change="change"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './CascaderItem.vue';
import utils from '../dirctives/clickOutside';

export default {
  /// 只在组件内部使用
  directives: {
    clickOutside: utils.directives.clickOutside,
    // clickOutside: {
    //   /// 指令的生命周期
    //   inserted(el, bindings) {
    //     document.addEventListener('click', (e) => {
    //       if (e.target === el || el.contains(e.target)) {
    //         return;
    //       }
    //       bindings.value();
    //     });
    //   },
    // },
  },
  name: 'Cascader',
  components: {
    CascaderItem,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    result() {
      return this.value.map((item) => item.label).join('/');
    },
  },
  data() {
    return {
      level: 0,
      isVisible: false,
    };
  },
  methods: {
    change(value) {
      this.$emit('input', value);
    },
    close() {
      this.isVisible = false;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="stylus">
.title
  width 150px
  height 30px
  border 1px solid #ccc
.cascader
  display inline-block
</style>
