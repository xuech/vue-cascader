<template>
  <el-menu-item v-if="!data.children">{{data.title}}</el-menu-item>
  <el-sub-menu v-else>
    <template #title>{{data.title}}</template>
    <template v-for="d in data.children">
      <resub
        :data='d'
        :key="d.title"
      ></resub>
    </template>
  </el-sub-menu>

</template>

<script>
import ElMenuItem from './el-menu-item.vue';
import ElSubMenu from './el-submenu.vue';

export default {
  name: 'resub',
  components: {
    ElMenuItem, ElSubMenu,
  },
  props: {
    data: {},
  },
};
</script>
