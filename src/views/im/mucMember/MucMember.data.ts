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
    title: '群聊',
    align:"center",
    dataIndex: 'mucId_dictText'
   },
   {
    title: '群里的昵称',
    align:"center",
    dataIndex: 'nickname'
   },
   {
    title: '聊天背景图',
    align:"center",
    dataIndex: 'backImg',
    customRender:render.renderImage,
   },
   {
    title: '加入时间',
    align:"center",
    dataIndex: 'tsJoin'
   },
   {
    title: '加入方式',
    align:"center",
    dataIndex: 'joinType_dictText'
   },
   {
    title: '置顶时间',
    align:"center",
    dataIndex: 'tsPin'
   },
   {
    title: '免打扰',
    align:"center",
    dataIndex: 'isNoDisturb',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '未读',
    align:"center",
    dataIndex: 'isUnread',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '角色',
    align:"center",
    dataIndex: 'role_dictText'
   },
   {
    title: '头衔',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '消息归档',
    align:"center",
    dataIndex: 'isMsgArchive',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '隐藏对话',
    align:"center",
    dataIndex: 'isHide',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '阅后即焚',
    align:"center",
    dataIndex: 'isReadDel',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '消息可见时间',
    align:"center",
    dataIndex: 'tsMsgVisible'
   },
   {
    title: '最后一条阅读的消息时间',
    align:"center",
    dataIndex: 'tsMsgRead'
   },
   {
    title: '群聊等级',
    align:"center",
    dataIndex: 'levelId_dictText'
   },
   {
    title: '消息未读数',
    align:"center",
    dataIndex: 'unreadCount'
   },
   {
    title: '金币',
    align:"center",
    dataIndex: 'coin'
   },
   {
    title: '更新时间',
    align:"center",
    dataIndex: 'tsUpdate'
   },
   {
    title: '禁言截止',
    align:"center",
    dataIndex: 'tsMute'
   },
   {
    title: '禁言类型',
    align:"center",
    dataIndex: 'muteType'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '被谁踢的',
    align:"center",
    dataIndex: 'kicker_dictText'
   },
   {
    title: '退出时间',
    align:"center",
    dataIndex: 'tsQuit'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
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
      label: "群聊",
      field: 'mucId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc,name,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "群里的昵称",
      field: 'nickname',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "加入时间",
      field: 'tsJoin',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      //colProps: {span: 6},
 	},
	{
      label: "加入方式",
      field: 'joinType',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"muc_member_join_type"
      },
      //colProps: {span: 6},
 	},
	{
      label: "免打扰",
      field: 'isNoDisturb',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "未读",
      field: 'isUnread',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "角色",
      field: 'role',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"muc_member_role"
      },
      //colProps: {span: 6},
 	},
	{
      label: "消息归档",
      field: 'isMsgArchive',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "隐藏对话",
      field: 'isHide',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "阅后即焚",
      field: 'isReadDel',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "群聊等级",
      field: 'levelId',
      component: 'JDictSelectTag',
      componentProps:{
      },
      //colProps: {span: 6},
 	},
     {
      label: "禁言截止",
      field: "tsMute",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
     {
      label: "禁言类型",
      field: "muteType",
      component: 'JRangeNumber',
      //colProps: {span: 6},
	},
	{
      label: "状态",
      field: 'status',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"muc_member_status"
      },
      //colProps: {span: 6},
 	},
	{
      label: "被谁踢的",
      field: 'kicker',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
      },
      //colProps: {span: 6},
 	},
     {
      label: "退出时间",
      field: "tsQuit",
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
    label: '群里的昵称',
    field: 'nickname',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群里的昵称!'},
          ];
     },
  },
  {
    label: '聊天背景图',
    field: 'backImg',
     component: 'JImageUpload',
     componentProps:{
      },
  },
  {
    label: '加入时间',
    field: 'tsJoin',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入加入时间!'},
          ];
     },
  },
  {
    label: '加入方式',
    field: 'joinType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"muc_member_join_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入加入方式!'},
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
    label: '免打扰',
    field: 'isNoDisturb',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入免打扰!'},
          ];
     },
  },
  {
    label: '未读',
    field: 'isUnread',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入未读!'},
          ];
     },
  },
  {
    label: '角色',
    field: 'role',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"muc_member_role"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入角色!'},
          ];
     },
  },
  {
    label: '头衔',
    field: 'title',
    component: 'Input',
  },
  {
    label: '消息归档',
    field: 'isMsgArchive',
     component: 'JSwitch',
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
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入隐藏对话!'},
          ];
     },
  },
  {
    label: '阅后即焚',
    field: 'isReadDel',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入阅后即焚!'},
          ];
     },
  },
  {
    label: '消息可见时间',
    field: 'tsMsgVisible',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息可见时间!'},
          ];
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
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后一条阅读的消息时间!'},
          ];
     },
  },
  {
    label: '群聊等级',
    field: 'levelId',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群聊等级!'},
          ];
     },
  },
  {
    label: '消息未读数',
    field: 'unreadCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息未读数!'},
          ];
     },
  },
  {
    label: '金币',
    field: 'coin',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入金币!'},
          ];
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
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入更新时间!'},
          ];
     },
  },
  {
    label: '禁言截止',
    field: 'tsMute',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入禁言截止!'},
          ];
     },
  },
  {
    label: '禁言类型',
    field: 'muteType',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入禁言类型!'},
          ];
     },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"muc_member_status"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入状态!'},
          ];
     },
  },
  {
    label: '被谁踢的',
    field: 'kicker',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
  },
  {
    label: '退出时间',
    field: 'tsQuit',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入退出时间!'},
          ];
     },
  },
  {
    label: '备注',
    field: 'remark',
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
  userId: {title: '用户',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  mucId: {title: '群聊',order: 1,view: 'number', type: 'number',dictTable: "im_muc", dictCode: 'id', dictText: 'name',},
  nickname: {title: '群里的昵称',order: 2,view: 'text', type: 'string',},
  backImg: {title: '聊天背景图',order: 3,view: 'image', type: 'string',},
  tsJoin: {title: '加入时间',order: 4,view: 'datetime', type: 'string',},
  joinType: {title: '加入方式',order: 5,view: 'number', type: 'number',},
  tsPin: {title: '置顶时间',order: 6,view: 'datetime', type: 'string',},
  isNoDisturb: {title: '免打扰',order: 7,view: 'number', type: 'number',},
  isUnread: {title: '未读',order: 8,view: 'number', type: 'number',},
  role: {title: '角色',order: 9,view: 'number', type: 'number',},
  title: {title: '头衔',order: 10,view: 'text', type: 'string',},
  isMsgArchive: {title: '消息归档',order: 11,view: 'number', type: 'number',},
  isHide: {title: '隐藏对话',order: 12,view: 'number', type: 'number',},
  isReadDel: {title: '阅后即焚',order: 13,view: 'number', type: 'number',},
  tsMsgVisible: {title: '消息可见时间',order: 14,view: 'datetime', type: 'string',},
  tsMsgRead: {title: '最后一条阅读的消息时间',order: 15,view: 'datetime', type: 'string',},
  levelId: {title: '群聊等级',order: 16,view: 'number', type: 'number',,},
  unreadCount: {title: '消息未读数',order: 17,view: 'number', type: 'number',},
  coin: {title: '金币',order: 18,view: 'number', type: 'number',},
  tsUpdate: {title: '更新时间',order: 19,view: 'datetime', type: 'string',},
  tsMute: {title: '禁言截止',order: 20,view: 'datetime', type: 'string',},
  muteType: {title: '禁言类型',order: 21,view: 'number', type: 'number',},
  status: {title: '状态',order: 22,view: 'number', type: 'number',},
  kicker: {title: '被谁踢的',order: 23,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  tsQuit: {title: '退出时间',order: 24,view: 'datetime', type: 'string',},
  remark: {title: '备注',order: 25,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}