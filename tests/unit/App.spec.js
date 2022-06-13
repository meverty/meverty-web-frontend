import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'


describe('App', () => {
    it('App exists', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.exists()).toBeTruthy()
    });

});