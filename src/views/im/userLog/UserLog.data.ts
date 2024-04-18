import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'userId',
    align:"center",
    dataIndex: 'userId'
   },
   {
    title: 'ip',
    align:"center",
    dataIndex: 'ip'
   },
   {
    title: 'ipInfo',
    align:"center",
    dataIndex: 'ipInfo'
   },
   {
    title: 'deviceId',
    align:"center",
    dataIndex: 'deviceId'
   },
   {
    title: 'devicePlatform',
    align:"center",
    dataIndex: 'devicePlatform'
   },
   {
    title: 'deviceNo',
    align:"center",
    dataIndex: 'deviceNo'
   },
   {
    title: 'deviceName',
    align:"center",
    dataIndex: 'deviceName'
   },
   {
    title: 'deviceSysVer',
    align:"center",
    dataIndex: 'deviceSysVer'
   },
   {
    title: 'deviceIsPhysic',
    align:"center",
    dataIndex: 'deviceIsPhysic'
   },
   {
    title: 'deviceClientVer',
    align:"center",
    dataIndex: 'deviceClientVer'
   },
   {
    title: 'type',
    align:"center",
    dataIndex: 'type'
   },
   {
    title: 'method',
    align:"center",
    dataIndex: 'method'
   },
   {
    title: 'reqParam',
    align:"center",
    dataIndex: 'reqParam'
   },
   {
    title: 'resData',
    align:"center",
    dataIndex: 'resData'
   },
   {
    title: 'uri',
    align:"center",
    dataIndex: 'uri'
   },
   {
    title: 'detail',
    align:"center",
    dataIndex: 'detail'
   },
   {
    title: 'module',
    align:"center",
    dataIndex: 'module'
   },
   {
    title: 'tsCreate',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: 'serverId',
    align:"center",
    dataIndex: 'serverId'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'userId',
    field: 'userId',
    component: 'InputNumber',
  },
  {
    label: 'ip',
    field: 'ip',
    component: 'Input',
  },
  {
    label: 'ipInfo',
    field: 'ipInfo',
    component: 'Input',
  },
  {
    label: 'deviceId',
    field: 'deviceId',
    component: 'InputNumber',
  },
  {
    label: 'devicePlatform',
    field: 'devicePlatform',
    component: 'Input',
  },
  {
    label: 'deviceNo',
    field: 'deviceNo',
    component: 'Input',
  },
  {
    label: 'deviceName',
    field: 'deviceName',
    component: 'Input',
  },
  {
    label: 'deviceSysVer',
    field: 'deviceSysVer',
    component: 'Input',
  },
  {
    label: 'deviceIsPhysic',
    field: 'deviceIsPhysic',
    component: 'InputNumber',
  },
  {
    label: 'deviceClientVer',
    field: 'deviceClientVer',
    component: 'Input',
  },
  {
    label: 'type',
    field: 'type',
    component: 'Input',
  },
  {
    label: 'method',
    field: 'method',
    component: 'Input',
  },
  {
    label: 'reqParam',
    field: 'reqParam',
    component: 'InputTextArea',
  },
  {
    label: 'resData',
    field: 'resData',
    component: 'InputTextArea',
  },
  {
    label: 'uri',
    field: 'uri',
    component: 'Input',
  },
  {
    label: 'detail',
    field: 'detail',
    component: 'InputTextArea',
  },
  {
    label: 'module',
    field: 'module',
    component: 'Input',
  },
  {
    label: 'tsCreate',
    field: 'tsCreate',
    component: 'InputNumber',
  },
  {
    label: 'serverId',
    field: 'serverId',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入serverId!'},
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
  userId: {title: 'userId',order: 0,view: 'number', type: 'number',},
  ip: {title: 'ip',order: 1,view: 'text', type: 'string',},
  ipInfo: {title: 'ipInfo',order: 2,view: 'text', type: 'string',},
  deviceId: {title: 'deviceId',order: 3,view: 'number', type: 'number',},
  devicePlatform: {title: 'devicePlatform',order: 4,view: 'text', type: 'string',},
  deviceNo: {title: 'deviceNo',order: 5,view: 'text', type: 'string',},
  deviceName: {title: 'deviceName',order: 6,view: 'text', type: 'string',},
  deviceSysVer: {title: 'deviceSysVer',order: 7,view: 'text', type: 'string',},
  deviceIsPhysic: {title: 'deviceIsPhysic',order: 8,view: 'number', type: 'number',},
  deviceClientVer: {title: 'deviceClientVer',order: 9,view: 'text', type: 'string',},
  type: {title: 'type',order: 10,view: 'text', type: 'string',},
  method: {title: 'method',order: 11,view: 'text', type: 'string',},
  reqParam: {title: 'reqParam',order: 12,view: 'textarea', type: 'string',},
  resData: {title: 'resData',order: 13,view: 'textarea', type: 'string',},
  uri: {title: 'uri',order: 14,view: 'text', type: 'string',},
  detail: {title: 'detail',order: 15,view: 'textarea', type: 'string',},
  module: {title: 'module',order: 16,view: 'text', type: 'string',},
  tsCreate: {title: 'tsCreate',order: 17,view: 'number', type: 'number',},
  serverId: {title: 'serverId',order: 18,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}