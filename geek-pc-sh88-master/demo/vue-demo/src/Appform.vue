<script setup lang="ts">
import CommonForm from '@/components/commonForm/index.vue'
// 简单校验手机
const mobileValidator = async (rule: any, value: string) => {
  if (!value) {
    return Promise.reject('请输入手机号')
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    return Promise.reject('手机格式不正确，请重新输入')
  } else {
    return Promise.resolve()
  }
}

const formConfig = reactive([
  {
    type: 'input',
    key: 'name',
    label: '姓名',
    attrs: {
      maxlength: 10,
    },
    req: true, //
    disable: true,
  },
  {
    type: 'number',
    key: 'phone',
    label: '电话',
    req: true, //必填
    attrs: {
      style: 'width:100%',
    },
    validator: mobileValidtor, //校验
  },
  {
    type: 'textarea',
    key: 'content',
    label: '备注',
  },
  {
    type: 'radio',
    key: 'sex',
    label: '性别',
    custom: { label: 'content', value: 'code' },
    data: [
      { label: '男', value: 1 },
      { label: '女', value: 0 },
    ],
  },

  {
    type: 'checkbox',
    key: 'game',
    label: '游戏',
    custom: { label: 'content', value: 'code' },
    data: [
      { label: '游戏1', code: 1 },
      { label: '游戏2', code: 0 },
    ],
  },
  {
    type: 'select',
    key: 'hobby',
    data: [
      { label: '篮球', value: 1 },
      { label: '足球', value: 0 },
    ],
    attrs: {
      allowClear: true,
    },
  },
  {
    type: 'date',
    key: 'qq',
    label: '生日',
    // hide:true,
    hide: (data) => data.sex == 1,
  },
  {
    type: 'daterange',
    key: 'www',
    label: '活动时间区间',
  },
  {
    type: 'slot',
    slotName: 'content',
    key: 'content',
    label: '我是插槽',
  },
])
const commonForm = ref()
const submit = async () => {
  let result = await commonForm.value.onSubmit()
  if (result) {
    console.log('表单数据通过检验')
  }
}
</script>
<template>
  <div class="box">
    <a-config-provider :locale="zhCN">
      <CommonForm ref="commonForm" :formConfig="formConfig">
        <template #content="{ formData, key }">
          <input v-model="formData[key]" />
          <span>插槽内容</span></template
        >
      </CommonForm>
      <a-button @click="submit">提交</a-button>
    </a-config-provider>
  </div>
</template>
<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
}
</style>
