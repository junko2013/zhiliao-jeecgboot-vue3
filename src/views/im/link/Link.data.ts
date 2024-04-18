import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '图标',
    align:"center",
    dataIndex: 'cover',
    customRender:render.renderImage,
   },
   {
    title: '网页链接',
    align:"center",
    dataIndex: 'href'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '排序',
    align:"center",
    sorter: true,
    dataIndex: 'orderNo'
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
    title: '可见性',
    align:"center",
    dataIndex: 'visibility_dictText'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
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
      label: "启用",
      field: 'enable',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "可见性",
      field: 'visibility',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"visibility"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '图标',
    field: 'cover',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入图标!'},
          ];
     },
  },
  {
    label: '网页链接',
    field: 'href',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入网页链接!'},
          ];
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
    label: '可见性',
    field: 'visibility',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"visibility"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入可见性!'},
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
  cover: {title: '图标',order: 0,view: 'image', type: 'string',},
  href: {title: '网页链接',order: 1,view: 'text', type: 'string',},
  name: {title: '名称',order: 2,view: 'text', type: 'string',},
  orderNo: {title: '排序',order: 3,view: 'number', type: 'number',},
  enable: {title: '启用',order: 4,view: 'number', type: 'number',},
  visibility: {title: '可见性',order: 5,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 6,view: 'datetime', type: 'string',},
  serverId: {title: '所属服务器',order: 7,view: 'number', type: 'number',dictTable: "im_server", dictCode: 'id', dictText: 'name',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}