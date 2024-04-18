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
    title: '封面原图',
    align:"center",
    dataIndex: 'origin',
    customRender:render.renderImage,
   },
   {
    title: '封面缩略图',
    align:"center",
    dataIndex: 'thumb',
    customRender:render.renderImage,
   },
   {
    title: '排序',
    align:"center",
    sorter: true,
    dataIndex: 'orderNo'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '添加次数',
    align:"center",
    sorter: true,
    dataIndex: 'addTimes'
   },
   {
    title: '启用',
    align:"center",
    sorter: true,
    dataIndex: 'enable',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "名称",
      field: 'name',
      component: 'Input',
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
      label: "启用",
      field: 'enable',
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
    label: '封面原图',
    field: 'origin',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入封面原图!'},
          ];
     },
  },
  {
    label: '封面缩略图',
    field: 'thumb',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入封面缩略图!'},
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
    label: '添加次数',
    field: 'addTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入添加次数!'},
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
  name: {title: '名称',order: 0,view: 'text', type: 'string',},
  origin: {title: '封面原图',order: 1,view: 'image', type: 'string',},
  thumb: {title: '封面缩略图',order: 2,view: 'image', type: 'string',},
  orderNo: {title: '排序',order: 3,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 4,view: 'datetime', type: 'string',},
  addTimes: {title: '添加次数',order: 5,view: 'number', type: 'number',},
  enable: {title: '启用',order: 6,view: 'switch', type: 'bool',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
