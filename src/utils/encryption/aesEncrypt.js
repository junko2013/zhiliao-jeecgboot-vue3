// useCrypto.js
import CryptoJS from 'crypto-js';

export function useCrypto() {
  // 设置密钥和初始向量，这要与服务器端的密钥和IV保持一致
  const KEY = "tmnsy5P1lnLOTHDOkXZNHQ==";
  const IV = "gTjkr9BMFjikBTZB";

  // 解密数据
  const decrypt = (data) => {
    const encryptedBytes = CryptoJS.enc.Base64.parse(data);
    const keyBytes = CryptoJS.enc.Utf8.parse(KEY);
    const ivBytes = CryptoJS.enc.Utf8.parse(IV);

    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: encryptedBytes },
      keyBytes,
      {
        iv: ivBytes,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    // 将解密后的字节转换为字符串
    return decrypted.toString(CryptoJS.enc.Utf8);
  };

  // 加密数据
  const encrypt = (data) => {
    const keyBytes = CryptoJS.enc.Utf8.parse(KEY);
    const ivBytes = CryptoJS.enc.Utf8.parse(IV);
    const encrypted = CryptoJS.AES.encrypt(data, keyBytes, {
      iv: ivBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    // 获取加密后的密文并将其转换为Base64格式
    return encrypted.toString();
  };

  return { encrypt, decrypt };
}
