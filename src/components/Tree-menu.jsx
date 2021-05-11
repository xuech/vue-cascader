import ElMenu from './el-menu.vue';
import ElMenuItem from './el-menu-item.vue';
import ElSubMenu from './el-submenu.vue';
import resub from './resub.vue';

export default {
  components: {
    ElMenu, resub, ElMenuItem, ElSubMenu,
  },
  props: {
    data: {},
  },
  render() {
    const renderChild = (data) => data.map((child) => (
      child.children
        ? <el-sub-menu>
            <div slot="title">{child.title}</div>
            {renderChild(child.children)}
          </el-sub-menu> : <el-menu-item>{ child.title }</el-menu-item>
    ));
    return (
      <el-menu>
        {renderChild(this.data)}
      </el-menu>
    );
  },
};
