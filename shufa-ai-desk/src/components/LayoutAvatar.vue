<template>
  <!-- <a-dropdown>
      <a class="ant-dropdown-link">
        <a-avatar size="large">
          <template #icon><UserOutlined/></template>
        </a-avatar>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item  @click="logout" key="1">
            退出
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown> -->
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, toRefs } from "vue";
import { UserOutlined, DribbbleOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";

/**
 * @description 头像组件

 * @version 21:39 2022/6/10
 */
export default defineComponent({
  name: "LayoutAvatar",
  components: {
    UserOutlined,
    DribbbleOutlined,
  },
  setup() {
    const store = useStore();
    const methods = reactive({});
    return {
      ...toRefs(methods),
    };
  },
});
</script>