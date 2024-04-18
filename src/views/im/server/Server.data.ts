import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '服务器编号',
    align:"center",
    sorter: true,
    dataIndex: 'no'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '创建时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsCreate'
   },
   {
    title: '启用',
    align:"center",
    dataIndex: 'enable',
    customRender:({text}) => {
      return  render.renderSwitch(text, [{text:'是',value:true},{text:'否',value:false}])
    },
   },
   {
    title: '接口令牌',
    align:"center",
    dataIndex: 'accessToken'
   },
   {
    title: 'ws链接',
    align:"center",
    dataIndex: 'wsUrl'
   },
   {
    title: '停用时间',
    align:"center",
    sorter: true,
    dataIndex: 'tsStop'
   },
   {
    title: '所属租户',
    align:"center",
    dataIndex: 'tenantId_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "服务器编号",
      field: "no",
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "名称",
      field: "name",
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "启用",
      field: "enable",
      component: 'ZlSwitch',
      componentProps:{
           query:true,
       },
      //colProps: {span: 6},
 	},
	{
      label: "接口令牌",
      field: "accessToken",
      component: 'Input',
      //colProps: {span: 6},
 	},
     {
      label: "停用时间",
      field: "tsStop",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
	{
      label: "所属租户",
      field: "tenantId",
      component: 'JSearchSelect',
      componentProps:{
         dict:"sys_tenant,name,id"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '服务器编号',
    field: 'no',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入服务器编号!'},
          ];
     },
  },
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
    label: '启用',
    field: 'enable',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用!'},
          ];
     },
  },
  {
    label: '接口令牌',
    field: 'accessToken',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入接口令牌!'},
          ];
     },
  },
  {
    label: 'ws链接',
    field: 'wsUrl',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入ws链接!'},
          ];
     },
  },
  {
    label: '停用时间',
    field: 'tsStop',
    component: 'DatePicker',
    componentProps: {
       showTime:true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入停用时间!'},
          ];
     },
  },
  {
    label: '所属租户',
    field: 'tenantId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"sys_tenant,name,id"
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属租户!'},
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
//子表单数据
export const serverConfigFormSchema: FormSchema[] = [
  {
    label: '允许普通用户创建群聊',
    field: 'allowCommonUserCreateMuc',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许普通用户创建群聊!'},
          ];
     },
  },
  {
    label: '允许普通用户创建频道',
    field: 'allowCommonUserCreateChannel',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许普通用户创建频道!'},
          ];
     },
  },
  {
    label: '群聊名称唯一',
    field: 'mucNameUnique',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入群聊名称唯一!'},
          ];
     },
  },
  {
    label: '频道名称唯一',
    field: 'channelNameUnique',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入频道名称唯一!'},
          ];
     },
  },
  {
    label: '创建群聊上限',
    field: 'maxMucCreate',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入创建群聊上限!'},
          ];
     },
  },
  {
    label: '加入群聊上限',
    field: 'maxMucJoin',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入加入群聊上限!'},
          ];
     },
  },
  {
    label: '管理群聊上限',
    field: 'maxMucManage',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入管理群聊上限!'},
          ];
     },
  },
  {
    label: '好友上限',
    field: 'maxFriend',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入好友上限!'},
          ];
     },
  },
  {
    label: '每日添加好友上限',
    field: 'maxFriendPerDay',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入每日添加好友上限!'},
          ];
     },
  },
  {
    label: '用户默认密码，用于非注册用户或后台重置密码',
    field: 'defaultPassword',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户默认密码，用于非注册用户或后台重置密码!'},
          ];
     },
  },
  {
    label: '邀请码类型：0:不启用，1：选填，2：必填',
    field: 'inviteCodeType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"invite_code_type"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入邀请码类型：0:不启用，1：选填，2：必填!'},
          ];
     },
  },
  {
    label: '自动添加邀请人为好友',
    field: 'autoAddInviter',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入自动添加邀请人为好友!'},
          ];
     },
  },
  {
    label: '启用普通用户的邀请码',
    field: 'enableCommonUserInvite',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用普通用户的邀请码!'},
          ];
     },
  },
  {
    label: '昵称查找用户',
    field: 'nicknameSearch',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入昵称查找用户!'},
          ];
     },
  },
  {
    label: '昵称精确查找用户',
    field: 'nicknameSearchExact',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入昵称精确查找用户!'},
          ];
     },
  },
  {
    label: '手机号查找用户',
    field: 'mobileSearch',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入手机号查找用户!'},
          ];
     },
  },
  {
    label: '账号查找用户',
    field: 'accountSearch',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入账号查找用户!'},
          ];
     },
  },
  {
    label: '用户名查找用户',
    field: 'usernameSearch',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户名查找用户!'},
          ];
     },
  },
  {
    label: '通过昵称添加',
    field: 'nicknameAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过昵称添加!'},
          ];
     },
  },
  {
    label: '通过手机号添加',
    field: 'mobileAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过手机号添加!'},
          ];
     },
  },
  {
    label: '通过账号添加',
    field: 'accountAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过账号添加!'},
          ];
     },
  },
  {
    label: '通过用户名添加',
    field: 'usernameAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过用户名添加!'},
          ];
     },
  },
  {
    label: '通过名片添加',
    field: 'cardAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过名片添加!'},
          ];
     },
  },
  {
    label: '通过群聊添加',
    field: 'mucAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过群聊添加!'},
          ];
     },
  },
  {
    label: '通过扫码添加',
    field: 'scanAdd',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入通过扫码添加!'},
          ];
     },
  },
  {
    label: '启用钱包',
    field: 'enableWallet',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用钱包!'},
          ];
     },
  },
  {
    label: '提现费率，%',
    field: 'withdrawFee',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入提现费率，%!'},
          ];
     },
  },
  {
    label: '最低提现金额',
    field: 'minWithdrawAmount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最低提现金额!'},
          ];
     },
  },
  {
    label: '最高提现金额',
    field: 'maxWithdrawAmount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最高提现金额!'},
          ];
     },
  },
  {
    label: '最低充值金额',
    field: 'minRechargeAmount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最低充值金额!'},
          ];
     },
  },
  {
    label: '最高充值金额',
    field: 'maxRechargeAmount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最高充值金额!'},
          ];
     },
  },
  {
    label: '启用签到',
    field: 'enableSignIn',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用签到!'},
          ];
     },
  },
  {
    label: '单位：金币。连续签到获得额外奖励，则格式如：1,3,5,7,10,15...，表示第一天1，第2天3，第3天5，以此类推，若当前连续签到天数超过设置的个数，则取最右值。固定奖励请输入固定值，如：5，表示签到奖励5',
    field: 'signInRewardContinue',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入单位：金币。连续签到获得额外奖励，则格式如：1,3,5,7,10,15...，表示第一天1，第2天3，第3天5，以此类推，若当前连续签到天数超过设置的个数，则取最右值。固定奖励请输入固定值，如：5，表示签到奖励5!'},
          ];
     },
  },
  {
    label: '单位：金币。每次签到获得的奖励',
    field: 'signInReward',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入单位：金币。每次签到获得的奖励!'},
          ];
     },
  },
  {
    label: '达到后重置天数，中断将重置天数。0为不开启连续签到',
    field: 'signInContinueDay',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入达到后重置天数，中断将重置天数。0为不开启连续签到!'},
          ];
     },
  },
  {
    label: '最大签到天数，达到后不可继续签到，需要申请提现并通过后才能继续签到，通过后重置天数，0为不限制',
    field: 'signInMaxDay',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最大签到天数，达到后不可继续签到，需要申请提现并通过后才能继续签到，通过后重置天数，0为不限制!'},
          ];
     },
  },
  {
    label: '最多可补签天数，超过该天数则无法补签',
    field: 'signInMakeupDays',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入最多可补签天数，超过该天数则无法补签!'},
          ];
     },
  },
  {
    label: '补签一次所扣除的金币。开启阶梯规则如：1,3,5...，表示往前推第一天扣1金币，第二天扣3金币，第三天扣5金币，以此类推。不开启阶梯则直接输入固定值，如：5，表示每次补签均扣除5金币',
    field: 'signInMakeupCost',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入补签一次所扣除的金币。开启阶梯规则如：1,3,5...，表示往前推第一天扣1金币，第二天扣3金币，第三天扣5金币，以此类推。不开启阶梯则直接输入固定值，如：5，表示每次补签均扣除5金币!'},
          ];
     },
  },
  {
    label: '补签可获得奖励',
    field: 'signInMakeupReward',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入补签可获得奖励!'},
          ];
     },
  },
  {
    label: '签到说明',
    field: 'signInNote',
    component: 'InputTextArea',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入签到说明!'},
          ];
     },
  },
  {
    label: '启用短信',
    field: 'enableSms',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用短信!'},
          ];
     },
  },
  {
    label: '允许注册',
    field: 'allowRegister',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许注册!'},
          ];
     },
  },
  {
    label: '启用手机号注册',
    field: 'mobileRegister',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用手机号注册!'},
          ];
     },
  },
  {
    label: '启用用户名和密码注册',
    field: 'usernameRegister',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用用户名和密码注册!'},
          ];
     },
  },
  {
    label: '昵称唯一',
    field: 'nicknameUnique',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入昵称唯一!'},
          ];
     },
  },
  {
    label: '启用邮箱注册',
    field: 'emailRegister',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用邮箱注册!'},
          ];
     },
  },
  {
    label: '注册奖励',
    field: 'registerPresent',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入注册奖励!'},
          ];
     },
  },
  {
    label: '允许发红包',
    field: 'allowRedPack',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许发红包!'},
          ];
     },
  },
  {
    label: '单个红包金额上限',
    field: 'redPackMax',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入单个红包金额上限!'},
          ];
     },
  },
  {
    label: '允许转账',
    field: 'allowTransfer',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入允许转账!'},
          ];
     },
  },
  {
    label: '单次转账金额上限',
    field: 'transferMax',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入单次转账金额上限!'},
          ];
     },
  },
  {
    label: '手机验证码登录',
    field: 'mobileSmsLogin',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入手机验证码登录!'},
          ];
     },
  },
  {
    label: '邮箱验证码登录',
    field: 'emailCodeLogin',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入邮箱验证码登录!'},
          ];
     },
  },
  {
    label: 'QQ登录',
    field: 'qqLogin',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入QQ登录!'},
          ];
     },
  },
  {
    label: '微信登录',
    field: 'wechatLogin',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入微信登录!'},
          ];
     },
  },
  {
    label: 'qq AppId',
    field: 'qqAppId',
    component: 'Input',
  },
  {
    label: 'wechat AppId',
    field: 'wechatAppId',
    component: 'Input',
  },
  {
    label: 'wechat AppKey',
    field: 'wechatAppKey',
    component: 'Input',
  },
  {
    label: '当连续登录失败达到该次数时锁定账号',
    field: 'loginFailedLockedTimes',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入当连续登录失败达到该次数时锁定账号!'},
          ];
     },
  },
  {
    label: '当连续登录失败的锁定时长',
    field: 'loginFailedLockedDuration',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入当连续登录失败的锁定时长!'},
          ];
     },
  },
  {
    label: '登录有效时长，默认：7天',
    field: 'loginValidDay',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入登录有效时长，默认：7天!'},
          ];
     },
  },
  {
    label: '用户头像需要审核',
    field: 'userAvatarNeedAudit',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入用户头像需要审核!'},
          ];
     },
  },
  {
    label: '限制ip单位时间,秒',
    field: 'limitIpDuration',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入限制ip单位时间,秒!'},
          ];
     },
  },
  {
    label: '限制ip单位时间内注册用户数',
    field: 'limitIpCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入限制ip单位时间内注册用户数!'},
          ];
     },
  },
  {
    label: '限制设备单位时间，秒',
    field: 'limitDeviceDuration',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入限制设备单位时间，秒!'},
          ];
     },
  },
  {
    label: '限制同一设备单位时间内注册用户数',
    field: 'limitDeviceCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入限制同一设备单位时间内注册用户数!'},
          ];
     },
  },
  {
    label: '限制消息发送单位时间，秒',
    field: 'limitMsgDuration',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入限制消息发送单位时间，秒!'},
          ];
     },
  },
  {
    label: '限制消息发送单位时间内发送条数',
    field: 'limitMsgCount',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入限制消息发送单位时间内发送条数!'},
          ];
     },
  },
  {
    label: '支持的国家区号代码',
    field: 'dialCodes',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入支持的国家区号代码!'},
          ];
     },
  },
  {
    label: '启用定位',
    field: 'location',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用定位!'},
          ];
     },
  },
  {
    label: '高德安卓key',
    field: 'gdAndroidKey',
    component: 'Input',
  },
  {
    label: '高德苹果key',
    field: 'gdIosKey',
    component: 'Input',
  },
  {
    label: '高德网页key',
    field: 'gdWebKey',
    component: 'Input',
  },
  {
    label: '显示通话记录',
    field: 'dialHistory',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示通话记录!'},
          ];
     },
  },
  {
    label: '启用动态',
    field: 'enablePost',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入启用动态!'},
          ];
     },
  },
  {
    label: '敏感词过滤',
    field: 'keywordFilter',
     component: 'ZlSwitch',
     componentProps:{
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入敏感词过滤!'},
          ];
     },
  },
  {
    label: '显示好友删除',
    field: 'showFriendDelete',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"show_friend_delete"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入显示好友删除!'},
          ];
     },
  },
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表表格配置


