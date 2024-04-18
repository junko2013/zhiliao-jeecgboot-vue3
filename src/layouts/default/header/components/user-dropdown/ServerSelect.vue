<template>
  <BasicModal v-bind="config" :maxHeight="500" :title="currTitle" v-model:visible="visible" wrapClassName="loginSelectModal">
    <a-form ref="formRef" v-bind="layout" :colon="false" class="loginSelectForm">
      <a-form-item v-if="isMultiServer" :validate-status="validate_status">
        <!--label内容-->
        <template #label>
          <a-tooltip placement="topLeft">
            <template #title>
              <span>您拥有多台服务器，请选择当前服务器</span>
            </template>
            <a-avatar style="background-color: #87d068" :size="30"> 服务器 </a-avatar>
          </a-tooltip>
        </template>
        <!--服务器下拉内容-->
        <a-select v-model:value="serverSelected" placeholder="请选择服务器" :class="{ 'valid-error': validate_status == 'error' }">
          <template #suffixIcon>
            <Icon icon="ant-design:gold-outline" />
          </template>
          <template v-for="server in serverList" :key="server.id">
            <a-select-option :value="server.id">{{ server.name }}</a-select-option>
          </template>
        </a-select>
      </a-form-item>
    </a-form>

    <template #footer>
      <a-button @click="close">关闭</a-button>
      <a-button @click="handleSubmit" type="primary">确认</a-button>
    </template>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, watch, unref } from 'vue';
  import { Avatar } from 'ant-design-vue';
  import { BasicModal } from '/@/components/Modal';
  import { getUserServers } from '/@/views/im/server/server.api';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';

  const userStore = useUserStore();
  const { createMessage, notification } = useMessage();
  const props = defineProps({
    title: { type: String, default: '服务器选择' },
    closable: { type: Boolean, default: false },
    username: { type: String, default: '' },
  });

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  };

  const config = {
    maskClosable: false,
    closable: false,
    canFullscreen: false,
    width: '500px',
    minHeight: 20,
    maxHeight: 20,
  };
  const currTitle = ref('');

  const isMultiServer = ref(false);
  const currentServerName = ref('');
  const serverSelected = ref();
  const serverList = ref([]);
  const validate_status = ref('');

  //弹窗显隐
  const visible = ref(false);
  /**
   * 弹窗打开前处理
   */
  async function show() {
    //加载租户
    await loadServerList();
    //标题配置
    if (unref(isMultiServer)) {
      currTitle.value = '切换服务器';
      visible.value = true;
    }
  }
  /**
   *加载服务器信息
   */
  async function loadServerList() {
    const result = await getUserServers();
    if (!result.list || result.list.length == 0) {
      return;
    }
    let serverId = userStore.getServer;
    let currentServer = result.list.filter((item) => item.id == serverId);
    currentServerName.value = currentServer && currentServer.length > 0 ? currentServer[0].name : '';
    serverList.value = result.list;
    serverSelected.value = serverId;
    isMultiServer.value = true;
  }

  /**
   * 提交数据
   */
  async function handleSubmit() {
    if (unref(isMultiServer) && unref(serverSelected)==null) {
      validate_status.value = 'error';
      return false;
    }
  }
  /**
   * 关闭model
   */
  function close() {
    departClear();
  }

  /**
   *初始化数据
   */
  function departClear() {
    currTitle.value = '';

    isMultiServer.value = false;
    currentServerName.value = '';
    serverSelected.value = '';
    serverList.value = [];
    validate_status.value = '';

    visible.value = false;
  }

  /**
   * 监听username
   */
  watch(
    () => props.username,
    (value) => {
      value && loadServerList();
    }
  );

  defineExpose({
    show,
  });
</script>
<style lang="less" scoped>
  .loginSelectForm {
    margin-bottom: -20px;
  }

  .loginSelectModal {
    top: 20px;
  }

  .valid-error .ant-select-selection__placeholder {
    color: #f5222d;
  }
</style>
