import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '名称',
    align: 'left',
    dataIndex: 'name'
   },
   {
    title: '排序',
    align: 'center',
    dataIndex: 'orderNo'
   },
   {
    title: '父级节点',
    align: 'center',
    dataIndex: 'parentId'
   },
   {
    title: '描述',
    align: 'center',
    dataIndex: 'info'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "名称",
      field: "name",
      component: 'Input',
      //colProps: {span: 6},
     },
	{
      label: "父级节点",
      field: "parentId",
      component: 'Input',
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
    label: '排序',
    field: 'orderNo',
    component: 'InputNumber',
  },
  {
    label: '父级节点',
    field: 'parentId',
    component: 'JTreeSelect',
    componentProps: {
      dict: "im_help_ctg,name,id",
      pidField: "parent_id",
      pidValue: "0",
      hasChildField: "has_child",
    },
  },
  {
    label: '描述',
    field: 'info',
    component: 'Input',
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
  orderNo: {title: '排序',order: 1,view: 'number', type: 'number',},
  parentId: {title: '父级节点',order: 2,view: 'number', type: 'number',},
  info: {title: '描述',order: 3,view: 'text', type: 'string',},
};


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
