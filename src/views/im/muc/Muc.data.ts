import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '创建人',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '管理员',
    align:"center",
    dataIndex: 'adminId_dictText'
   },
   {
    title: '群主',
    align:"center",
    dataIndex: 'masterId_dictText'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '描述',
    align:"center",
    dataIndex: 'info'
   },
   {
    title: '头像原图',
    align:"center",
    dataIndex: 'avatar',
    customRender:render.renderImage,
   },
   {
    title: '头像缩略图',
    align:"center",
    dataIndex: 'smallAvatar',
    customRender:render.renderImage,
   },
   {
    title: '二维码',
    align:"center",
    dataIndex: 'qrCode'
   },
   {
    title: '账号',
    align:"center",
    dataIndex: 'account'
   },
   {
    title: '主题',
    align:"center",
    dataIndex: 'subject'
   },
   {
    title: '群成员数量',
    align:"center",
    sorter: true,
    dataIndex: 'memberCount'
   },
   {
    title: '虚假成员数',
    align:"center",
    sorter: true,
    dataIndex: 'fakeMember'
   },
   {
    title: '虚假在线数',
    align:"center",
    sorter: true,
    dataIndex: 'fakeOnline'
   },
   {
    title: '封禁截止',
    align:"center",
    sorter: true,
    dataIndex: 'tsLocked'
   },
   {
    title: '禁言截止',
    align:"center",
    sorter: true,
    dataIndex: 'tsMute'
   },
   {
    title: '最后发言',
    align:"center",
    sorter: true,
    dataIndex: 'tsLastTalk'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '删除时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsDelete'
   },
   {
    title: '更新时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsUpdate'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "群主",
      field: 'masterId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
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
      label: "描述",
      field: 'info',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "账号",
      field: 'account',
      component: 'Input',
      //colProps: {span: 6},
 	},
     {
      label: "封禁截止",
      field: "tsLocked",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
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
      label: "最后发言",
      field: "tsLastTalk",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
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
      label: "删除时间",
      field: "tsDelete",
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
    label: '创建人',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
  },
  {
    label: '管理员',
    field: 'adminId',
    component: 'JSelectUser',
    componentProps:{
        labelKey:'realname',
     },
  },
  {
    label: '群主',
    field: 'masterId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入名称!'},
          ];
     },
  },
  {
    label: '描述',
    field: 'info',
    component: 'Input',
  },
  {
    label: '头像原图',
    field: 'avatar',
     component: 'JImageUpload',
     componentProps:{
      },
  },
  {
    label: '头像缩略图',
    field: 'smallAvatar',
     component: 'JImageUpload',
     componentProps:{
      },
  },
  {
    label: '二维码',
    field: 'qrCode',
    component: 'Input',
  },
  {
    label: '账号',
    field: 'account',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账号!'},
          ];
     },
  },
  {
    label: '主题',
    field: 'subject',
    component: 'Input',
  },
  {
    label: '群成员数量',
    field: 'memberCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群成员数量!'},
          ];
     },
  },
  {
    label: '虚假成员数',
    field: 'fakeMember',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入虚假成员数!'},
          ];
     },
  },
  {
    label: '虚假在线数',
    field: 'fakeOnline',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入虚假在线数!'},
          ];
     },
  },
  {
    label: '封禁截止',
    field: 'tsLocked',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入封禁截止!'},
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
    label: '最后发言',
    field: 'tsLastTalk',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后发言!'},
          ];
     },
  },
  {
    label: '删除时间',
    field: 'tsDelete',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入删除时间!'},
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
  userId: {title: '创建人',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  adminId: {title: '管理员',order: 1,view: 'sel_user', type: 'string',},
  masterId: {title: '群主',order: 2,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  name: {title: '名称',order: 3,view: 'text', type: 'string',},
  info: {title: '描述',order: 4,view: 'text', type: 'string',},
  avatar: {title: '头像原图',order: 5,view: 'image', type: 'string',},
  smallAvatar: {title: '头像缩略图',order: 6,view: 'image', type: 'string',},
  qrCode: {title: '二维码',order: 7,view: 'text', type: 'string',},
  account: {title: '账号',order: 8,view: 'text', type: 'string',},
  subject: {title: '主题',order: 9,view: 'text', type: 'string',},
  memberCount: {title: '群成员数量',order: 10,view: 'number', type: 'number',},
  fakeMember: {title: '虚假成员数',order: 11,view: 'number', type: 'number',},
  fakeOnline: {title: '虚假在线数',order: 12,view: 'number', type: 'number',},
  tsLocked: {title: '封禁截止',order: 13,view: 'datetime', type: 'string',},
  tsMute: {title: '禁言截止',order: 14,view: 'datetime', type: 'string',},
  tsLastTalk: {title: '最后发言',order: 15,view: 'datetime', type: 'string',},
  tsCreate: {title: '创建时间',order: 16,view: 'datetime', type: 'string',},
  tsDelete: {title: '删除时间',order: 17,view: 'datetime', type: 'string',},
  tsUpdate: {title: '更新时间',order: 18,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}