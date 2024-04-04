<template>
  <Description @register="register" class="mt-4" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  const mockData = {
    name: '-',
  };
  const schema: DescItem[] = [
    {
      field: 'name',
      label: '名称',
    },
    {
      field: 'no',
      label: '编号',
    },
  ];
  export default defineComponent({
    components: { Description },
    setup() {
      const [register] = useDescription({
        title: 'useDescription',
        data: mockData,
        schema: schema,
      });
      return { mockData, schema, register };
    },
  });
</script>
