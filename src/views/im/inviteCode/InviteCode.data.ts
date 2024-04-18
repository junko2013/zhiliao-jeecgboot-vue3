import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '邀请码',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '上次使用',
    align:"center",
    dataIndex: 'tsLast'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '最大使用次数，-1：不限制，0：不使用，>0：具体次数',
    align:"center",
    dataIndex: 'maxTimes'
   },
   {
    title: '自动添加的用户账号，多个换行或英文分号隔开',
    align:"center",
    dataIndex: 'userToAdd_dictText'
   },
   {
    title: '自动加入的群聊账号，多个换行或英文分号隔开',
    align:"center",
    dataIndex: 'mucToJoin_dictText'
   },
   {
    title: '使用次数',
    align:"center",
    sorter: true,
    dataIndex: 'times'
   },
   {
    title: '启用',
    align:"center",
    dataIndex: 'enable',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '所属用户',
    align:"center",
    dataIndex: 'userId_dictText'
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
      label: "邀请码",
      field: 'code',
      component: 'Input',
      //colProps: {span: 6},
 	},
     {
      label: "上次使用",
      field: "tsLast",
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
      label: "自动添加的用户账号，多个换行或英文分号隔开",
      field: 'userToAdd',
      component: 'JSelectMultiple',
      componentProps:{
        dictCode:"im_user,account,id",
        triggerChange: true
     },
      //colProps: {span: 6},
 	},
	{
      label: "自动加入的群聊账号，多个换行或英文分号隔开",
      field: 'mucToJoin',
      component: 'JSelectMultiple',
      componentProps:{
        dictCode:"im_muc,account,id",
        triggerChange: true
     },
      //colProps: {span: 6},
 	},
	{
      label: "启用",
      field: 'enable',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "所属用户",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '邀请码',
    field: 'code',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入邀请码!'},
          ];
     },
  },
  {
    label: '上次使用',
    field: 'tsLast',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入上次使用!'},
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
    label: '最大使用次数，-1：不限制，0：不使用，>0：具体次数',
    field: 'maxTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最大使用次数，-1：不限制，0：不使用，>0：具体次数!'},
          ];
     },
  },
  {
    label: '自动添加的用户账号，多个换行或英文分号隔开',
    field: 'userToAdd',
    component: 'JSelectMultiple',
    componentProps:{
        dictCode:"im_user,account,id"
     },
  },
  {
    label: '自动加入的群聊账号，多个换行或英文分号隔开',
    field: 'mucToJoin',
    component: 'JSelectMultiple',
    componentProps:{
        dictCode:"im_muc,account,id"
     },
  },
  {
    label: '使用次数',
    field: 'times',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入使用次数!'},
          ];
     },
  },
  {
    label: '启用',
    field: 'enable',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用!'},
          ];
     },
  },
  {
    label: '所属用户',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
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
  code: {title: '邀请码',order: 0,view: 'text', type: 'string',},
  tsLast: {title: '上次使用',order: 1,view: 'datetime', type: 'string',},
  tsCreate: {title: '创建时间',order: 2,view: 'datetime', type: 'string',},
  maxTimes: {title: '最大使用次数，-1：不限制，0：不使用，>0：具体次数',order: 3,view: 'number', type: 'number',},
  userToAdd: {title: '自动添加的用户账号，多个换行或英文分号隔开',order: 4,view: 'list_multi', type: 'string',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  mucToJoin: {title: '自动加入的群聊账号，多个换行或英文分号隔开',order: 5,view: 'list_multi', type: 'string',dictTable: "im_muc", dictCode: 'id', dictText: 'account',},
  times: {title: '使用次数',order: 6,view: 'number', type: 'number',},
  enable: {title: '启用',order: 7,view: 'number', type: 'number',},
  userId: {title: '所属用户',order: 8,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  serverId: {title: '所属服务器',order: 9,view: 'number', type: 'number',dictTable: "im_server", dictCode: 'id', dictText: 'name',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}