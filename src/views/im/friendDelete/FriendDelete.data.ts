import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '发起人',
    align:"center",
    dataIndex: 'fromId'
   },
   {
    title: '对方',
    align:"center",
    dataIndex: 'toId'
   },
   {
    title: '所属服务器',
    align:"center",
    dataIndex: 'serverId'
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
      label: "发起人",
      field: 'fromId',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "对方",
      field: 'toId',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "创建时间",
      field: 'tsCreate',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '发起人',
    field: 'fromId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发起人!'},
          ];
     },
  },
  {
    label: '对方',
    field: 'toId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入对方!'},
          ];
     },
  },
  {
    label: '所属服务器',
    field: 'serverId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属服务器!'},
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
  fromId: {title: '发起人',order: 0,view: 'number', type: 'number',},
  toId: {title: '对方',order: 1,view: 'number', type: 'number',},
  serverId: {title: '所属服务器',order: 2,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 3,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}