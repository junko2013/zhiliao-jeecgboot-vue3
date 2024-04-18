import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '等级',
    align:"center",
    sorter: true,
    dataIndex: 'level'
   },
   {
    title: '发言字数',
    align:"center",
    dataIndex: 'wordCount'
   },
   {
    title: '发言次数',
    align:"center",
    dataIndex: 'chatCount'
   },
   {
    title: '在线天数',
    align:"center",
    dataIndex: 'onlineDays'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "等级",
      field: 'level',
      component: 'Input',
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '等级',
    field: 'level',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入等级!'},
          ];
     },
  },
  {
    label: '发言字数',
    field: 'wordCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发言字数!'},
          ];
     },
  },
  {
    label: '发言次数',
    field: 'chatCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入发言次数!'},
          ];
     },
  },
  {
    label: '在线天数',
    field: 'onlineDays',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入在线天数!'},
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
  level: {title: '等级',order: 0,view: 'number', type: 'number',},
  wordCount: {title: '发言字数',order: 1,view: 'number', type: 'number',},
  chatCount: {title: '发言次数',order: 2,view: 'number', type: 'number',},
  onlineDays: {title: '在线天数',order: 3,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}