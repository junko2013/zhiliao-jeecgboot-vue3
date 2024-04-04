<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    :title="getTitle"
    :width="adaptiveWidth"
    @ok="handleSubmit"
    :showFooter="showFooter"
    destroyOnClose
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { defineComponent, ref, computed, unref, useAttrs } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './server.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { saveOrUpdateServer } from './server.api';
  import { useDrawerAdaptiveWidth } from '/@/hooks/jeecg/useAdaptiveWidth';
  import { getTenantId } from "/@/utils/auth";

  // 声明Emits
  const emit = defineEmits(['success', 'register']);
  const attrs = useAttrs();
  const isUpdate = ref(true);
  const rowId = ref('');
  //表单配置
  const [registerForm, { setProps, resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 90,
    schemas: formSchema,
    showActionButtonGroup: false,
  });
  const showFooter = ref(true);
  //表单赋值
  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    await resetFields();
    showFooter.value = data?.showFooter ?? true;
    setDrawerProps({ confirmLoading: false, showFooter: showFooter.value });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      rowId.value = data.record.id;
    }
    // 无论新增还是编辑，都可以设置表单值
    if (typeof data.record === 'object') {
      setFieldsValue({
        ...data.record,
      });
    }
    setProps({ disabled: !showFooter.value });
  });
  //获取标题
  const getTitle = computed(() => {
    // update-begin--author:liaozhiyang---date:20240306---for：【QQYUN-8389】系统用户详情抽屉title更改
    if (!unref(isUpdate)) {
      return '新增用户';
    } else {
      return unref(showFooter) ? '编辑用户' : '用户详情';
    }
    // update-end--author:liaozhiyang---date:20240306---for：【QQYUN-8389】系统用户详情抽屉title更改
  });
  const { adaptiveWidth } = useDrawerAdaptiveWidth();

  //提交事件
  async function handleSubmit() {
    try {
      let values = await validate();
      setDrawerProps({ confirmLoading: true });
      let isUpdateVal = unref(isUpdate);
      //提交表单
      await saveOrUpdateServer(values, isUpdateVal);
      //关闭弹窗
      closeDrawer();
      //刷新列表
      emit('success',{isUpdateVal ,values});
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
