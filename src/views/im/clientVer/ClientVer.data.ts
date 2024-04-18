import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '所属平台',
    align:"center",
    dataIndex: 'platform_dictText'
   },
   {
    title: '版本号',
    align:"center",
    dataIndex: 'version'
   },
   {
    title: '下载链接',
    align:"center",
    dataIndex: 'downloadUrl'
   },
   {
    title: '强制更新',
    align:"center",
    dataIndex: 'isForce',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '描述信息',
    align:"center",
    dataIndex: 'info'
   },
   {
    title: '启用',
    align:"center",
    dataIndex: 'enable',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '最低兼容版本号',
    align:"center",
    dataIndex: 'minCompatibleVer'
   },
   {
    title: '发布时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '测试版',
    align:"center",
    dataIndex: 'isBeta',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "所属平台",
      field: 'platform',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"platform"
      },
      //colProps: {span: 6},
 	},
	{
      label: "版本号",
      field: 'version',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "强制更新",
      field: 'isForce',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "描述信息",
      field: 'info',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "启用",
      field: 'enable',
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "最低兼容版本号",
      field: 'minCompatibleVer',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "发布时间",
      field: 'tsCreate',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      //colProps: {span: 6},
 	},
	{
      label: "测试版",
      field: 'isBeta',
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
    label: '所属平台',
    field: 'platform',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"platform"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属平台!'},
          ];
     },
  },
  {
    label: '版本号',
    field: 'version',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入版本号!'},
          ];
     },
  },
  {
    label: '下载链接',
    field: 'downloadUrl',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入下载链接!'},
          ];
     },
  },
  {
    label: '强制更新',
    field: 'isForce',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入强制更新!'},
          ];
     },
  },
  {
    label: '描述信息',
    field: 'info',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入描述信息!'},
          ];
     },
  },
  {
    label: '启用',
    field: 'enable',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用!'},
          ];
     },
  },
  {
    label: '最低兼容版本号',
    field: 'minCompatibleVer',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最低兼容版本号!'},
          ];
     },
  },
  {
    label: '测试版',
    field: 'isBeta',
     component: 'ZlSwitch',
     componentProps:{
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
  platform: {title: '所属平台',order: 0,view: 'number', type: 'number',dictCode: 'platform',},
  version: {title: '版本号',order: 1,view: 'text', type: 'string',},
  downloadUrl: {title: '下载链接',order: 2,view: 'text', type: 'string',},
  isForce: {title: '强制更新',order: 3,view: 'switch', type: 'bool',},
  info: {title: '描述信息',order: 4,view: 'text', type: 'string',},
  enable: {title: '启用',order: 5,view: 'switch', type: 'bool',},
  minCompatibleVer: {title: '最低兼容版本号',order: 6,view: 'text', type: 'string',},
  tsCreate: {title: '发布时间',order: 7,view: 'datetime', type: 'string',},
  isBeta: {title: '测试版',order: 8,view: 'switch', type: 'bool',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
