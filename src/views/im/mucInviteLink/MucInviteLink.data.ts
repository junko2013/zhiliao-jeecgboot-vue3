import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '群组',
    align:"center",
    dataIndex: 'mucId_dictText'
   },
   {
    title: '邀请码',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '需要审核',
    align:"center",
    dataIndex: 'needVerify',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '有效时长',
    align:"center",
    dataIndex: 'duration'
   },
   {
    title: '次数限制',
    align:"center",
    dataIndex: 'times'
   },
   {
    title: '使用次数',
    align:"center",
    dataIndex: 'usedTimes'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '失效时间',
    align:"center",
    dataIndex: 'tsValid'
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
    title: '创建人',
    align:"center",
    dataIndex: 'creatorId_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "群组",
      field: 'mucId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc,name,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "邀请码",
      field: 'code',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "名称",
      field: 'name',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "需要审核",
      field: 'needVerify',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "有效时长",
      field: 'duration',
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
      label: "失效时间",
      field: "tsValid",
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
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "创建人",
      field: 'creatorId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '群组',
    field: 'mucId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群组!'},
          ];
     },
  },
  {
    label: '邀请码',
    field: 'code',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入邀请码!'},
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
    label: '需要审核',
    field: 'needVerify',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入需要审核!'},
          ];
     },
  },
  {
    label: '有效时长',
    field: 'duration',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入有效时长!'},
          ];
     },
  },
  {
    label: '次数限制',
    field: 'times',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入次数限制!'},
          ];
     },
  },
  {
    label: '使用次数',
    field: 'usedTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入使用次数!'},
          ];
     },
  },
  {
    label: '失效时间',
    field: 'tsValid',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入失效时间!'},
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
  mucId: {title: '群组',order: 0,view: 'number', type: 'number',dictTable: "im_muc", dictCode: 'id', dictText: 'name',},
  code: {title: '邀请码',order: 1,view: 'text', type: 'string',},
  name: {title: '名称',order: 2,view: 'text', type: 'string',},
  needVerify: {title: '需要审核',order: 3,view: 'number', type: 'number',},
  duration: {title: '有效时长',order: 4,view: 'number', type: 'number',},
  times: {title: '次数限制',order: 5,view: 'number', type: 'number',},
  usedTimes: {title: '使用次数',order: 6,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 7,view: 'datetime', type: 'string',},
  tsValid: {title: '失效时间',order: 8,view: 'datetime', type: 'string',},
  enable: {title: '启用',order: 9,view: 'number', type: 'number',},
  creatorId: {title: '创建人',order: 10,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}