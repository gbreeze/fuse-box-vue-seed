//import * as Vue from 'vue/dist/vue.js';
import * as Vue from 'vue';
import * as AppTemplate from './app-template.html';
import { VueComponent, Prop } from 'vue-typescript'

@VueComponent({ template: AppTemplate })
export class MyComponent extends Vue {

    constructor() {
        super()
        this.timer()
    }

    name = `Mike Reynolds`
    currentTime = new Date()

    timer() {
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000)
    }
}