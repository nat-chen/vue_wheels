import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Col from './col.vue';
import Row from './row.vue';

Vue.component('ui-button', Button);
Vue.component('ui-icon', Icon);
Vue.component('ui-button-group', ButtonGroup);
Vue.component('ui-input', Input)
Vue.component('ui-col', Col)
Vue.component('ui-row', Row)


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
    }
  }
});