<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">123</div>
    <div class="content" v-if="isVisible">显示的内容</div>
  </div>
</template>

<script>
export default {
  /// 只在组件内部使用
  directives: {
    clickOutside: {
      /// 指令的生命周期
      inserted(el, bindings) {
        document.addEventListener('click', (e) => {
          if (e.target === el || el.contains(e.target)) {
            return;
          }
          bindings.value();
        });
      },
    },
  },
  name: 'Cascader',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
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
.title {
  width: 150px;
  height: 30px;
}
</style>
