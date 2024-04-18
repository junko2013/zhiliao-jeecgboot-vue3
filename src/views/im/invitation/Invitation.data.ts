import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '邀请人，为空表示通过系统邀请码注册',
    align:"center",
    dataIndex: 'inviterId_dictText'
   },
   {
    title: '用户',
    align:"center",
    dataIndex: 'userId_dictText'
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
      label: "邀请人，为空表示通过系统邀请码注册",
      field: 'inviterId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
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
    label: '邀请人，为空表示通过系统邀请码注册',
    field: 'inviterId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
  },
  {
    label: '用户',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户!'},
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
  inviterId: {title: '邀请人，为空表示通过系统邀请码注册',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  userId: {title: '用户',order: 1,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  tsCreate: {title: '创建时间',order: 2,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}