// styleguide.global.requires.js
import Vue from 'vue'
Vue.component('RouterLink', {
  props: {
    tag: { type: String, default: 'a' },
  },
  render(createElement) {
    return createElement(
      this.tag,
      { attrs: { href: '#' } },
      this.$slots.default,
    )
  },
})
