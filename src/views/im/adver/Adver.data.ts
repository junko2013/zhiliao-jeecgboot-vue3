import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '标题',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '图片',
    align:"center",
    dataIndex: 'cover',
    customRender:render.renderImage,
   },
   {
    title: '类型',
    align:"center",
    dataIndex: 'type_dictText'
   },
   {
    title: '跳转类型',
    align:"center",
    dataIndex: 'jumpType_dictText'
   },
   {
    title: '跳转链接',
    align:"center",
    dataIndex: 'jumpUrl'
   },
   {
    title: '倒计时',
    align:"center",
    dataIndex: 'timeout'
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
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '标题',
    field: 'title',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标题!'},
          ];
     },
  },
  {
    label: '图片',
    field: 'cover',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入图片!'},
          ];
     },
  },
  {
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"adver_location_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入类型!'},
          ];
     },
  },
  {
    label: '跳转类型',
    field: 'jumpType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"adver_jump_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入跳转类型!'},
          ];
     },
  },
  {
    label: '跳转链接',
    field: 'jumpUrl',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入跳转链接!'},
          ];
     },
  },
  {
    label: '倒计时',
    field: 'timeout',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入倒计时!'},
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
  title: {title: '标题',order: 0,view: 'text', type: 'string',},
  cover: {title: '图片',order: 1,view: 'image', type: 'string',},
  type: {title: '类型',order: 2,view: 'number', type: 'number',},
  jumpType: {title: '跳转类型',order: 3,view: 'number', type: 'number',},
  jumpUrl: {title: '跳转链接',order: 4,view: 'text', type: 'string',},
  timeout: {title: '倒计时',order: 5,view: 'number', type: 'number',},
  enable: {title: '启用',order: 6,view: 'switch', type: 'bool',},
  tsCreate: {title: '创建时间',order: 7,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
