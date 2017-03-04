import * as Vue from 'vue'
import * as testHtml from './test.html'
import { VueComponent, Prop } from 'vue-typescript'

@VueComponent({ template: testHtml, name: 'test-component'})
export class TestComponent extends Vue {
    name = 'george'
}