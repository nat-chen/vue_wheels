import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Col from './col.vue';
import Row from './row.vue';
import Content from './content.vue';
import Footer from './footer.vue';
import Header from './header.vue';
import Layout from './layout.vue';
import Sider from './sider.vue';
import Plugin from './plugin.js';

Vue.component('ui-button', Button);
Vue.component('ui-icon', Icon);
Vue.component('ui-button-group', ButtonGroup);
Vue.component('ui-input', Input)
Vue.component('ui-col', Col)
Vue.component('ui-row', Row)
Vue.component('ui-content', Content)
Vue.component('ui-footer', Footer)
Vue.component('ui-header', Header)
Vue.component('ui-layout', Layout)
Vue.component('ui-sider', Sider)
Vue.use(Plugin);



new Vue({
  el: '#app',
  data: {
    isLoading: true,
    iconName: 'settings',
    message: 'v-model 双向绑定'
  },
  methods: {
    change() {
      this.isLoading = !this.isLoading;
      this.iconName = this.isLoading ? 'loading' : 'settings'
    },
    inputChange(event) {
      console.log(1);
    },
    showToast1() {
      this.$toast('你有一条新消息', {
        enableHtml: false,
        closeButton: {
          text: '按我',
          callback: function() {
            alert('Toast 回调');
          }
        }
      });
    },
    showToast2() {
      this.$toast('自定义消息', {
        position: 'middle',
      });
    }
  }
});