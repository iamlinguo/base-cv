import { defineComponent } from 'vue'

/**
 * @description App

 */
export default defineComponent({
  name: 'App',
  methods: {
    beforeunloadFn(){
      alert("aaaaaaaaaa")
    },
    unloadFn(){
      alert("bbbbbbbbbbbbbbb")
    }
  },
  mounted() {
    window.addEventListener('beforeunload', e => this.beforeunloadFn());
    window.addEventListener('unload', e => this.unloadFn())
  },
  setup() {
    return () => <router-view/>
  }
})