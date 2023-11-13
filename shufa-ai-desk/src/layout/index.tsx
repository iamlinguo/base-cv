
import { SysConstant } from '@/constant/sys'
import { ref, defineComponent } from 'vue'
import LayoutMenu from '../components/LayoutMenu'
import LayoutContent from '../components/LayoutContent'
import LayoutAvatar from '../components/LayoutAvatar.vue'
import 'ant-design-vue/es/breadcrumb/style/css'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: "Layout",
  components: {
    LayoutMenu,
    LayoutContent,
    LayoutAvatar
  },
  setup() {
    const selectedKeyList = ref<string[]>([useRoute().name as string]);
    return () => (
        <a-layout class="layout">
          <a-layout-header>
            <div class="layout-logo">
              <h1>{ SysConstant.title }</h1>
            </div>
            <div class="layout-menu">
              <a-menu
                  v-model:selectedKeys={ selectedKeyList.value }
                  theme="light"
                  mode="horizontal"
              >
                <layout-menu></layout-menu>
              </a-menu>
            </div>
            <div class="layout-icon">
              <layout-avatar></layout-avatar>
            </div>
          </a-layout-header>
          <layout-content></layout-content>
          <a-layout-footer>
            <a href="http://www.fengkeai.com/index.html"> { SysConstant.authorizer } </a>
            © 2022 All rights reserved. 备案号.
            <a href="https://beian.miit.gov.cn/" >{ SysConstant.record }</a>
          </a-layout-footer>
        </a-layout>
    )
  }
})
