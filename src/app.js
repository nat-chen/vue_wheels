import Vue from 'vue';
import UIButton from './button.vue';
import UIIcon from './icon.vue';
import UIButtonGroup from './button-group.vue';

Vue.component('ui-button', UIButton);
Vue.component('ui-icon', UIIcon);
Vue.component('ui-button-group', UIButtonGroup);

new Vue({
  el: '#app',
  data: {
    isLoading: false,
    iconName: 'settings',
  },
  methods: {
    change() {
      this.isLoading = !this.isLoading;
      this.iconName = this.isLoading ? 'loading' : 'settings'
    }
  }
});