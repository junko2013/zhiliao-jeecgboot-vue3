import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '所属用户',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '手机号',
    align:"center",
    dataIndex: 'mobile'
   },
   {
    title: '首写字母',
    align:"center",
    sorter: true,
    dataIndex: 'capital'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '所属服务器',
    align:"center",
    dataIndex: 'serverId_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "所属用户",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "名称",
      field: 'name',
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
    label: '所属用户',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属用户!'},
          ];
     },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '手机号',
    field: 'mobile',
    component: 'Input',
  },
  {
    label: '首写字母',
    field: 'capital',
    component: 'Input',
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
    label: '所属服务器',
    field: 'serverId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_server,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属服务器!'},
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
  userId: {title: '所属用户',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  name: {title: '名称',order: 1,view: 'text', type: 'string',},
  mobile: {title: '手机号',order: 2,view: 'text', type: 'string',},
  capital: {title: '首写字母',order: 3,view: 'text', type: 'string',},
  tsCreate: {title: '创建时间',order: 4,view: 'datetime', type: 'string',},
  serverId: {title: '所属服务器',order: 5,view: 'number', type: 'number',dictTable: "im_server", dictCode: 'id', dictText: 'name',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}