import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'ip',
    align:"center",
    dataIndex: 'ip'
   },
   {
    title: 'ip信息',
    align:"center",
    dataIndex: 'info'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'comment'
   },
   {
    title: '类型',
    align:"center",
    dataIndex: 'type_dictText'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'tsCreate'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "ip",
      field: 'ip',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "ip信息",
      field: 'info',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "备注",
      field: 'comment',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "类型",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"block_ip_type"
      },
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
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'ip',
    field: 'ip',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入ip!'},
          ];
     },
  },
  {
    label: 'ip信息',
    field: 'info',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'comment',
    component: 'Input',
  },
  {
    label: '类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"block_ip_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入类型!'},
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
  ip: {title: 'ip',order: 0,view: 'text', type: 'string',},
  info: {title: 'ip信息',order: 1,view: 'text', type: 'string',},
  comment: {title: '备注',order: 2,view: 'text', type: 'string',},
  type: {title: '类型',order: 3,view: 'list', type: 'string',dictCode: 'block_ip_type',},
  tsCreate: {title: '创建时间',order: 4,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}