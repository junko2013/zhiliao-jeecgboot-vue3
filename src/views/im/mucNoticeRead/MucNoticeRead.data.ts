import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '公告',
    align:"center",
    dataIndex: 'noticeId_dictText'
   },
   {
    title: '阅读人',
    align:"center",
    dataIndex: 'memberId_dictText'
   },
   {
    title: '已读时间',
    align:"center",
    dataIndex: 'tsRead'
   },
   {
    title: '确认时间',
    align:"center",
    dataIndex: 'tsConfirm'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "公告",
      field: 'noticeId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_notice,id,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "阅读人",
      field: 'memberId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
      },
      //colProps: {span: 6},
 	},
     {
      label: "已读时间",
      field: "tsRead",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
     {
      label: "确认时间",
      field: "tsConfirm",
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
    label: '公告',
    field: 'noticeId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_notice,id,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入公告!'},
          ];
     },
  },
  {
    label: '阅读人',
    field: 'memberId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入阅读人!'},
          ];
     },
  },
  {
    label: '已读时间',
    field: 'tsRead',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入已读时间!'},
          ];
     },
  },
  {
    label: '确认时间',
    field: 'tsConfirm',
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
  noticeId: {title: '公告',order: 0,view: 'number', type: 'number',dictTable: "im_muc_notice", dictCode: 'id', dictText: 'id',},
  memberId: {title: '阅读人',order: 1,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  tsRead: {title: '已读时间',order: 2,view: 'datetime', type: 'string',},
  tsConfirm: {title: '确认时间',order: 3,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}