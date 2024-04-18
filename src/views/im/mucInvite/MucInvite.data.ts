import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '群聊',
    align:"center",
    dataIndex: 'mucId_dictText'
   },
   {
    title: '邀请者',
    align:"center",
    dataIndex: 'inviter_dictText'
   },
   {
    title: '受邀者',
    align:"center",
    dataIndex: 'invitee_dictText'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'comment'
   },
   {
    title: '处理者',
    align:"center",
    dataIndex: 'handler_dictText'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '有效',
    align:"center",
    dataIndex: 'isValid',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '需管理员验证',
    align:"center",
    dataIndex: 'isNeedVerify',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '处理时间',
    align:"center",
    dataIndex: 'tsDeal'
   },
   {
    title: '方式',
    align:"center",
    dataIndex: 'way_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "群聊",
      field: 'mucId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc,name,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "邀请者",
      field: 'inviter',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "受邀者",
      field: 'invitee',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "备注",
      field: 'comment',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "处理者",
      field: 'handler',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
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
	{
      label: "状态",
      field: 'status',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"muc_invite_status"
      },
      //colProps: {span: 6},
 	},
	{
      label: "有效",
      field: 'isValid',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "需管理员验证",
      field: 'isNeedVerify',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
     {
      label: "处理时间",
      field: "tsDeal",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
	{
      label: "方式",
      field: 'way',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"muc_invite_way"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '群聊',
    field: 'mucId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群聊!'},
          ];
     },
  },
  {
    label: '邀请者',
    field: 'inviter',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入邀请者!'},
          ];
     },
  },
  {
    label: '受邀者',
    field: 'invitee',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入受邀者!'},
          ];
     },
  },
  {
    label: '备注',
    field: 'comment',
    component: 'InputTextArea',
  },
  {
    label: '处理者',
    field: 'handler',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"muc_invite_status"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入状态!'},
          ];
     },
  },
  {
    label: '有效',
    field: 'isValid',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入有效!'},
          ];
     },
  },
  {
    label: '需管理员验证',
    field: 'isNeedVerify',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入需管理员验证!'},
          ];
     },
  },
  {
    label: '处理时间',
    field: 'tsDeal',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '方式',
    field: 'way',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"muc_invite_way"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入方式!'},
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
  mucId: {title: '群聊',order: 0,view: 'number', type: 'number',dictTable: "im_muc", dictCode: 'id', dictText: 'name',},
  inviter: {title: '邀请者',order: 1,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  invitee: {title: '受邀者',order: 2,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  comment: {title: '备注',order: 3,view: 'textarea', type: 'string',},
  handler: {title: '处理者',order: 4,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  tsCreate: {title: '创建时间',order: 5,view: 'datetime', type: 'string',},
  status: {title: '状态',order: 6,view: 'number', type: 'number',},
  isValid: {title: '有效',order: 7,view: 'number', type: 'number',},
  isNeedVerify: {title: '需管理员验证',order: 8,view: 'number', type: 'number',},
  tsDeal: {title: '处理时间',order: 9,view: 'datetime', type: 'string',},
  way: {title: '方式',order: 10,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}