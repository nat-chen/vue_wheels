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
import Tabs from './tabs.vue';
import TabsBody from './tabs-body.vue';
import TabsHead from './tabs-head.vue';
import TabsItem from './tabs-item.vue';
import TabsPane from './tabs-pane.vue';
import Popover from './popover.vue';
import CollapseItem from './collapse-item.vue';
import Collapse from './collapse.vue';


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
Vue.component('ui-tabs', Tabs)
Vue.component('ui-tabs-body', TabsBody)
Vue.component('ui-tabs-head', TabsHead)
Vue.component('ui-tabs-item', TabsItem)
Vue.component('ui-tabs-pane', TabsPane)
Vue.component('ui-popover', Popover)
Vue.component('ui-collapse', Collapse)
Vue.component('ui-collapse-item', CollapseItem)


Vue.use(Plugin);


new Vue({
  el: '#app',
  data: {
    isLoading: true,
    iconName: 'settings',
    message: 'v-model 双向绑定',
    selectedTab: ['1'],
  },
  methods: {
    change() {
      this.isLoading = !this.isLoading;
      this.iconName = this.isLoading ? 'loading' : 'settings'
    },
    inputChange(event) {
      console.log('Listening input change');
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