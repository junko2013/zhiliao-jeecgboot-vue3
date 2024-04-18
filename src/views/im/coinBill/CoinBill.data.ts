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
    title: '类型',
    align:"center",
    dataIndex: 'type_dictText'
   },
   {
    title: '变动数额',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '入账前金币',
    align:"center",
    dataIndex: 'balanceBefore'
   },
   {
    title: '入账后金币',
    align:"center",
    dataIndex: 'balanceAfter'
   },
   {
    title: '增加',
    align:"center",
    dataIndex: 'isIncrease',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'reason'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'note'
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
      label: "类型",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"coin_bill_type"
      },
      //colProps: {span: 6},
 	},
     {
      label: "变动数额",
      field: "amount",
      component: 'JRangeNumber',
      //colProps: {span: 6},
	},
	{
      label: "增加",
      field: 'isIncrease',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
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
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"coin_bill_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入类型!'},
          ];
     },
  },
  {
    label: '变动数额',
    field: 'amount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入变动数额!'},
          ];
     },
  },
  {
    label: '入账前金币',
    field: 'balanceBefore',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入入账前金币!'},
          ];
     },
  },
  {
    label: '入账后金币',
    field: 'balanceAfter',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入入账后金币!'},
          ];
     },
  },
  {
    label: '增加',
    field: 'isIncrease',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入增加!'},
          ];
     },
  },
  {
    label: '描述',
    field: 'reason',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入描述!'},
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
    label: '备注',
    field: 'note',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入备注!'},
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
  type: {title: '类型',order: 1,view: 'number', type: 'number',},
  amount: {title: '变动数额',order: 2,view: 'number', type: 'number',},
  balanceBefore: {title: '入账前金币',order: 3,view: 'number', type: 'number',},
  balanceAfter: {title: '入账后金币',order: 4,view: 'number', type: 'number',},
  isIncrease: {title: '增加',order: 5,view: 'switch', type: 'bool',},
  reason: {title: '描述',order: 6,view: 'text', type: 'string',},
  tsCreate: {title: '创建时间',order: 7,view: 'datetime', type: 'string',},
  note: {title: '备注',order: 8,view: 'textarea', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
