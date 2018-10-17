import Toast from './toast';

//此处未直接引用 Vue

let currentToast = null;

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast(Vue, message, toastOptions);
      console.log(currentToast);
    }
  }
}


function createToast(Vue, message, toastOptions) {
  let Construtor = Vue.extend(Toast);
  let toast = new Construtor({
    propsData: toastOptions,
  });
  toast.$slots.default = [message];
  toast.$mount();
  document.body.appendChild(toast.$el); //不能置于 document 上
  return toast;
}
