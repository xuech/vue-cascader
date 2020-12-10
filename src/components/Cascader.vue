<template>
  <div class="cascader">
    <div class="title">123</div>
    <div class="content"></div>

  </div>
</template>

<script>
export default {
  name: 'Cascader',
  props: {
    options: {
      type: Object,
      default: () => { },
    },
  },
  data () {
    return {
      isVisible: false,
    },
  }
};

</script>

<style lang="stylus">
.title {
  width: 150px;
  height: 30px;
}
</style>
