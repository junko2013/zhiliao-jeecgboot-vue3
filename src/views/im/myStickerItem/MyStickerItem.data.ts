import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '贴纸项',
    align:"center",
    dataIndex: 'stickerItemId_dictText'
   },
   {
    title: '贴纸包',
    align:"center",
    dataIndex: 'stickerId_dictText'
   },
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
    title: 'lottie',
    align:"center",
    dataIndex: 'lottie'
   },
   {
    title: '添加时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "贴纸项",
      field: 'stickerItemId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_sticker_item,id,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "贴纸包",
      field: 'stickerId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_sticker,name,id"
      },
      //colProps: {span: 6},
 	},
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
      label: "添加时间",
      field: "tsCreate",
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
    label: '贴纸项',
    field: 'stickerItemId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_sticker_item,id,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入贴纸项!'},
          ];
     },
  },
  {
    label: '贴纸包',
    field: 'stickerId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_sticker,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入贴纸包!'},
          ];
     },
  },
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
  },
  {
    label: '缩略图',
    field: 'thumb',
    component: 'Input',
  },
  {
    label: 'lottie',
    field: 'lottie',
    component: 'Input',
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
  stickerItemId: {title: '贴纸项',order: 0,view: 'number', type: 'number',dictTable: "im_sticker_item", dictCode: 'id', dictText: 'id',},
  stickerId: {title: '贴纸包',order: 1,view: 'number', type: 'number',dictTable: "im_sticker", dictCode: 'id', dictText: 'name',},
  userId: {title: '用户',order: 2,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  origin: {title: '原图',order: 3,view: 'text', type: 'string',},
  thumb: {title: '缩略图',order: 4,view: 'text', type: 'string',},
  lottie: {title: 'lottie',order: 5,view: 'text', type: 'string',},
  tsCreate: {title: '添加时间',order: 6,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}