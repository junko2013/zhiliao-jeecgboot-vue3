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
    title: '为0表示默认，否则代表具体管理员',
    align:"center",
    dataIndex: 'managerId_dictText'
   },
   {
    title: '编辑群资料',
    align:"center",
    dataIndex: 'modifyInfo',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '编辑公告',
    align:"center",
    dataIndex: 'modifyNotice',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '置顶消息',
    align:"center",
    dataIndex: 'msgPin',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '添加成员',
    align:"center",
    dataIndex: 'addMember',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '移除成员',
    align:"center",
    dataIndex: 'delMember',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '禁言成员',
    align:"center",
    dataIndex: 'muteMember',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '添加管理员',
    align:"center",
    dataIndex: 'addManager',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '撤销管理员',
    align:"center",
    dataIndex: 'revokeManager',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '提示入群验证',
    align:"center",
    dataIndex: 'isValidationTip',
    customRender:({text}) => {
       return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}])
     },
   },
   {
    title: '匿名管理员',
    align:"center",
    dataIndex: 'isAnonymous',
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
      label: "为0表示默认，否则代表具体管理员",
      field: 'managerId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"im_muc_member,nickname,id"
      },
      //colProps: {span: 6},
 	},
	{
      label: "编辑群资料",
      field: 'modifyInfo',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "编辑公告",
      field: 'modifyNotice',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "置顶消息",
      field: 'msgPin',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "添加成员",
      field: 'addMember',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "移除成员",
      field: 'delMember',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "禁言成员",
      field: 'muteMember',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "添加管理员",
      field: 'addManager',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "撤销管理员",
      field: 'revokeManager',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "提示入群验证",
      field: 'isValidationTip',
      component: 'JSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "匿名管理员",
      field: 'isAnonymous',
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
    label: '为0表示默认，否则代表具体管理员',
    field: 'managerId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"im_muc_member,nickname,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入为0表示默认，否则代表具体管理员!'},
          ];
     },
  },
  {
    label: '编辑群资料',
    field: 'modifyInfo',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入编辑群资料!'},
          ];
     },
  },
  {
    label: '编辑公告',
    field: 'modifyNotice',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入编辑公告!'},
          ];
     },
  },
  {
    label: '置顶消息',
    field: 'msgPin',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入置顶消息!'},
          ];
     },
  },
  {
    label: '添加成员',
    field: 'addMember',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入添加成员!'},
          ];
     },
  },
  {
    label: '移除成员',
    field: 'delMember',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入移除成员!'},
          ];
     },
  },
  {
    label: '禁言成员',
    field: 'muteMember',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入禁言成员!'},
          ];
     },
  },
  {
    label: '添加管理员',
    field: 'addManager',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入添加管理员!'},
          ];
     },
  },
  {
    label: '撤销管理员',
    field: 'revokeManager',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入撤销管理员!'},
          ];
     },
  },
  {
    label: '提示入群验证',
    field: 'isValidationTip',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入提示入群验证!'},
          ];
     },
  },
  {
    label: '匿名管理员',
    field: 'isAnonymous',
     component: 'JSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入匿名管理员!'},
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
  managerId: {title: '为0表示默认，否则代表具体管理员',order: 1,view: 'number', type: 'number',dictTable: "im_muc_member", dictCode: 'id', dictText: 'nickname',},
  modifyInfo: {title: '编辑群资料',order: 2,view: 'number', type: 'number',},
  modifyNotice: {title: '编辑公告',order: 3,view: 'number', type: 'number',},
  msgPin: {title: '置顶消息',order: 4,view: 'number', type: 'number',},
  addMember: {title: '添加成员',order: 5,view: 'number', type: 'number',},
  delMember: {title: '移除成员',order: 6,view: 'number', type: 'number',},
  muteMember: {title: '禁言成员',order: 7,view: 'number', type: 'number',},
  addManager: {title: '添加管理员',order: 8,view: 'number', type: 'number',},
  revokeManager: {title: '撤销管理员',order: 9,view: 'number', type: 'number',},
  isValidationTip: {title: '提示入群验证',order: 10,view: 'number', type: 'number',},
  isAnonymous: {title: '匿名管理员',order: 11,view: 'number', type: 'number',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}