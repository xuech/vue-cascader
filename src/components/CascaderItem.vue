<template>
  <div class="content">
    <div class="content-left">
        <div class="label" v-for="(item, index) in options" :key="index">
          <div @click="selectedItem(item)">{{index}}-{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="lists&&lists.length">
        <cascader-item
          @change="change"
          :options=lists
          :level="level+1"
          :value="value"></cascader-item>
        <!-- <div class="label" v-for="(item, index) in lists" :key="index">
          <div>{{index}}-{{item.label}}</div>
        </div> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'CascaderItem',
  props: {
    level: {
      type: Number,
    },
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentItem: '',
    };
  },
  computed: {
    lists() {
      // return this.currentItem && this.currentItem.children;
      return this.value[this.level] && this.value[this.level].children;
    },

  },
  methods: {
    change(item) {
      this.$emit('change', item);
    },
    selectedItem(item) {
      this.currentItem = item;

      const cloneItem = JSON.parse(JSON.stringify(this.value));
      cloneItem[this.level] = item;
      console.log('cloneItem', cloneItem);
      cloneItem.splice(this.level + 1);
      this.$emit('change', cloneItem);
    },
  },
};
</script>

<style lang="stylus">
.content
  display flex
</style>
