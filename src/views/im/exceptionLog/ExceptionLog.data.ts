import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'ip',
    align:"center",
    dataIndex: 'ip'
   },
   {
    title: 'ip信息',
    align:"center",
    dataIndex: 'ipInfo'
   },
   {
    title: '用户',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '访问资源',
    align:"center",
    dataIndex: 'uri'
   },
   {
    title: '方法',
    align:"center",
    dataIndex: 'method'
   },
   {
    title: '请求参数',
    align:"center",
    dataIndex: 'reqParam'
   },
   {
    title: '异常名称',
    align:"center",
    dataIndex: 'excName'
   },
   {
    title: '异常信息',
    align:"center",
    dataIndex: 'excMessage'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "ip",
      field: 'ip',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "用户",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "访问资源",
      field: 'uri',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "异常名称",
      field: 'excName',
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
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'ip',
    field: 'ip',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入ip!'},
          ];
     },
  },
  {
    label: 'ip信息',
    field: 'ipInfo',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入ip信息!'},
          ];
     },
  },
  {
    label: '用户',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
  },
  {
    label: '访问资源',
    field: 'uri',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入访问资源!'},
          ];
     },
  },
  {
    label: '方法',
    field: 'method',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入方法!'},
          ];
     },
  },
  {
    label: '请求参数',
    field: 'reqParam',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入请求参数!'},
          ];
     },
  },
  {
    label: '异常名称',
    field: 'excName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入异常名称!'},
          ];
     },
  },
  {
    label: '异常信息',
    field: 'excMessage',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入异常信息!'},
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
  ip: {title: 'ip',order: 0,view: 'text', type: 'string',},
  ipInfo: {title: 'ip信息',order: 1,view: 'text', type: 'string',},
  userId: {title: '用户',order: 2,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  uri: {title: '访问资源',order: 3,view: 'text', type: 'string',},
  method: {title: '方法',order: 4,view: 'text', type: 'string',},
  reqParam: {title: '请求参数',order: 5,view: 'textarea', type: 'string',},
  excName: {title: '异常名称',order: 6,view: 'text', type: 'string',},
  excMessage: {title: '异常信息',order: 7,view: 'textarea', type: 'string',},
  tsCreate: {title: '创建时间',order: 8,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}