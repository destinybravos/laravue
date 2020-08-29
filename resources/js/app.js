/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./js/testcomponet');

window.Vue = require('vue');



// Font-Awesome Library Includes
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faUser, faUsers, faSignInAlt, faSignOutAlt, faKey, faUserLock, faEnvelope, faPhone, 
    faPhoneAlt, faSpinner, faCircleNotch, faTimesCircle, faCheckCircle, faLock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUser, faUsers,faSignInAlt, faSignOutAlt, faKey, faUserLock, faEnvelope, faPhone, faPhoneAlt, faSpinner, faCircleNotch, faTimesCircle, faCheckCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);


// Import the CKEditor Library
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('test-component', require('./components/TestComponent.vue').default);
Vue.component('zubby-component', require('./components/ZubbyComponent.vue').default);
Vue.component('ferd-component', require('./components/FerdComponent.vue').default);
Vue.component('noble-component', require('./components/NobleComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('register-component', require('./components/RegisterComponent.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
