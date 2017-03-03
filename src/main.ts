//import * as Vue from 'vue/dist/vue.js';
import * as Vue from 'vue';
import { MyComponent } from './view'
//import * as MyComponent from './view';
import './main.scss';

new Vue({
    el: '#app',
    components: {
        'myComponent': MyComponent
    }
}) 