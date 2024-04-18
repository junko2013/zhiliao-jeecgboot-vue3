import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '群聊',
    align:"center",
    dataIndex: 'mucId_dictText'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '使用弹窗展示公告',
    align:"center",
    dataIndex: 'alertShow',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '需群成员确认收到',
    align:"center",
    dataIndex: 'needConfirm',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '封面图',
    align:"center",
    dataIndex: 'cover',
    customRender:render.renderImage,
   },
   {
    title: '置顶时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsPin'
   },
   {
    title: '引导群成员修改群昵称',
    align:"center",
    dataIndex: 'showModifyNickname',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '创建人',
    align:"center",
    dataIndex: 'creatorId_dictText'
   },
   {
    title: '启用',
    align:"center",
    dataIndex: 'enable',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "群聊",
      field: 'mucId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc,name,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "内容",
      field: 'content',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "使用弹窗展示公告",
      field: 'alertShow',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "需群成员确认收到",
      field: 'needConfirm',
      component: 'JSwitch',
      componentProps:{
           query:true,
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
      label: "创建人",
      field: 'creatorId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
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
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '群聊',
    field: 'mucId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群聊!'},
          ];
     },
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入内容!'},
          ];
     },
  },
  {
    label: '使用弹窗展示公告',
    field: 'alertShow',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入使用弹窗展示公告!'},
          ];
     },
  },
  {
    label: '需群成员确认收到',
    field: 'needConfirm',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入需群成员确认收到!'},
          ];
     },
  },
  {
    label: '封面图',
    field: 'cover',
     component: 'JImageUpload',
     componentProps:{
      },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入封面图!'},
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
  },
  {
    label: '引导群成员修改群昵称',
    field: 'showModifyNickname',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入引导群成员修改群昵称!'},
          ];
     },
  },
  {
    label: '创建人',
    field: 'creatorId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入创建人!'},
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
  mucId: {title: '群聊',order: 0,view: 'number', type: 'number',dictTable: "im_muc", dictCode: 'id', dictText: 'name',},
  content: {title: '内容',order: 1,view: 'textarea', type: 'string',},
  alertShow: {title: '使用弹窗展示公告',order: 2,view: 'number', type: 'number',},
  needConfirm: {title: '需群成员确认收到',order: 3,view: 'number', type: 'number',},
  cover: {title: '封面图',order: 4,view: 'image', type: 'string',},
  tsPin: {title: '置顶时间',order: 5,view: 'datetime', type: 'string',},
  showModifyNickname: {title: '引导群成员修改群昵称',order: 6,view: 'number', type: 'number',},
  tsCreate: {title: '创建时间',order: 7,view: 'datetime', type: 'string',},
  creatorId: {title: '创建人',order: 8,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  enable: {title: '启用',order: 9,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}