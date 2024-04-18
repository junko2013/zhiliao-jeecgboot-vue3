import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '用户',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '原图',
    align:"center",
    dataIndex: 'origin'
   },
   {
    title: '缩略图',
    align:"center",
    dataIndex: 'thumb'
   },
   {
    title: '排序',
    align:"center",
    sorter: true,
    dataIndex: 'orderNo'
   },
   {
    title: '关联gif',
    align:"center",
    dataIndex: 'gifId_dictText'
   },
   {
    title: '添加时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '最后发送',
    align:"center",
    dataIndex: 'tsLastSend'
   },
   {
    title: '置顶时间',
    align:"center",
    dataIndex: 'tsPin'
   },
   {
    title: '高度',
    align:"center",
    dataIndex: 'height'
   },
   {
    title: '宽度',
    align:"center",
    dataIndex: 'width'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "用户",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "关联gif",
      field: 'gifId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_gif,keyword,id"
      },
      //colProps: {span: 6},
 	},
     {
      label: "添加时间",
      field: "tsCreate",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
     {
      label: "最后发送",
      field: "tsLastSend",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
     {
      label: "置顶时间",
      field: "tsPin",
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
    label: '用户',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户!'},
          ];
     },
  },
  {
    label: '原图',
    field: 'origin',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入原图!'},
          ];
     },
  },
  {
    label: '缩略图',
    field: 'thumb',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入缩略图!'},
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
    label: '关联gif',
    field: 'gifId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_gif,keyword,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入关联gif!'},
          ];
     },
  },
  {
    label: '添加时间',
    field: 'tsCreate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入添加时间!'},
          ];
     },
  },
  {
    label: '最后发送',
    field: 'tsLastSend',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最后发送!'},
          ];
     },
  },
  {
    label: '置顶时间',
    field: 'tsPin',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入置顶时间!'},
          ];
     },
  },
  {
    label: '高度',
    field: 'height',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入高度!'},
          ];
     },
  },
  {
    label: '宽度',
    field: 'width',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入宽度!'},
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
  userId: {title: '用户',order: 0,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  origin: {title: '原图',order: 1,view: 'text', type: 'string',},
  thumb: {title: '缩略图',order: 2,view: 'text', type: 'string',},
  orderNo: {title: '排序',order: 3,view: 'number', type: 'number',},
  gifId: {title: '关联gif',order: 4,view: 'number', type: 'number',dictTable: "im_gif", dictCode: 'id', dictText: 'keyword',},
  tsCreate: {title: '添加时间',order: 5,view: 'datetime', type: 'string',},
  tsLastSend: {title: '最后发送',order: 6,view: 'datetime', type: 'string',},
  tsPin: {title: '置顶时间',order: 7,view: 'datetime', type: 'string',},
  height: {title: '高度',order: 8,view: 'number', type: 'number',},
  width: {title: '宽度',order: 9,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}