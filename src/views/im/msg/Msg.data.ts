import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '源消息',
    align:"center",
    dataIndex: 'originId'
   },
   {
    title: '发送人',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '接收方',
    align:"center",
    dataIndex: 'toUserId_dictText'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '消息ID',
    align:"center",
    dataIndex: 'stanzaId'
   },
   {
    title: '回复的消息id',
    align:"center",
    dataIndex: 'replyStanzaId'
   },
   {
    title: '类型',
    align:"center",
    dataIndex: 'type_dictText'
   },
   {
    title: '加密',
    align:"center",
    dataIndex: 'isEncrypt',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '发送时间',
    align:"center",
    dataIndex: 'tsSend'
   },
   {
    title: '送达时间',
    align:"center",
    dataIndex: 'tsReceived'
   },
   {
    title: '归档时间',
    align:"center",
    dataIndex: 'tsArchived'
   },
   {
    title: '置顶时间',
    align:"center",
    dataIndex: 'tsPin'
   },
   {
    title: '逻辑删除时间',
    align:"center",
    dataIndex: 'tsDelete'
   },
   {
    title: '已读时间',
    align:"center",
    dataIndex: 'tsRead'
   },
   {
    title: '撤回时间',
    align:"center",
    dataIndex: 'tsRevoke'
   },
   {
    title: '撤回类型',
    align:"center",
    dataIndex: 'revokeType_dictText'
   },
   {
    title: '是阅后即焚',
    align:"center",
    dataIndex: 'isReadDel',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '是垃圾消息',
    align:"center",
    dataIndex: 'isSpam',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '是发送的',
    align:"center",
    dataIndex: 'isSend',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "发送人",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "接收方",
      field: 'toUserId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "内容",
      field: 'content',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "类型",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"msg_type"
      },
      //colProps: {span: 6},
 	},
	{
      label: "加密",
      field: 'isEncrypt',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
     {
      label: "发送时间",
      field: "tsSend",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
     {
      label: "归档时间",
      field: "tsArchived",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
	{
      label: "是阅后即焚",
      field: 'isReadDel',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "是垃圾消息",
      field: 'isSpam',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "是发送的",
      field: 'isSend',
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
    label: '源消息',
    field: 'originId',
    component: 'InputNumber',
  },
  {
    label: '发送人',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送人!'},
          ];
     },
  },
  {
    label: '接收方',
    field: 'toUserId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入接收方!'},
          ];
     },
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
  },
  {
    label: '消息ID',
    field: 'stanzaId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息ID!'},
          ];
     },
  },
  {
    label: '回复的消息id',
    field: 'replyStanzaId',
    component: 'Input',
  },
  {
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"msg_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入类型!'},
          ];
     },
  },
  {
    label: '加密',
    field: 'isEncrypt',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入加密!'},
          ];
     },
  },
  {
    label: '发送时间',
    field: 'tsSend',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送时间!'},
          ];
     },
  },
  {
    label: '送达时间',
    field: 'tsReceived',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入送达时间!'},
          ];
     },
  },
  {
    label: '归档时间',
    field: 'tsArchived',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入归档时间!'},
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
    label: '逻辑删除时间',
    field: 'tsDelete',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入逻辑删除时间!'},
          ];
     },
  },
  {
    label: '已读时间',
    field: 'tsRead',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入已读时间!'},
          ];
     },
  },
  {
    label: '撤回时间',
    field: 'tsRevoke',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入撤回时间!'},
          ];
     },
  },
  {
    label: '撤回类型',
    field: 'revokeType',
    component: 'JSearchSelect',
    componentProps:{
       dict:"msg_revoke_type"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入撤回类型!'},
          ];
     },
  },
  {
    label: '是阅后即焚',
    field: 'isReadDel',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是阅后即焚!'},
          ];
     },
  },
  {
    label: '是垃圾消息',
    field: 'isSpam',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是垃圾消息!'},
          ];
     },
  },
  {
    label: '是发送的',
    field: 'isSend',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是发送的!'},
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
  originId: {title: '源消息',order: 0,view: 'number', type: 'number',},
  userId: {title: '发送人',order: 1,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  toUserId: {title: '接收方',order: 2,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  content: {title: '内容',order: 3,view: 'textarea', type: 'string',},
  stanzaId: {title: '消息ID',order: 4,view: 'text', type: 'string',},
  replyStanzaId: {title: '回复的消息id',order: 5,view: 'text', type: 'string',},
  type: {title: '类型',order: 6,view: 'number', type: 'number',dictCode: 'msg_type',},
  isEncrypt: {title: '加密',order: 7,view: 'switch', type: 'bool',},
  tsSend: {title: '发送时间',order: 8,view: 'datetime', type: 'string',},
  tsReceived: {title: '送达时间',order: 9,view: 'datetime', type: 'string',},
  tsArchived: {title: '归档时间',order: 10,view: 'datetime', type: 'string',},
  tsPin: {title: '置顶时间',order: 11,view: 'datetime', type: 'string',},
  tsDelete: {title: '逻辑删除时间',order: 12,view: 'datetime', type: 'string',},
  tsRead: {title: '已读时间',order: 13,view: 'datetime', type: 'string',},
  tsRevoke: {title: '撤回时间',order: 14,view: 'datetime', type: 'string',},
  revokeType: {title: '撤回类型',order: 15,view: 'number', type: 'number',dictCode: 'msg_revoke_type',},
  isReadDel: {title: '是阅后即焚',order: 16,view: 'number', type: 'number',},
  isSpam: {title: '是垃圾消息',order: 17,view: 'switch', type: 'bool',},
  isSend: {title: '是发送的',order: 18,view: 'switch', type: 'bool',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