// 高级查询数据
export const superQuerySchema = {
  no: {title: '服务器编号',order: 0,view: 'text', type: 'string',},
  name: {title: '名称',order: 1,view: 'text', type: 'string',},
  tsCreate: {title: '创建时间',order: 2,view: 'datetime', type: 'string',},
  enable: {title: '启用',order: 3,view: 'switch', type: 'bool',},
  accessToken: {title: '接口令牌',order: 4,view: 'text', type: 'string',},
  wsUrl: {title: 'ws链接',order: 5,view: 'text', type: 'string',},
  tsStop: {title: '停用时间',order: 6,view: 'datetime', type: 'string',},
  tenantId: {title: '所属租户',order: 8,view: 'number', type: 'number',dictTable: "sys_tenant", dictCode: 'id', dictText: 'name',},
  //子表高级查询
  serverConfig: {
    title: '服务器配置',
    view: 'table',
    fields: {
        allowCommonUserCreateMuc: {title: '允许普通用户创建群聊',order: 0,view: 'switch', type: 'bool',},
        allowCommonUserCreateChannel: {title: '允许普通用户创建频道',order: 1,view: 'switch', type: 'bool',},
        mucNameUnique: {title: '群聊名称唯一',order: 2,view: 'switch', type: 'bool',},
        channelNameUnique: {title: '频道名称唯一',order: 3,view: 'switch', type: 'bool',},
        maxMucCreate: {title: '创建群聊上限',order: 4,view: 'number', type: 'number',},
        maxMucJoin: {title: '加入群聊上限',order: 5,view: 'number', type: 'number',},
        maxMucManage: {title: '管理群聊上限',order: 6,view: 'number', type: 'number',},
        maxFriend: {title: '好友上限',order: 7,view: 'number', type: 'number',},
        maxFriendPerDay: {title: '每日添加好友上限',order: 8,view: 'number', type: 'number',},
        defaultPassword: {title: '用户默认密码，用于非注册用户或后台重置密码',order: 9,view: 'text', type: 'string',},
        inviteCodeType: {title: '邀请码类型：0:不启用，1：选填，2：必填',order: 10,view: 'number', type: 'number',},
        autoAddInviter: {title: '自动添加邀请人为好友',order: 11,view: 'switch', type: 'bool',},
        enableCommonUserInvite: {title: '启用普通用户的邀请码',order: 12,view: 'switch', type: 'bool',},
        nicknameSearch: {title: '昵称查找用户',order: 13,view: 'switch', type: 'bool',},
        nicknameSearchExact: {title: '昵称精确查找用户',order: 14,view: 'switch', type: 'bool',},
        mobileSearch: {title: '手机号查找用户',order: 15,view: 'switch', type: 'bool',},
        accountSearch: {title: '账号查找用户',order: 16,view: 'switch', type: 'bool',},
        usernameSearch: {title: '用户名查找用户',order: 17,view: 'switch', type: 'bool',},
        nicknameAdd: {title: '通过昵称添加',order: 18,view: 'switch', type: 'bool',},
        mobileAdd: {title: '通过手机号添加',order: 19,view: 'switch', type: 'bool',},
        accountAdd: {title: '通过账号添加',order: 20,view: 'switch', type: 'bool',},
        usernameAdd: {title: '通过用户名添加',order: 21,view: 'switch', type: 'bool',},
        cardAdd: {title: '通过名片添加',order: 22,view: 'switch', type: 'bool',},
        mucAdd: {title: '通过群聊添加',order: 23,view: 'switch', type: 'bool',},
        scanAdd: {title: '通过扫码添加',order: 24,view: 'switch', type: 'bool',},
        enableWallet: {title: '启用钱包',order: 25,view: 'switch', type: 'bool',},
        withdrawFee: {title: '提现费率，%',order: 26,view: 'number', type: 'number',},
        minWithdrawAmount: {title: '最低提现金额',order: 27,view: 'number', type: 'number',},
        maxWithdrawAmount: {title: '最高提现金额',order: 28,view: 'number', type: 'number',},
        minRechargeAmount: {title: '最低充值金额',order: 29,view: 'number', type: 'number',},
        maxRechargeAmount: {title: '最高充值金额',order: 30,view: 'number', type: 'number',},
        enableSignIn: {title: '启用签到',order: 31,view: 'switch', type: 'bool',},
        signInRewardContinue: {title: '单位：金币。连续签到获得额外奖励，则格式如：1,3,5,7,10,15...，表示第一天1，第2天3，第3天5，以此类推，若当前连续签到天数超过设置的个数，则取最右值。固定奖励请输入固定值，如：5，表示签到奖励5',order: 32,view: 'text', type: 'string',},
        signInReward: {title: '单位：金币。每次签到获得的奖励',order: 33,view: 'number', type: 'number',},
        signInContinueDay: {title: '达到后重置天数，中断将重置天数。0为不开启连续签到',order: 34,view: 'number', type: 'number',},
        signInMaxDay: {title: '最大签到天数，达到后不可继续签到，需要申请提现并通过后才能继续签到，通过后重置天数，0为不限制',order: 35,view: 'number', type: 'number',},
        signInMakeupDays: {title: '最多可补签天数，超过该天数则无法补签',order: 36,view: 'number', type: 'number',},
        signInMakeupCost: {title: '补签一次所扣除的金币。开启阶梯规则如：1,3,5...，表示往前推第一天扣1金币，第二天扣3金币，第三天扣5金币，以此类推。不开启阶梯则直接输入固定值，如：5，表示每次补签均扣除5金币',order: 37,view: 'text', type: 'string',},
        signInMakeupReward: {title: '补签可获得奖励',order: 38,view: 'text', type: 'string',},
        signInNote: {title: '签到说明',order: 39,view: 'textarea', type: 'string',},
        enableSms: {title: '启用短信',order: 40,view: 'switch', type: 'bool',},
        allowRegister: {title: '允许注册',order: 41,view: 'switch', type: 'bool',},
        mobileRegister: {title: '启用手机号注册',order: 42,view: 'switch', type: 'bool',},
        usernameRegister: {title: '启用用户名和密码注册',order: 43,view: 'switch', type: 'bool',},
        nicknameUnique: {title: '昵称唯一',order: 44,view: 'switch', type: 'bool',},
        emailRegister: {title: '启用邮箱注册',order: 45,view: 'switch', type: 'bool',},
        registerPresent: {title: '注册奖励',order: 46,view: 'number', type: 'number',},
        allowRedPack: {title: '允许发红包',order: 47,view: 'switch', type: 'bool',},
        redPackMax: {title: '单个红包金额上限',order: 48,view: 'number', type: 'number',},
        allowTransfer: {title: '允许转账',order: 49,view: 'switch', type: 'bool',},
        transferMax: {title: '单次转账金额上限',order: 50,view: 'text', type: 'string',},
        mobileSmsLogin: {title: '手机验证码登录',order: 51,view: 'switch', type: 'bool',},
        emailCodeLogin: {title: '邮箱验证码登录',order: 52,view: 'switch', type: 'bool',},
        qqLogin: {title: 'QQ登录',order: 53,view: 'switch', type: 'bool',},
        wechatLogin: {title: '微信登录',order: 54,view: 'switch', type: 'bool',},
        qqAppId: {title: 'qq AppId',order: 55,view: 'text', type: 'string',},
        wechatAppId: {title: 'wechat AppId',order: 56,view: 'text', type: 'string',},
        wechatAppKey: {title: 'wechat AppKey',order: 57,view: 'text', type: 'string',},
        loginFailedLockedTimes: {title: '当连续登录失败达到该次数时锁定账号',order: 58,view: 'number', type: 'number',},
        loginFailedLockedDuration: {title: '当连续登录失败的锁定时长',order: 59,view: 'number', type: 'number',},
        loginValidDay: {title: '登录有效时长，默认：7天',order: 60,view: 'number', type: 'number',},
        userAvatarNeedAudit: {title: '用户头像需要审核',order: 61,view: 'switch', type: 'bool',},
        limitIpDuration: {title: '限制ip单位时间,秒',order: 62,view: 'number', type: 'number',},
        limitIpCount: {title: '限制ip单位时间内注册用户数',order: 63,view: 'number', type: 'number',},
        limitDeviceDuration: {title: '限制设备单位时间，秒',order: 64,view: 'number', type: 'number',},
        limitDeviceCount: {title: '限制同一设备单位时间内注册用户数',order: 65,view: 'number', type: 'number',},
        limitMsgDuration: {title: '限制消息发送单位时间，秒',order: 66,view: 'number', type: 'number',},
        limitMsgCount: {title: '限制消息发送单位时间内发送条数',order: 67,view: 'number', type: 'number',},
        dialCodes: {title: '支持的国家区号代码',order: 68,view: 'text', type: 'string',},
        location: {title: '启用定位',order: 69,view: 'switch', type: 'bool',},
        gdAndroidKey: {title: '高德安卓key',order: 70,view: 'text', type: 'string',},
        gdIosKey: {title: '高德苹果key',order: 71,view: 'text', type: 'string',},
        gdWebKey: {title: '高德网页key',order: 72,view: 'text', type: 'string',},
        dialHistory: {title: '显示通话记录',order: 73,view: 'switch', type: 'bool',},
        enablePost: {title: '启用动态',order: 74,view: 'switch', type: 'bool',},
        keywordFilter: {title: '敏感词过滤',order: 75,view: 'switch', type: 'bool',},
        showFriendDelete: {title: '显示好友删除',order: 76,view: 'number', type: 'number',},
    }
  },
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
