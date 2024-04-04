import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';

enum Api {
  list = '/im/server/pagination',
  save = '/im/server/createOrUpdate',
  edit = '/im/server/createOrUpdate',
  deleteServer = '/im/server/del',
  deleteBatch = '/im/server/del',
  importExcel = '/im/server/importExcel',
  exportXls = '/im/server/exportXls',
  recycleBinList = '/im/server/recycleBin',
  putRecycleBin = '/im/server/putRecycleBin',
  deleteRecycleBin = '/im/server/deleteRecycleBin',
  frozenBatch = '/im/server/frozenBatch',
  serverConfigDetail = '/im/serverConfig/detail',
  serverConfigUpdate = '/im/serverConfig/update',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口(查询服务器，通过租户隔离)
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });

/**
 * 删除服务器
 */
export const deleteServer = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteServer, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 批量删除服务器
 * @param params
 */
export const batchDeleteServer = (params, handleSuccess) => {
  Modal.confirm({
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
      });
    },
  });
};
/**
 * 保存或者更新服务器
 * @param params
 */
export const saveOrUpdateServer = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};
/**
 * 获取服务器配置
 * @param params
 */
export const getServerConfig = (params) => {
  return defHttp.get({ url: Api.serverConfigDetail, params });
};
/**
 * 更新服务器配置
 * @param params
 */
export const updateServerConfig = (params) => {
  return defHttp.post({ url: Api.serverConfigUpdate, params });
};

/**
 * 回收站列表
 * @param params
 */
export const getRecycleBinList = (params) => defHttp.get({ url: Api.recycleBinList, params });
/**
 * 回收站还原
 * @param params
 */
export const putRecycleBin = (params, handleSuccess) => {
  return defHttp.put({ url: Api.putRecycleBin, params }).then(() => {
    handleSuccess();
  });
};
/**
 * 回收站删除
 * @param params
 */
export const deleteRecycleBin = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteRecycleBin, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 冻结解冻
 * @param params
 */
export const frozenBatch = (params, handleSuccess) => {
  return defHttp.put({ url: Api.frozenBatch, params }).then(() => {
    handleSuccess();
  });
};
