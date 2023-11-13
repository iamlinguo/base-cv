<template>
  <div style="text-align: center">
    <a-upload
      v-model:file-list="fileList"
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :before-upload="beforeUpload"
    >
      <div>
        <plus-outlined></plus-outlined>
        <div class="ant-upload-text">本地上传</div>
      </div>
    </a-upload>
  </div>
  <div style="text-align: center">
    <p>检测状态：{{ checkResult }}</p>
    <img :src="imageUrl" style="width: 400px; height: 400px" /> <span> </span>
    <img :src="imageCheckUrl" style="width: 400px; height: 400px" />
  </div>
</template>
<script lang="ts" setup>
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref } from "vue";
import { check } from "@/api/face";
import { notification } from "ant-design-vue";

const imageUrl = ref<string>("");
const imageCheckUrl = ref<string>("");
const checkResult = ref<string>("");

/**
 * 图片转base64
 */
const getBase64 = (img, callback: (base64Url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

/**
 * 上传文件之前的钩子 （可以恒返回false 从而手动上传）
 * @param file 上传的文件
 * @returns 布尔值或者Promise对象 若返回 false 则停止上传
 */
let fileList: any = ref(null);
const beforeUpload = (file) => {
  checkResult.value = "";
  imageCheckUrl.value = "";
  imageUrl.value = "";
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("只能上传图片文件!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("头像图片不能超过 2MB!");
  }

  // 用于选择图片文件后本地实时预览
  getBase64(file, (base64Url: string) => {
    imageUrl.value = base64Url;
  });
  console.log(file);
  const formData = new FormData();
  formData.append("file", file);
  check(formData)
    .then((res) => {
      imageCheckUrl.value = res.split(",")[1];
      checkResult.value = res.split(",")[1];
      notification.success({ message: "操作成功" });
    })
    .catch((res) => {
      checkResult.value = "操作失败";
      notification.error({ message: "操作失败，图片损坏或不支持" });
    });
  return false;
};
</script>
<style>
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
</style>
