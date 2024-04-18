import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '排序',
    align:"center",
    dataIndex: 'orderNo'
   },
   {
    title: '原图',
    align:"center",
    dataIndex: 'origin',
    customRender:render.renderImage,
   },
   {
    title: '缩略图',
    align:"center",
    dataIndex: 'thumb',
    customRender:render.renderImage,
   },
   {
    title: 'md5',
    align:"center",
    dataIndex: 'md5'
   },
   {
    title: '关键词',
    align:"center",
    dataIndex: 'keyword'
   },
   {
    title: 'emoji',
    align:"center",
    dataIndex: 'emoji'
   },
   {
    title: '编码',
    align:"center",
    dataIndex: 'emojiCode'
   },
   {
    title: '图集',
    align:"center",
    dataIndex: 'albumId_dictText'
   },
   {
    title: '添加次数',
    align:"center",
    dataIndex: 'addTimes'
   },
   {
    title: '发送次数',
    align:"center",
    dataIndex: 'sendTimes'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '启用',
    align:"center",
    dataIndex: 'enable',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '宽度',
    align:"center",
    dataIndex: 'width'
   },
   {
    title: '高度',
    align:"center",
    dataIndex: 'height'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "关键词",
      field: 'keyword',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "emoji",
      field: 'emoji',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "图集",
      field: 'albumId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_gif_album,name,id"
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
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '排序',
    field: 'orderNo',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入排序!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '原图',
    field: 'origin',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入原图!'},
          ];
     },
  },
  {
    label: '缩略图',
    field: 'thumb',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入缩略图!'},
          ];
     },
  },
  {
    label: 'md5',
    field: 'md5',
    component: 'Input',
  },
  {
    label: '关键词',
    field: 'keyword',
    component: 'Input',
  },
  {
    label: 'emoji',
    field: 'emoji',
    component: 'Input',
  },
  {
    label: '编码',
    field: 'emojiCode',
    component: 'Input',
  },
  {
    label: '图集',
    field: 'albumId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_gif_album,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入图集!'},
          ];
     },
  },
  {
    label: '添加次数',
    field: 'addTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入添加次数!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '发送次数',
    field: 'sendTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送次数!'},
          ];
     },
    dynamicDisabled:true
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
    dynamicDisabled:true
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
    label: '宽度',
    field: 'width',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入宽度!'},
          ];
     },
  },
  {
    label: '高度',
    field: 'height',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入高度!'},
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
  orderNo: {title: '排序',order: 0,view: 'number', type: 'number',},
  origin: {title: '原图',order: 1,view: 'image', type: 'string',},
  thumb: {title: '缩略图',order: 2,view: 'image', type: 'string',},
  md5: {title: 'md5',order: 3,view: 'text', type: 'string',},
  keyword: {title: '关键词',order: 4,view: 'text', type: 'string',},
  emoji: {title: 'emoji',order: 5,view: 'text', type: 'string',},
  emojiCode: {title: '编码',order: 6,view: 'text', type: 'string',},
  albumId: {title: '图集',order: 7,view: 'number', type: 'number',dictTable: "im_gif_album", dictCode: 'id', dictText: 'name',},
  addTimes: {title: '添加次数',order: 8,view: 'number', type: 'number',},
  sendTimes: {title: '发送次数',order: 9,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 10,view: 'datetime', type: 'string',},
  enable: {title: '启用',order: 11,view: 'number', type: 'number',},
  width: {title: '宽度',order: 12,view: 'number', type: 'number',},
  height: {title: '高度',order: 13,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}