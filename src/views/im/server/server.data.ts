import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { render } from '/@/utils/common/renderUtils';
import { h } from 'vue';
import { Tag } from "ant-design-vue";
export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title:'名称',
    align:"center",
    dataIndex: 'name'
  },
  {
    title:'编号',
    align:"center",
    dataIndex: 'no'
  },
  {
    title: '所属租户',
    align: "center",
    dataIndex:'merchantId',
    customRender:({ record }) => {
      return render.renderDict(record, 'merchantId_dictText');
    }
  },
  {
    title:'websocket链接',
    align:"center",
    dataIndex: 'wsUrl'
  },
  {
    title:'访问令牌',
    align:"center",
    dataIndex: 'accessToken'
  },
  {
    title:'状态',
    align:"center",
    dataIndex: 'status',
    customRender: ({ text }) => {
      return h(Tag, {
        color: text ? 'green' : 'red',
      }, () => text ? '√' : '×');
    },
  },
  {
    title: '创建时间',
    dataIndex: 'ts_create',
    compType: 'datetime',
    align:"center",
    sorter:true,
    customRender: ({ text }) => {
      return text;
    },
  },
  {
    title: '停用时间',
    dataIndex: 'ts_stop',
    compType: 'datetime',
    align:"center",
    sorter:true,
    customRender: ({ text }) => {
      return text;
    },
  },
];

export const recycleColumns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'name',
    component: 'JInput',
  },
  {
    label: '编号',
    field: 'no',
    component: 'JInput',
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '编号',
    field: 'no',
    helpMessage:"编号随机生成，不可修改",
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    label: 'websocket链接',
    field: 'wsUrl',
    helpMessage:"用于如扫码、数据同步等",
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    label: '访问令牌',
    field: 'accessToken',
    helpMessage:"注意：修改后用户需要重新设置服务器，否则将无法使用！！！",
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    label: '结束时间',
    field: 'tsStop',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
];
export const registerFormConfigSchema: FormSchema[] = [
  {
    label: '允许注册',
    field: 'allowRegister',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '手机号注册',
    field: 'mobileRegister',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '用户名密码注册',
    field: 'usernameRegister',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '邮箱注册',
    field: 'emailRegister',
    helpMessage:"请在服务端设置里填写邮箱的相关配置",
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '用户昵称唯一',
    field: 'nicknameUnique',
    helpMessage:"请在服务端设置里填写邮箱的相关配置",
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '初始密码',
    field: 'defaultPassword',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '注册赠送金币',
    field: 'registerPresent',
    component: 'InputNumber',
    defaultValue: 0,
  },
];
export const loginFormConfigSchema: FormSchema[] = [
  {
    label: '允许登录',
    field: 'allowLogin',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '手机验证码登录',
    field: 'mobileSmsLogin',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '邮箱验证码登录',
    field: 'emailCodeLogin',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: 'QQ登录',
    field: 'qqLogin',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: 'qq appId',
    field: 'qqAppId',
    component: 'Input',
    ifShow:({ values })=>values.qqLogin
  },
  {
    label: '微信登录',
    field: 'wechatLogin',
    component: 'Switch',
    defaultValue: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    label: '微信 appId',
    field: 'qqAppId',
    component: 'Input',
    ifShow:({ values })=>values.wechatLogin
  },
  {
    label: '微信 appKey',
    field: 'qqAppKey',
    component: 'Input',
    ifShow:({ values })=>values.wechatLogin
  },
  {
    label: '登录有效时长',
    field: 'loginValidDay',
    helpMessage:"单位：天",
    component: 'InputNumber',
  },
  {
    label: '连续登录失败后禁止登录的失败次数',
    field: 'loginFailedLockedTimes',
    helpMessage:"0不限制",
    component: 'InputNumber',
  },
  {
    label: '连续登录失败后禁止登录的时长',
    field: 'loginFailedLockedDuration',
    helpMessage:"0不限制，单位：分钟",
    component: 'InputNumber',
  },
];
export const inviteFormConfigSchema: FormSchema[] = [
  {
    label: '启用邀请码',
    field: 'inviteCodeType',
    helpMessage:"请选择邀请码启用方式",
    component: 'Select',
    defaultValue: true,
    componentProps: {
      options: [
        {
          label: '不启用',
          value: '0',
          key: '0',
        },
        {
          label: '选填',
          value: '1',
          key: '1',
        },
        {
          label: '必填',
          value: '2',
          key: '2',
        },
      ],
    },
  },
];

