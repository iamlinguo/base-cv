<template>
  <upload
      v-model:file-list="fileList"
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :before-upload="beforeUpload"
  >
    <div v-if="imageUrl" class="preview-img">
      <div class="preview-mask"></div>
      <img style="width: 128px; height: 128px" :src="imageUrl"  alt="avatar" />
      <span @click.stop>
        <DeleteOutlined  @click="removeHandle"/>
      </span>
    </div>
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">{{ label ? label : "点击上传"}}</div>
    </div>
  </upload>
</template>
<script lang="ts">
import { PlusOutlined, LoadingOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { Upload } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import type { UploadProps } from 'ant-design-vue';

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
    DeleteOutlined,
    Upload
  },
  props: ['src', 'label'],
  setup(props, context) {

    const fileList = ref([]);
    const loading = ref<boolean>(false);
    const imageUrl = ref<string>('');

    const src = props.src
    const label = ref(props.label)

    if (src && src.length > 0) {
      imageUrl.value = src
      loading.value = false
    }

    const beforeUpload = (file: UploadProps['fileList'][number]) => {
      getBase64(file, (base64Url: string) => {
        imageUrl.value = base64Url;
        loading.value = false;
        context.emit("uploadHandle", file)
      });
      return false
    };

    const removeHandle = () => {
      imageUrl.value = ''
      context.emit("uploadHandle")
    }

    return {
      label,
      fileList,
      loading,
      imageUrl,
      removeHandle,
      beforeUpload,
    };
  },
});
</script>
<style lang="less">
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.preview-img {
  position: relative;
  svg {
    width: 16px;
    height: 16px;
    display: none;
    position: absolute;
    left: 45%;
    top: 45%;
    color: #fff;
    z-index: 2;

    &:hover {
      color: red;
    }
  }
  .preview-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    background-color: #00000080;
    z-index: 1;
  }
}

.preview-img:hover {
  .preview-mask {
    display: block;
  }
  svg {
    display: block;
  }
}

</style>
