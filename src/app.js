import Vue from 'vue';
import UIButton from './button.vue';
import UIIcon from './icon.vue';

Vue.component('ui-button', UIButton);
Vue.component('ui-icon', UIIcon);

new Vue({
  el: '#app',
});