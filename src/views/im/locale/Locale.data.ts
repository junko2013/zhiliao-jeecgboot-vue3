import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '语言代码',
    align:"center",
    dataIndex: 'languageCode'
   },
   {
    title: '国家代码',
    align:"center",
    dataIndex: 'countryCode'
   },
   {
    title: '唯一标识符',
    align:"center",
    dataIndex: 'identity'
   },
   {
    title: 'json内容',
    align:"center",
    dataIndex: 'content'
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
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '排序',
    align:"center",
    dataIndex: 'orderNo'
   },
   {
    title: '用户，为空则为系统发布',
    align:"center",
    dataIndex: 'userId_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
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
    label: '语言代码',
    field: 'languageCode',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入语言代码!'},
          ];
     },
  },
  {
    label: '国家代码',
    field: 'countryCode',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入国家代码!'},
          ];
     },
  },
  {
    label: '唯一标识符',
    field: 'identity',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入唯一标识符!'},
          ];
     },
  },
  {
    label: 'json内容',
    field: 'content',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入json内容!'},
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
    label: '排序',
    field: 'orderNo',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入排序!'},
          ];
     },
  },
  {
    label: '用户，为空则为系统发布',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
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
  name: {title: '名称',order: 0,view: 'text', type: 'string',},
  languageCode: {title: '语言代码',order: 1,view: 'text', type: 'string',},
  countryCode: {title: '国家代码',order: 2,view: 'text', type: 'string',},
  identity: {title: '唯一标识符',order: 3,view: 'text', type: 'string',},
  content: {title: 'json内容',order: 4,view: 'textarea', type: 'string',},
  enable: {title: '启用',order: 5,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 6,view: 'number', type: 'number',},
  orderNo: {title: '排序',order: 7,view: 'number', type: 'number',},
  userId: {title: '用户，为空则为系统发布',order: 8,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}