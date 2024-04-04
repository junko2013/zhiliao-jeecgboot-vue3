<template>
  <BasicModal v-bind="$attrs" :width="modalWidth" :height="modalHeight" @register="registerModal" title="服务器配置" @ok="handleSubmit">
    <a-tabs v-model:activeKey="activeTabKey" @change="handleTabChange" tab-position="left">
      <a-tab-pane key="register" tab="注册">
        <BasicForm v-if="activeTabKey === 'register'" @register="registerForm" :showActionButtonGroup="false" :schemas="registerFormConfig" />
      </a-tab-pane>
      <a-tab-pane key="login" tab="登录">
        <BasicForm v-if="activeTabKey === 'login'" @register="registerForm" :showActionButtonGroup="false" :schemas="loginFormConfig" />
      </a-tab-pane>
      <a-tab-pane key="invite" tab="邀请码">
        <BasicForm v-if="activeTabKey === 'invite'" @register="registerForm" :showActionButtonGroup="false" :schemas="inviteFormConfig" />
      </a-tab-pane>
    </a-tabs>
    <a-row justify="end">
      <a-col>
          <a-alert
            message="Warning"
            description="提示：保存时只会更新当前激活的窗口表单数据"
            type="warning"
            show-icon
          />
      </a-col>
    </a-row>
  </BasicModal>
</template>

<script lang="ts" name="ServerConfigModal" setup>
import { ref, reactive,computed,onMounted,onUnmounted, unref, watch } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { registerFormConfigSchema, loginFormConfigSchema,inviteFormConfigSchema } from './server.data';
import { updateServerConfig, getServerConfig } from './server.api';

const modalWidth = ref(800); // 使用视窗宽度的百分比
const modalHeight = ref(800); // 使用视窗高度的百分比
// 全局表单数据状态
const formModels = reactive({
  register: {},
  login: {},
});

// 可选：监听窗口大小变化，并动态更新模态框大小
function updateModalSize() {
  modalWidth.value = window.innerWidth * 0.8;
  modalHeight.value = window.innerHeight * 0.8;
}

onMounted(() => {
  updateModalSize(); // 初始化时设置一次大小
  window.addEventListener('resize', updateModalSize); // 监听窗口大小变化
});

onUnmounted(() => {
  window.removeEventListener('resize', updateModalSize); // 清理监听器
});


const activeTabKey = ref('register');
const registerFormConfig = ref([...registerFormConfigSchema]);
const loginFormConfig = ref([...loginFormConfigSchema]);
const inviteFormConfig = ref([...inviteFormConfigSchema]);
// 声明Emits
const emit = defineEmits(['success', 'register']);
const serverId = ref(0);
const configId = ref(0);

const [registerForm, { resetFields, setFieldsValue, validate }] = useForm();

const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
  activeTabKey.value = 'register';
  await resetFields();
  setModalProps({ confirmLoading: false });
  serverId.value = data.record.id;
  try {
    const config = await getServerConfig({ id: data.record.id });
    if (config) {
      configId.value = config.id;
      // 根据选项卡初始化不同的表单数据
      await setFieldsValue({ ...config });
    }
  } catch (error) {}
});

async function handleSubmit() {
  try {

    const values = await validate();
    setModalProps({ confirmLoading: true });
    await updateServerConfig({ ...values, id: configId.value,serverId:serverId.value });
    closeModal();
    emit('success');
  } finally {
    setModalProps({ confirmLoading: false });
  }
}

function handleTabChange(key: string) {
  activeTabKey.value = key;
  // 可以在这里根据不同的tab key调整表单配置或重新加载数据
}
</script>
