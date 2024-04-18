import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '发起人',
    align:"center",
    dataIndex: 'fromId'
   },
   {
    title: '接收方',
    align:"center",
    dataIndex: 'toId'
   },
   {
    title: '通话频道',
    align:"center",
    dataIndex: 'channelId'
   },
   {
    title: '备注，如失败原因',
    align:"center",
    dataIndex: 'comment'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '接通时间',
    align:"center",
    dataIndex: 'tsAccept'
   },
   {
    title: '取消时间',
    align:"center",
    dataIndex: 'tsCancel'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '超时时间',
    align:"center",
    dataIndex: 'tsTimeout'
   },
   {
    title: '拒接时间',
    align:"center",
    dataIndex: 'tsReject'
   },
   {
    title: '中断时间',
    align:"center",
    dataIndex: 'tsSuspend'
   },
   {
    title: '结束时间',
    align:"center",
    dataIndex: 'tsEnd'
   },
   {
    title: '接通时间',
    align:"center",
    dataIndex: 'tsConnected'
   },
   {
    title: '失败时间',
    align:"center",
    dataIndex: 'tsNotConnected'
   },
   {
    title: '通话时长',
    align:"center",
    dataIndex: 'seconds'
   },
   {
    title: '是视频通话',
    align:"center",
    dataIndex: 'isVideo',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
     },
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
      label: "发起人",
      field: 'fromId',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "接收方",
      field: 'toId',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "状态",
      field: 'status',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"call_status"
      },
      //colProps: {span: 6},
 	},
	{
      label: "接通时间",
      field: 'tsAccept',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
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
      label: "结束时间",
      field: 'tsEnd',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      //colProps: {span: 6},
 	},
     {
      label: "通话时长",
      field: "seconds",
      component: 'JRangeNumber',
      //colProps: {span: 6},
	},
	{
      label: "是视频通话",
      field: 'isVideo',
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
    label: '发起人',
    field: 'fromId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发起人!'},
          ];
     },
  },
  {
    label: '接收方',
    field: 'toId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入接收方!'},
          ];
     },
  },
  {
    label: '通话频道',
    field: 'channelId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通话频道!'},
          ];
     },
  },
  {
    label: '备注，如失败原因',
    field: 'comment',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"call_status"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入状态!'},
          ];
     },
  },
  {
    label: '接通时间',
    field: 'tsAccept',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入接通时间!'},
          ];
     },
  },
  {
    label: '取消时间',
    field: 'tsCancel',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入取消时间!'},
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
    label: '超时时间',
    field: 'tsTimeout',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入超时时间!'},
          ];
     },
  },
  {
    label: '拒接时间',
    field: 'tsReject',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入拒接时间!'},
          ];
     },
  },
  {
    label: '中断时间',
    field: 'tsSuspend',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入中断时间!'},
          ];
     },
  },
  {
    label: '结束时间',
    field: 'tsEnd',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入结束时间!'},
          ];
     },
  },
  {
    label: '接通时间',
    field: 'tsConnected',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入接通时间!'},
          ];
     },
  },
  {
    label: '失败时间',
    field: 'tsNotConnected',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入失败时间!'},
          ];
     },
  },
  {
    label: '通话时长',
    field: 'seconds',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通话时长!'},
          ];
     },
  },
  {
    label: '是视频通话',
    field: 'isVideo',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是视频通话!'},
          ];
     },
    dynamicDisabled:true
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
  fromId: {title: '发起人',order: 0,view: 'number', type: 'number',},
  toId: {title: '接收方',order: 1,view: 'number', type: 'number',},
  channelId: {title: '通话频道',order: 2,view: 'text', type: 'string',},
  comment: {title: '备注，如失败原因',order: 3,view: 'text', type: 'string',},
  status: {title: '状态',order: 4,view: 'number', type: 'number',dictCode: 'call_status',},
  tsAccept: {title: '接通时间',order: 5,view: 'datetime', type: 'string',},
  tsCancel: {title: '取消时间',order: 6,view: 'datetime', type: 'string',},
  tsCreate: {title: '创建时间',order: 7,view: 'datetime', type: 'string',},
  tsTimeout: {title: '超时时间',order: 8,view: 'datetime', type: 'string',},
  tsReject: {title: '拒接时间',order: 9,view: 'datetime', type: 'string',},
  tsSuspend: {title: '中断时间',order: 10,view: 'datetime', type: 'string',},
  tsEnd: {title: '结束时间',order: 11,view: 'datetime', type: 'string',},
  tsConnected: {title: '接通时间',order: 12,view: 'datetime', type: 'string',},
  tsNotConnected: {title: '失败时间',order: 13,view: 'datetime', type: 'string',},
  seconds: {title: '通话时长',order: 14,view: 'number', type: 'number',},
  isVideo: {title: '是视频通话',order: 15,view: 'switch', type: 'bool',},
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
