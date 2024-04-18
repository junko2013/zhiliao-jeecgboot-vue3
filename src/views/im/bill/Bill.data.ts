import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '金额',
    align:"center",
    dataIndex: 'amount'
   },
   {
    title: '账变前',
    align:"center",
    dataIndex: 'balanceBefore'
   },
   {
    title: '账变后',
    align:"center",
    dataIndex: 'balanceAfter'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
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
    title: '标题',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'body'
   },
   {
    title: '业务类型',
    align:"center",
    dataIndex: 'type_dictText'
   },
   {
    title: '支付方式',
    align:"center",
    dataIndex: 'payType_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
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
      label: "金额",
      field: "amount",
      component: 'JRangeNumber',
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
	{
      label: "增加",
      field: 'isIncrease',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "标题",
      field: 'title',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "描述",
      field: 'body',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "业务类型",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"bill_type"
      },
      //colProps: {span: 6},
 	},
	{
      label: "支付方式",
      field: 'payType',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"bill_pay_type"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
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
    dynamicDisabled:true
  },
  {
    label: '金额',
    field: 'amount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入金额!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '账变前',
    field: 'balanceBefore',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账变前!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '账变后',
    field: 'balanceAfter',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账变后!'},
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
    dynamicDisabled:true
  },
  {
    label: '标题',
    field: 'title',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标题!'},
          ];
     },
  },
  {
    label: '描述',
    field: 'body',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入描述!'},
          ];
     },
  },
  {
    label: '业务类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"bill_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入业务类型!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '支付方式',
    field: 'payType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"bill_pay_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入支付方式!'},
          ];
     },
    dynamicDisabled:true
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
  userId: {title: '用户',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  amount: {title: '金额',order: 1,view: 'number', type: 'number',},
  balanceBefore: {title: '账变前',order: 2,view: 'number', type: 'number',},
  balanceAfter: {title: '账变后',order: 3,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 4,view: 'datetime', type: 'string',},
  isIncrease: {title: '增加',order: 5,view: 'switch', type: 'bool',},
  title: {title: '标题',order: 6,view: 'text', type: 'string',},
  body: {title: '描述',order: 7,view: 'textarea', type: 'string',},
  type: {title: '业务类型',order: 8,view: 'number', type: 'number',},
  payType: {title: '支付方式',order: 9,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
