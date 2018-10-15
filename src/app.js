import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';


Vue.component('ui-button', Button);
Vue.component('ui-icon', Icon);
Vue.component('ui-button-group', ButtonGroup);
Vue.component('ui-input', Input)


new Vue({
  el: '#app',
  data: {
    isLoading: true,
    iconName: 'settings',
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