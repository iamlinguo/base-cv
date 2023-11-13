/**
 * <p>请求客户端配置</p>

 * @version 13:24 2022/6/3
 */
import HttpClient, { HttpClientConfig } from './index'
import { SysConstant } from '@/constant/sys'
const https = () => {
  const config: HttpClientConfig = {
    baseURL: SysConstant.baseUrl,
    clickInterval: 1000,
    timeout: 120000,
    timeoutErrorMessage: '请求超时(120s)'
  }
  return new HttpClient(config)
}

export default https
