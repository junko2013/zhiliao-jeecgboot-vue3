import {defHttp} from "/@/utils/http/axios";
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/im/helpCtg/rootList',
  save='/im/helpCtg/add',
  edit='/im/helpCtg/edit',
  deleteHelpCtg = '/im/helpCtg/delete',
  importExcel = '/im/helpCtg/importExcel',
  exportXls = '/im/helpCtg/exportXls',
  loadTreeData = '/im/helpCtg/loadTreeRoot',
  getChildList = '/im/helpCtg/childList',
  getChildListBatch = '/im/helpCtg/getChildListBatch',
}

/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 * @param params
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});
/**
 * 删除
 */
export const deleteHelpCtg = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteHelpCtg, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDeleteHelpCtg = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteHelpCtg, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdateDict = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}
/**
 * 查询全部树形节点数据
 * @param params
 */
export const loadTreeData = (params) =>
  defHttp.get({url: Api.loadTreeData,params});
/**
 * 查询子节点数据
 * @param params
 */
export const getChildList = (params) =>
  defHttp.get({url: Api.getChildList, params});
/**
 * 批量查询子节点数据
 * @param params
 */
export const getChildListBatch = (params) =>
  defHttp.get({url: Api.getChildListBatch, params},{isTransformResponse:false});
