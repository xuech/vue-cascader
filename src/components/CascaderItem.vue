<template>
  <div class="content">
    <div class="content-left">
        <div class="label" v-for="(item, index) in options" :key="index">
          <div @click="selectedItem(item)">{{index}}-{{item.label}}</div>
        </div>
      </div>
      <div class="content-right">
        <div class="label" v-for="(item, index) in lists" :key="index">
          <div>{{index}}-{{item.label}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CascaderItem',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisible: false,
      currentItem: '',
    };
  },
  computed: {
    lists() {
      return this.currentItem && this.currentItem.children;
    },

  },
  methods: {
    selectedItem(item) {
      this.currentItem = item;
    },
  },
};
</script>

<style lang="stylus">
.content
  display flex
</style>
