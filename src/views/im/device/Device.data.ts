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
    title: '平台',
    align:"center",
    dataIndex: 'platform_dictText'
   },
   {
    title: '唯一编号',
    align:"center",
    dataIndex: 'no'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '详情信息',
    align:"center",
    dataIndex: 'detail'
   },
   {
    title: '客户端操作系统版本',
    align:"center",
    dataIndex: 'sysVer'
   },
   {
    title: '客户端应用版本',
    align:"center",
    dataIndex: 'clientVer'
   },
   {
    title: '令牌',
    align:"center",
    dataIndex: 'token'
   },
   {
    title: '极光推送注册id',
    align:"center",
    dataIndex: 'jpushId'
   },
   {
    title: '在线',
    align:"center",
    dataIndex: 'isOnline',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '真机',
    align:"center",
    dataIndex: 'isPhysic',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
   },
   {
    title: '最后上线',
    align:"center",
    dataIndex: 'tsOnline'
   },
   {
    title: '最后离线',
    align:"center",
    dataIndex: 'tsOffline'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '禁用时间',
    align:"center",
    dataIndex: 'tsDisabled'
   },
   {
    title: '最后心跳',
    align:"center",
    dataIndex: 'tsPing'
   },
   {
    title: '所属服务器',
    align:"center",
    dataIndex: 'serverId_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
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
    label: '平台',
    field: 'platform',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"platform"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入平台!'},
          ];
     },
  },
  {
    label: '唯一编号',
    field: 'no',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入唯一编号!'},
          ];
     },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '详情信息',
    field: 'detail',
    component: 'InputTextArea',
  },
  {
    label: '客户端操作系统版本',
    field: 'sysVer',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入客户端操作系统版本!'},
          ];
     },
  },
  {
    label: '客户端应用版本',
    field: 'clientVer',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入客户端应用版本!'},
          ];
     },
  },
  {
    label: '令牌',
    field: 'token',
    component: 'Input',
  },
  {
    label: '极光推送注册id',
    field: 'jpushId',
    component: 'Input',
  },
  {
    label: '在线',
    field: 'isOnline',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入在线!'},
          ];
     },
  },
  {
    label: '真机',
    field: 'isPhysic',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入真机!'},
          ];
     },
  },
  {
    label: '最后上线',
    field: 'tsOnline',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后上线!'},
          ];
     },
  },
  {
    label: '最后离线',
    field: 'tsOffline',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后离线!'},
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
    label: '禁用时间',
    field: 'tsDisabled',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入禁用时间!'},
          ];
     },
  },
  {
    label: '最后心跳',
    field: 'tsPing',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后心跳!'},
          ];
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
  userId: {title: '所属用户',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  platform: {title: '平台',order: 1,view: 'list', type: 'string',dictCode: 'platform',},
  no: {title: '唯一编号',order: 2,view: 'text', type: 'string',},
  name: {title: '名称',order: 3,view: 'text', type: 'string',},
  detail: {title: '详情信息',order: 4,view: 'textarea', type: 'string',},
  sysVer: {title: '客户端操作系统版本',order: 5,view: 'text', type: 'string',},
  clientVer: {title: '客户端应用版本',order: 6,view: 'text', type: 'string',},
  token: {title: '令牌',order: 7,view: 'text', type: 'string',},
  jpushId: {title: '极光推送注册id',order: 8,view: 'text', type: 'string',},
  isOnline: {title: '在线',order: 9,view: 'switch', type: 'bool',},
  isPhysic: {title: '真机',order: 10,view: 'switch', type: 'bool',},
  tsOnline: {title: '最后上线',order: 11,view: 'datetime', type: 'string',},
  tsOffline: {title: '最后离线',order: 12,view: 'datetime', type: 'string',},
  tsCreate: {title: '创建时间',order: 13,view: 'datetime', type: 'string',},
  tsDisabled: {title: '禁用时间',order: 14,view: 'datetime', type: 'string',},
  tsPing: {title: '最后心跳',order: 15,view: 'datetime', type: 'string',},
  serverId: {title: '所属服务器',order: 16,view: 'number', type: 'number',dictTable: "im_server", dictCode: 'id', dictText: 'name',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
