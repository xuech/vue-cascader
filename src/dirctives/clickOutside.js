export default {
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
      unbind(el, bindings) {
        document.removeEventListener('click', (e) => {
          if (e.target === el || el.contains(e.target)) {
            return;
          }
          bindings.value();
        });
      },
    },
  },
};
