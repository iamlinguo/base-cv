<template>
  <a-upload
      v-model:file-list="fileList"
      name="file"
      :data="data"
      :action="src"
      :showUploadList="false"
      :before-upload="beforeUpload"
      @change="handleChange"
  >
    <a-button :loading="status" class="butter-item" :type="type">
      {{ title }}
    </a-button>
  </a-upload>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { UploadChangeParam, UploadFile } from 'ant-design-vue';
import {notification} from 'ant-design-vue'

interface Props {
  type: string
  title: string
  src: string
  data?: object
  beforeUpload?: (file: UploadFile) => boolean
  uploadSuccessHandle?: (file: UploadFile) => void
}

const props = defineProps<Props>()
const fileList = ref([])
const status = ref<boolean>(false)

const handleChange = ({ file }: UploadChangeParam) => {
  console.log(file.status)
  if (file.status === 'done') {
    status.value = false
    notification.success({
      message: "操作成功"
    });
    if (props.uploadSuccessHandle) {
      props.uploadSuccessHandle(file)
    }
  } else if (file.status === 'uploading'){
    status.value = true
  }
}

</script>

<style scoped>

</style>