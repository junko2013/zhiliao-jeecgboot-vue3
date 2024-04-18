import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'family',
    align:"center",
    dataIndex: 'family'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '字体下载地址',
    align:"center",
    dataIndex: 'url'
   },
   {
    title: '字体效果预览图',
    align:"center",
    dataIndex: 'preview',
    customRender:render.renderImage,
   },
   {
    title: '风格',
    align:"center",
    dataIndex: 'style_dictText'
   },
   {
    title: '文件大小',
    align:"center",
    dataIndex: 'size'
   },
   {
    title: '字重',
    align:"center",
    dataIndex: 'weight_dictText'
   },
   {
    title: '启用',
    align:"center",
    dataIndex: 'enable',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '热门',
    align:"center",
    dataIndex: 'hot',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '使用次数',
    align:"center",
    dataIndex: 'useTimes'
   },
   {
    title: '评分',
    align:"center",
    dataIndex: 'rating'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "名称",
      field: 'name',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "风格",
      field: 'style',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"font_style"
      },
      //colProps: {span: 6},
 	},
	{
      label: "字重",
      field: 'weight',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"font_weight"
      },
      //colProps: {span: 6},
 	},
	{
      label: "启用",
      field: 'enable',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "热门",
      field: 'hot',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'family',
    field: 'family',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入family!'},
          ];
     },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入名称!'},
          ];
     },
  },
  {
    label: '字体下载地址',
    field: 'url',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入字体下载地址!'},
          ];
     },
  },
  {
    label: '字体效果预览图',
    field: 'preview',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入字体效果预览图!'},
          ];
     },
  },
  {
    label: '风格',
    field: 'style',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"font_style"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入风格!'},
          ];
     },
  },
  {
    label: '文件大小',
    field: 'size',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入文件大小!'},
          ];
     },
  },
  {
    label: '字重',
    field: 'weight',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"font_weight"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入字重!'},
          ];
     },
  },
  {
    label: '启用',
    field: 'enable',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用!'},
          ];
     },
  },
  {
    label: '热门',
    field: 'hot',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入热门!'},
          ];
     },
  },
  {
    label: '创建时间',
    field: 'tsCreate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入创建时间!'},
          ];
     },
  },
  {
    label: '使用次数',
    field: 'useTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入使用次数!'},
          ];
     },
  },
  {
    label: '评分',
    field: 'rating',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入评分!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

// 高级查询数据
export const superQuerySchema = {
  family: {title: 'family',order: 0,view: 'text', type: 'string',},
  name: {title: '名称',order: 1,view: 'text', type: 'string',},
  url: {title: '字体下载地址',order: 2,view: 'text', type: 'string',},
  preview: {title: '字体效果预览图',order: 3,view: 'image', type: 'string',},
  style: {title: '风格',order: 4,view: 'number', type: 'number',},
  size: {title: '文件大小',order: 5,view: 'number', type: 'number',},
  weight: {title: '字重',order: 6,view: 'number', type: 'number',},
  enable: {title: '启用',order: 7,view: 'number', type: 'number',},
  hot: {title: '热门',order: 8,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 9,view: 'datetime', type: 'string',},
  useTimes: {title: '使用次数',order: 10,view: 'number', type: 'number',},
  rating: {title: '评分',order: 11,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
