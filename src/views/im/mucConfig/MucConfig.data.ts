import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '最大群人数',
    align:"center",
    dataIndex: 'maxMemberCount'
   },
   {
    title: '踢人通知 0：不通知，1：全部通知，2：通知群主管理员及本人',
    align:"center",
    dataIndex: 'kickNotice'
   },
   {
    title: '退出通知 0：不通知 1：全部通知 2：通知群主管理员',
    align:"center",
    dataIndex: 'quitNotice'
   },
   {
    title: '成员修改昵称通知 0：不通知 1：全部通知 2：通知群主管理员',
    align:"center",
    dataIndex: 'modifyNicknameNotice'
   },
   {
    title: '撤回通知 0：不通知 1：全部通知 2：通知群主管理员及本人',
    align:"center",
    dataIndex: 'revokeNotice'
   },
   {
    title: '消息撤回时限',
    align:"center",
    dataIndex: 'revokeDuration'
   },
   {
    title: '公开',
    align:"center",
    dataIndex: 'isPublic',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '显示消息已读人数',
    align:"center",
    dataIndex: 'isShowRead',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '显示群昵称',
    align:"center",
    dataIndex: 'isShowNickname',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '禁言通知 0：不通知 1：全部通知 2：通知群主管理员及本人',
    align:"center",
    dataIndex: 'muteNotice'
   },
   {
    title: '新成员进群后允许发言',
    align:"center",
    dataIndex: 'isAllowTalkAfterJoin',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '入群之前的消息可见',
    align:"center",
    dataIndex: 'isShowMsgBeforeJoin',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '新用户注册后加入该群',
    align:"center",
    dataIndex: 'isDefaultJoin',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '移除成员时撤回他的历史发言',
    align:"center",
    dataIndex: 'isRevokeAllWhenKicked',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '加群确认',
    align:"center",
    dataIndex: 'isJoinVerify',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '显示群成员 列表',
    align:"center",
    dataIndex: 'isShowMemberList',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '群成员修改昵称通知所有人',
    align:"center",
    dataIndex: 'isUpdateNicknameNotify',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '欢迎语',
    align:"center",
    dataIndex: 'welcomes'
   },
   {
    title: '查看成员信息',
    align:"center",
    dataIndex: 'viewMember',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '显示群人员数量',
    align:"center",
    dataIndex: 'showMemberCount',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '显示群在线人数',
    align:"center",
    dataIndex: 'showOnlineCount',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '邀请新成员',
    align:"center",
    dataIndex: 'invite',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '允许修改群聊昵称',
    align:"center",
    dataIndex: 'modifyNickname',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '置顶消息',
    align:"center",
    dataIndex: 'pin',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '禁止聊天页、历史消息截图',
    align:"center",
    dataIndex: 'capture',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '消息频率，单位：秒',
    align:"center",
    dataIndex: 'msgRate'
   },
   {
    title: '消息数',
    align:"center",
    dataIndex: 'msgCount'
   },
   {
    title: '发送图片',
    align:"center",
    dataIndex: 'sendImage',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送视频',
    align:"center",
    dataIndex: 'sendVideo',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送动图',
    align:"center",
    dataIndex: 'sendGif',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送贴纸',
    align:"center",
    dataIndex: 'sendSticker',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送语音',
    align:"center",
    dataIndex: 'sendVoice',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送位置',
    align:"center",
    dataIndex: 'sendLocation',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '允许发送红包',
    align:"center",
    dataIndex: 'sendRedPack',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送链接',
    align:"center",
    dataIndex: 'sendLink',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送名片',
    align:"center",
    dataIndex: 'sendCard',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '发送文件',
    align:"center",
    dataIndex: 'sendFile',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '群聊',
    align:"center",
    dataIndex: 'mucId_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '最大群人数',
    field: 'maxMemberCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最大群人数!'},
          ];
     },
  },
  {
    label: '踢人通知 0：不通知，1：全部通知，2：通知群主管理员及本人',
    field: 'kickNotice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入踢人通知 0：不通知，1：全部通知，2：通知群主管理员及本人!'},
          ];
     },
  },
  {
    label: '退出通知 0：不通知 1：全部通知 2：通知群主管理员',
    field: 'quitNotice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入退出通知 0：不通知 1：全部通知 2：通知群主管理员!'},
          ];
     },
  },
  {
    label: '成员修改昵称通知 0：不通知 1：全部通知 2：通知群主管理员',
    field: 'modifyNicknameNotice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入成员修改昵称通知 0：不通知 1：全部通知 2：通知群主管理员!'},
          ];
     },
  },
  {
    label: '撤回通知 0：不通知 1：全部通知 2：通知群主管理员及本人',
    field: 'revokeNotice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入撤回通知 0：不通知 1：全部通知 2：通知群主管理员及本人!'},
          ];
     },
  },
  {
    label: '消息撤回时限',
    field: 'revokeDuration',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息撤回时限!'},
          ];
     },
  },
  {
    label: '公开',
    field: 'isPublic',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入公开!'},
          ];
     },
  },
  {
    label: '显示消息已读人数',
    field: 'isShowRead',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示消息已读人数!'},
          ];
     },
  },
  {
    label: '显示群昵称',
    field: 'isShowNickname',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示群昵称!'},
          ];
     },
  },
  {
    label: '禁言通知 0：不通知 1：全部通知 2：通知群主管理员及本人',
    field: 'muteNotice',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入禁言通知 0：不通知 1：全部通知 2：通知群主管理员及本人!'},
          ];
     },
  },
  {
    label: '新成员进群后允许发言',
    field: 'isAllowTalkAfterJoin',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入新成员进群后允许发言!'},
          ];
     },
  },
  {
    label: '入群之前的消息可见',
    field: 'isShowMsgBeforeJoin',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入入群之前的消息可见!'},
          ];
     },
  },
  {
    label: '新用户注册后加入该群',
    field: 'isDefaultJoin',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入新用户注册后加入该群!'},
          ];
     },
  },
  {
    label: '移除成员时撤回他的历史发言',
    field: 'isRevokeAllWhenKicked',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入移除成员时撤回他的历史发言!'},
          ];
     },
  },
  {
    label: '加群确认',
    field: 'isJoinVerify',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入加群确认!'},
          ];
     },
  },
  {
    label: '显示群成员 列表',
    field: 'isShowMemberList',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示群成员 列表!'},
          ];
     },
  },
  {
    label: '群成员修改昵称通知所有人',
    field: 'isUpdateNicknameNotify',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群成员修改昵称通知所有人!'},
          ];
     },
  },
  {
    label: '欢迎语',
    field: 'welcomes',
    component: 'InputTextArea',
  },
  {
    label: '查看成员信息',
    field: 'viewMember',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入查看成员信息!'},
          ];
     },
  },
  {
    label: '显示群人员数量',
    field: 'showMemberCount',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示群人员数量!'},
          ];
     },
  },
  {
    label: '显示群在线人数',
    field: 'showOnlineCount',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示群在线人数!'},
          ];
     },
  },
  {
    label: '邀请新成员',
    field: 'invite',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入邀请新成员!'},
          ];
     },
  },
  {
    label: '允许修改群聊昵称',
    field: 'modifyNickname',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许修改群聊昵称!'},
          ];
     },
  },
  {
    label: '置顶消息',
    field: 'pin',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入置顶消息!'},
          ];
     },
  },
  {
    label: '禁止聊天页、历史消息截图',
    field: 'capture',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入禁止聊天页、历史消息截图!'},
          ];
     },
  },
  {
    label: '消息频率，单位：秒',
    field: 'msgRate',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息频率，单位：秒!'},
          ];
     },
  },
  {
    label: '消息数',
    field: 'msgCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入消息数!'},
          ];
     },
  },
  {
    label: '发送图片',
    field: 'sendImage',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送图片!'},
          ];
     },
  },
  {
    label: '发送视频',
    field: 'sendVideo',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送视频!'},
          ];
     },
  },
  {
    label: '发送动图',
    field: 'sendGif',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送动图!'},
          ];
     },
  },
  {
    label: '发送贴纸',
    field: 'sendSticker',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送贴纸!'},
          ];
     },
  },
  {
    label: '发送语音',
    field: 'sendVoice',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送语音!'},
          ];
     },
  },
  {
    label: '发送位置',
    field: 'sendLocation',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送位置!'},
          ];
     },
  },
  {
    label: '允许发送红包',
    field: 'sendRedPack',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许发送红包!'},
          ];
     },
  },
  {
    label: '发送链接',
    field: 'sendLink',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送链接!'},
          ];
     },
  },
  {
    label: '发送名片',
    field: 'sendCard',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送名片!'},
          ];
     },
  },
  {
    label: '发送文件',
    field: 'sendFile',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发送文件!'},
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
  maxMemberCount: {title: '最大群人数',order: 0,view: 'number', type: 'number',},
  kickNotice: {title: '踢人通知 0：不通知，1：全部通知，2：通知群主管理员及本人',order: 1,view: 'number', type: 'number',},
  quitNotice: {title: '退出通知 0：不通知 1：全部通知 2：通知群主管理员',order: 2,view: 'number', type: 'number',},
  modifyNicknameNotice: {title: '成员修改昵称通知 0：不通知 1：全部通知 2：通知群主管理员',order: 3,view: 'number', type: 'number',},
  revokeNotice: {title: '撤回通知 0：不通知 1：全部通知 2：通知群主管理员及本人',order: 4,view: 'number', type: 'number',},
  revokeDuration: {title: '消息撤回时限',order: 5,view: 'number', type: 'number',},
  isPublic: {title: '公开',order: 6,view: 'number', type: 'number',},
  isShowRead: {title: '显示消息已读人数',order: 7,view: 'number', type: 'number',},
  isShowNickname: {title: '显示群昵称',order: 8,view: 'number', type: 'number',},
  muteNotice: {title: '禁言通知 0：不通知 1：全部通知 2：通知群主管理员及本人',order: 9,view: 'number', type: 'number',},
  isAllowTalkAfterJoin: {title: '新成员进群后允许发言',order: 10,view: 'number', type: 'number',},
  isShowMsgBeforeJoin: {title: '入群之前的消息可见',order: 11,view: 'number', type: 'number',},
  isDefaultJoin: {title: '新用户注册后加入该群',order: 12,view: 'number', type: 'number',},
  isRevokeAllWhenKicked: {title: '移除成员时撤回他的历史发言',order: 13,view: 'number', type: 'number',},
  isJoinVerify: {title: '加群确认',order: 14,view: 'number', type: 'number',},
  isShowMemberList: {title: '显示群成员 列表',order: 15,view: 'number', type: 'number',},
  isUpdateNicknameNotify: {title: '群成员修改昵称通知所有人',order: 16,view: 'number', type: 'number',},
  welcomes: {title: '欢迎语',order: 17,view: 'textarea', type: 'string',},
  viewMember: {title: '查看成员信息',order: 18,view: 'number', type: 'number',},
  showMemberCount: {title: '显示群人员数量',order: 19,view: 'number', type: 'number',},
  showOnlineCount: {title: '显示群在线人数',order: 20,view: 'number', type: 'number',},
  invite: {title: '邀请新成员',order: 21,view: 'number', type: 'number',},
  modifyNickname: {title: '允许修改群聊昵称',order: 22,view: 'number', type: 'number',},
  pin: {title: '置顶消息',order: 23,view: 'number', type: 'number',},
  capture: {title: '禁止聊天页、历史消息截图',order: 24,view: 'number', type: 'number',},
  msgRate: {title: '消息频率，单位：秒',order: 25,view: 'number', type: 'number',},
  msgCount: {title: '消息数',order: 26,view: 'number', type: 'number',},
  sendImage: {title: '发送图片',order: 27,view: 'number', type: 'number',},
  sendVideo: {title: '发送视频',order: 28,view: 'number', type: 'number',},
  sendGif: {title: '发送动图',order: 29,view: 'number', type: 'number',},
  sendSticker: {title: '发送贴纸',order: 30,view: 'number', type: 'number',},
  sendVoice: {title: '发送语音',order: 31,view: 'number', type: 'number',},
  sendLocation: {title: '发送位置',order: 32,view: 'number', type: 'number',},
  sendRedPack: {title: '允许发送红包',order: 33,view: 'number', type: 'number',},
  sendLink: {title: '发送链接',order: 34,view: 'number', type: 'number',},
  sendCard: {title: '发送名片',order: 35,view: 'number', type: 'number',},
  sendFile: {title: '发送文件',order: 36,view: 'number', type: 'number',},
  mucId: {title: '群聊',order: 37,view: 'number', type: 'number',dictTable: "im_muc", dictCode: 'id', dictText: 'name',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}