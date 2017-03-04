//import * as Vue from 'vue/dist/vue.js';
import * as Vue from 'vue';
import * as AppTemplate from './my-component.html';
import { Component, Prop, Watch, Lifecycle, p } from 'av-ts'

@Component({ template: AppTemplate })
export class MyComponent extends Vue {

    name = `Mike Reynolds`
    currentTime = new Date()

    timer() {
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000)
    }

    @Lifecycle mounted() {
        console.log('mounted')
        this.timer()
    }

}