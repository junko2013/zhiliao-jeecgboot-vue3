<template>
  <a-input v-bind="getBindValue" :value="showText" disabled @input="onInput" />
  <a-button @click="getGoogleCode" type="primary" :loading="confirmLoading">点击生成</a-button>
  <a-button @click="clearCode" type="dashed" v-if="showText">清除</a-button>
</template>

<script lang="ts">
import { defineComponent, ref,unref, watch, computed } from 'vue';
import { useAttrs } from '/@/hooks/core/useAttrs';
import { propTypes } from '/@/utils/propTypes';
import { getGoogleCode as fetchGoogleCode } from "/@/api/common/api";
import { omit } from 'lodash-es';

export default defineComponent({
  name: 'GoogleCodeFormItem',
  inheritAttrs: false,
  props: {
    modelValue: propTypes.string.def(''),
    placeholder: propTypes.string.def('请生成谷歌密钥'),
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const attrs = useAttrs();
    const showText = ref(props.modelValue);
    const confirmLoading = ref(false);

    const getBindValue = computed(() => {
      return omit(Object.assign({}, props, unref(attrs)), ['modelValue']);
    });

    watch(() => props.modelValue, (newValue) => {
      showText.value = newValue;
    });

    function onInput(event) {
      emit('update:modelValue', event.target.value);
    }

    function getGoogleCode() {
      confirmLoading.value = true;
      fetchGoogleCode().then((res) => {
        confirmLoading.value = false;
        if (res) {
          showText.value = res;
          emit('update:modelValue', res);
        } else {
          // 处理获取失败的情况
          console.error("获取谷歌密钥失败，请重试。");
        }
      }).catch((error) => {
        confirmLoading.value = false;
        console.error("获取谷歌密钥出错: ", error);
      });
    }

    function clearCode() {
      showText.value = '';
      emit('update:modelValue', '');
    }

    return { showText, getBindValue, getGoogleCode, clearCode,onInput, confirmLoading };
  },
});
</script>

<style scoped>
</style>
