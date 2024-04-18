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
    title: '内容',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '公告类型',
    align:"center",
    dataIndex: 'type_dictText'
   },
   {
    title: '显示类型',
    align:"center",
    dataIndex: 'showType_dictText'
   },
   {
    title: '置顶',
    align:"center",
    sorter: true,
    dataIndex: 'tsPin'
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
    title: '浏览次数',
    align:"center",
    sorter: true,
    dataIndex: 'viewTimes'
   },
   {
    title: '紧急的',
    align:"center",
    dataIndex: 'isUrgent',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: ' 为0表示所有用户都有，不为0表示具体某个用户的',
    align:"center",
    dataIndex: 'userId_dictText'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '用户阅读时间',
    align:"center",
    dataIndex: 'tsRead'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "标题",
      field: 'title',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "公告类型",
      field: 'type',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"notice_type"
      },
      //colProps: {span: 6},
 	},
	{
      label: "显示类型",
      field: 'showType',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"notice_show_type"
      },
      //colProps: {span: 6},
 	},
     {
      label: "置顶",
      field: "tsPin",
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
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "紧急的",
      field: 'isUrgent',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: " 为0表示所有用户都有，不为0表示具体某个用户的",
      field: 'userId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_user,account,id"
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
     {
      label: "用户阅读时间",
      field: "tsRead",
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
    label: '内容',
    field: 'content',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入内容!'},
          ];
     },
  },
  {
    label: '公告类型',
    field: 'type',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"notice_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入公告类型!'},
          ];
     },
  },
  {
    label: '显示类型',
    field: 'showType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"notice_show_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示类型!'},
          ];
     },
  },
  {
    label: '置顶',
    field: 'tsPin',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入置顶!'},
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
    label: '浏览次数',
    field: 'viewTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入浏览次数!'},
          ];
     },
  },
  {
    label: '紧急的',
    field: 'isUrgent',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入紧急的!'},
          ];
     },
  },
  {
    label: ' 为0表示所有用户都有，不为0表示具体某个用户的',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_user,account,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入 为0表示所有用户都有，不为0表示具体某个用户的!'},
          ];
     },
  },
  {
    label: '用户阅读时间',
    field: 'tsRead',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户阅读时间!'},
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
  content: {title: '内容',order: 1,view: 'text', type: 'string',},
  type: {title: '公告类型',order: 2,view: 'list', type: 'string',dictCode: 'notice_type',},
  showType: {title: '显示类型',order: 3,view: 'number', type: 'number',dictCode: 'notice_show_type',},
  tsPin: {title: '置顶',order: 4,view: 'datetime', type: 'string',},
  enable: {title: '启用',order: 5,view: 'number', type: 'number',},
  viewTimes: {title: '浏览次数',order: 6,view: 'number', type: 'number',},
  isUrgent: {title: '紧急的',order: 7,view: 'number', type: 'number',},
  userId: {title: ' 为0表示所有用户都有，不为0表示具体某个用户的',order: 8,view: 'number', type: 'number',dictTable: "im_user", dictCode: 'id', dictText: 'account',},
  tsCreate: {title: '创建时间',order: 9,view: 'datetime', type: 'string',},
  tsRead: {title: '用户阅读时间',order: 10,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}