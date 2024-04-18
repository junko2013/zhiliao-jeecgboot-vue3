import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '类型',
    align:"center",
    dataIndex: 'typeId_dictText'
   },
   {
    title: '所属用户',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '提交时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
   {
    title: '图片',
    align:"center",
    dataIndex: 'imgUrl'
   },
   {
    title: '标题',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '回复',
    align:"center",
    dataIndex: 'reply'
   },
   {
    title: '联系方式',
    align:"center",
    dataIndex: 'contact'
   },
   {
    title: '处理时间',
    align:"center",
    dataIndex: 'tsDeal'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "类型",
      field: 'typeId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_feedback_type,title,id"
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
     {
      label: "提交时间",
      field: "tsCreate",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
	{
      label: "联系方式",
      field: 'contact',
      component: 'Input',
      //colProps: {span: 6},
 	},
     {
      label: "处理时间",
      field: "tsDeal",
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
    label: '类型',
    field: 'typeId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_feedback_type,title,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入类型!'},
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
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属用户!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '提交时间',
    field: 'tsCreate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入提交时间!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '图片',
    field: 'imgUrl',
    component: 'InputTextArea',
    dynamicDisabled:true
  },
  {
    label: '标题',
    field: 'title',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入标题!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '内容',
    field: 'content',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入内容!'},
          ];
     },
    dynamicDisabled:true
  },
  {
    label: '回复',
    field: 'reply',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入回复!'},
          ];
     },
  },
  {
    label: '联系方式',
    field: 'contact',
    component: 'Input',
    dynamicDisabled:true
  },
  {
    label: '处理时间',
    field: 'tsDeal',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
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
  typeId: {title: '类型',order: 0,view: 'number', type: 'number',dictTable: "im_feedback_type", dictCode: 'id', dictText: 'title',},
  userId: {title: '所属用户',order: 1,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  tsCreate: {title: '提交时间',order: 2,view: 'datetime', type: 'string',},
  imgUrl: {title: '图片',order: 3,view: 'textarea', type: 'string',},
  title: {title: '标题',order: 4,view: 'text', type: 'string',},
  content: {title: '内容',order: 5,view: 'text', type: 'string',},
  reply: {title: '回复',order: 6,view: 'text', type: 'string',},
  contact: {title: '联系方式',order: 7,view: 'text', type: 'string',},
  tsDeal: {title: '处理时间',order: 8,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}