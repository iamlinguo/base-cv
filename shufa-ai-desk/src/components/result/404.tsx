import {defineComponent} from "vue";

export default defineComponent({
    name: '404',
    render() {
       return (
           <a-result status="404" title="404" sub-title="抱歉，您好像走丢了">
               <router-link to={{ path:'/home' }}>
                   <a-button type="primary">返回主页</a-button>
               </router-link>
            </a-result>
       )
    }
})