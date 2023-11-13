<template>
  <div class="text-editor">
    <Editor
        id="A"
        style="height: 100%"
        :init="init"
        v-model="tinymceValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose,defineProps, nextTick } from 'vue'
import Editor from '@tinymce/tinymce-vue'
const props = defineProps<{ value: string }>()
const tinymceValue = ref(props.value)
const init = ref({
  height: '100%',
  language_url: './tinymce/zh-Hans.js',
  language: 'zh-Hans',
  branding: false,
  promotion: false,
  plugins: 'fullscreen lists advlist image table preview link codesample charmap pagebreak anchor insertdatetime charmap emoticons paste',
  toolbar: 'undo bold italic underline strikethrough styles outdent indent numlist bullist forecolor backcolor removeformat',
  images_upload_handler: (blobInfo: any) => new Promise((resolve, reject) => {
    getBase64(blobInfo.blob(), (base64Url) => {
      resolve(base64Url)
    })
  }),
  paste_remove_styles: false,
  paste_remove_styles_if_webkit: false
})

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

function setContentHTML(value: string) {
  tinymceValue.value = value
}

defineExpose({ tinymceValue, setContentHTML })
</script>
<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 1000px;
  }
}
</style>