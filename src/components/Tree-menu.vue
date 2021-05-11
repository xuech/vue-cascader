<template>
  <el-menu>
    <div>demo</div>
    <template v-for="item in data">
      <resub
        :data="item"
        :key="item.title"
      ></resub>
    </template>
  </el-menu>
</template>

<script>
import ElMenu from './el-menu.vue';
import resub from './resub.vue';

export default {
  components: {
    ElMenu, resub,
  },
  props: {
    data: {},
  },
};
</script>
