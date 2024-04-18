import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '我方',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '对方',
    align:"center",
    dataIndex: 'toUserId_dictText'
   },
   {
    title: '星标',
    align:"center",
    dataIndex: 'isStar',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '聊天背景',
    align:"center",
    dataIndex: 'backImg',
    customRender:render.renderImage,
   },
   {
    title: '联系方式',
    align:"center",
    dataIndex: 'phone'
   },
   {
    title: '更多信息',
    align:"center",
    dataIndex: 'info'
   },
   {
    title: '消息归档',
    align:"center",
    dataIndex: 'isMsgArchive',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '隐藏对话',
    align:"center",
    dataIndex: 'isHide',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '消息免打扰',
    align:"center",
    dataIndex: 'isNoDisturb',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '阅后即焚',
    align:"center",
    dataIndex: 'isReadDel',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '置顶时间',
    align:"center",
    dataIndex: 'tsPin'
   },
   {
    title: '成为好友时间',
    align:"center",
    dataIndex: 'tsFriend'
   },
   {
    title: '更新时间',
    align:"center",
    dataIndex: 'tsUpdate'
   },
   {
    title: '最后对话时间',
    align:"center",
    dataIndex: 'tsLastTalk'
   },
   {
    title: '指定时间后的消息可见',
    align:"center",
    dataIndex: 'tsMsgVisible'
   },
   {
    title: '最后一条阅读的消息时间',
    align:"center",
    dataIndex: 'tsMsgRead'
   },
   {
    title: '添加方式',
    align:"center",
    dataIndex: 'addType_dictText'
   },
   {
    title: '好友状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '权限',
    align:"center",
    dataIndex: 'privilege_dictText'
   },
   {
    title: '标记未读',
    align:"center",
    dataIndex: 'isUnread',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '拉黑时间',
    align:"center",
    dataIndex: 'tsBlack'
   },
   {
    title: '被拉黑时间',
    align:"center",
    dataIndex: 'tsBeenBlack'
   },
   {
    title: '翻译',
    align:"center",
    dataIndex: 'tr'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "我方",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "对方",
      field: 'toUserId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "消息归档",
      field: 'isMsgArchive',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "隐藏对话",
      field: 'isHide',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "消息免打扰",
      field: 'isNoDisturb',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "阅后即焚",
      field: 'isReadDel',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
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
      label: "添加方式",
      field: 'addType',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"friend_add_type"
      },
      //colProps: {span: 6},
 	},
	{
      label: "好友状态",
      field: 'status',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"friend_status"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '我方',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入我方!'},
          ];
     },
  },
  {
    label: '对方',
    field: 'toUserId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入对方!'},
          ];
     },
  },
  {
    label: '星标',
    field: 'isStar',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入星标!'},
          ];
     },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入备注!'},
          ];
     },
  },
  {
    label: '聊天背景',
    field: 'backImg',
     component: 'JImageUpload',
     componentProps:{
      },
  },
  {
    label: '联系方式',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '更多信息',
    field: 'info',
    component: 'Input',
  },
  {
    label: '消息归档',
    field: 'isMsgArchive',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息归档!'},
          ];
     },
  },
  {
    label: '隐藏对话',
    field: 'isHide',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入隐藏对话!'},
          ];
     },
  },
  {
    label: '消息免打扰',
    field: 'isNoDisturb',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息免打扰!'},
          ];
     },
  },
  {
    label: '阅后即焚',
    field: 'isReadDel',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入阅后即焚!'},
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
    label: '置顶时间',
    field: 'tsPin',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '成为好友时间',
    field: 'tsFriend',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '更新时间',
    field: 'tsUpdate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '最后对话时间',
    field: 'tsLastTalk',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '指定时间后的消息可见',
    field: 'tsMsgVisible',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '最后一条阅读的消息时间',
    field: 'tsMsgRead',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '添加方式',
    field: 'addType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"friend_add_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入添加方式!'},
          ];
     },
  },
  {
    label: '好友状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"friend_status"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入好友状态!'},
          ];
     },
  },
  {
    label: '权限',
    field: 'privilege',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"friend_privilege"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入权限!'},
          ];
     },
  },
  {
    label: '标记未读',
    field: 'isUnread',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标记未读!'},
          ];
     },
  },
  {
    label: '拉黑时间',
    field: 'tsBlack',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '被拉黑时间',
    field: 'tsBeenBlack',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '翻译',
    field: 'tr',
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
  userId: {title: '我方',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  toUserId: {title: '对方',order: 1,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  isStar: {title: '星标',order: 2,view: 'switch', type: 'bool',},
  remark: {title: '备注',order: 3,view: 'text', type: 'string',},
  backImg: {title: '聊天背景',order: 4,view: 'image', type: 'string',},
  phone: {title: '联系方式',order: 5,view: 'text', type: 'string',},
  info: {title: '更多信息',order: 6,view: 'text', type: 'string',},
  isMsgArchive: {title: '消息归档',order: 7,view: 'switch', type: 'bool',},
  isHide: {title: '隐藏对话',order: 8,view: 'switch', type: 'bool',},
  isNoDisturb: {title: '消息免打扰',order: 9,view: 'switch', type: 'bool',},
  isReadDel: {title: '阅后即焚',order: 10,view: 'switch', type: 'bool',},
  tsCreate: {title: '创建时间',order: 11,view: 'datetime', type: 'string',},
  tsPin: {title: '置顶时间',order: 12,view: 'datetime', type: 'string',},
  tsFriend: {title: '成为好友时间',order: 13,view: 'datetime', type: 'string',},
  tsUpdate: {title: '更新时间',order: 14,view: 'datetime', type: 'string',},
  tsLastTalk: {title: '最后对话时间',order: 15,view: 'datetime', type: 'string',},
  tsMsgVisible: {title: '指定时间后的消息可见',order: 16,view: 'datetime', type: 'string',},
  tsMsgRead: {title: '最后一条阅读的消息时间',order: 17,view: 'datetime', type: 'string',},
  addType: {title: '添加方式',order: 18,view: 'number', type: 'number',dictCode: 'friend_add_type',},
  status: {title: '好友状态',order: 19,view: 'number', type: 'number',dictCode: 'friend_status',},
  privilege: {title: '权限',order: 20,view: 'number', type: 'number',dictCode: 'friend_privilege',},
  isUnread: {title: '标记未读',order: 21,view: 'switch', type: 'bool',},
  tsBlack: {title: '拉黑时间',order: 22,view: 'datetime', type: 'string',},
  tsBeenBlack: {title: '被拉黑时间',order: 23,view: 'datetime', type: 'string',},
  tr: {title: '翻译',order: 24,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
