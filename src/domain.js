/**
 * Created by Administrator on 2017/5/8.
 * 用于管理各种域名
 */
// const domain='http://localhost:8080/info/api/sqlConfigs'
// const  domain='http://192.168.0.45:9999/info/api/sqlConfigs;jsessionid=HeVPhJZgBqg7oEU5U4OG0bX7bXqSY35IAqYpUi0l.centos'
console.log(location.origin)
const domain=window.location.origin+'/info/api/sqlConfigs'
export default {
  sqlConfigUrl:domain
}
