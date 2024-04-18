import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '所属用户',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: '原图',
    align:"center",
    dataIndex: 'origin'
   },
   {
    title: '缩略图',
    align:"center",
    dataIndex: 'thumb'
   },
   {
    title: '高度',
    align:"center",
    dataIndex: 'height'
   },
   {
    title: '宽度',
    align:"center",
    dataIndex: 'width'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '最后发送时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsSend'
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
    title: '置顶时间',
    align:"center",
    dataIndex: 'tsPin'
   },
   {
    title: '关联词',
    align:"center",
    dataIndex: 'keyword'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "所属用户",
      field: 'userId',
      component: 'Input',
      //colProps: {span: 6},
 	},
     {
      label: "创建时间",
      field: "tsCreate",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
     {
      label: "最后发送时间",
      field: "tsSend",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
	{
      label: "启用",
      field: 'enable',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "关联词",
      field: 'keyword',
      component: 'Input',
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '所属用户',
    field: 'userId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属用户!'},
          ];
     },
  },
  {
    label: '原图',
    field: 'origin',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入原图!'},
          ];
     },
  },
  {
    label: '缩略图',
    field: 'thumb',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入缩略图!'},
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
    label: '最后发送时间',
    field: 'tsSend',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后发送时间!'},
          ];
     },
  },
  {
    label: '启用',
    field: 'enable',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用!'},
          ];
     },
  },
  {
    label: '置顶时间',
    field: 'tsPin',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入置顶时间!'},
          ];
     },
  },
  {
    label: '关联词',
    field: 'keyword',
    component: 'Input',
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
  userId: {title: '所属用户',order: 0,view: 'number', type: 'number',},
  origin: {title: '原图',order: 1,view: 'text', type: 'string',},
  thumb: {title: '缩略图',order: 2,view: 'text', type: 'string',},
  height: {title: '高度',order: 3,view: 'number', type: 'number',},
  width: {title: '宽度',order: 4,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 5,view: 'datetime', type: 'string',},
  tsSend: {title: '最后发送时间',order: 6,view: 'datetime', type: 'string',},
  enable: {title: '启用',order: 7,view: 'switch', type: 'bool',},
  tsPin: {title: '置顶时间',order: 8,view: 'datetime', type: 'string',},
  keyword: {title: '关联词',order: 9,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
