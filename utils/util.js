const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function IsURL(str_url) {
  var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
    + '?(([0-9a-z_!~*().&=+$%-]+: )?[0-9a-z_!~*().&=+$%-]+@)?' //ftp的user@
    + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
    + '|' // 允许IP和DOMAIN（域名）
    + '([0-9a-z_!~*()-]+.)*' // 域名- www.
    + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
    + '[a-z]{2,6})' // first level domain- .com or .museum
    + '(:[0-9]{1,4})?' // 端口- :80
    + '((/?)|' // a slash isn't required if there is no file name
    + '(/[0-9a-z_!~*().;?:@&=+$,%#-]+)+/?)$';
  var re = new RegExp(strRegex);
  if (re.test(str_url)) {
    return (true);
  } else {
    return (false);
  }
}

function login(jump_url)
{
    wx.login({
        success: function (res) {
            if (res.code) {
                wx.getUserInfo({
                    withCredentials: true,
                    success: function (res_user) {
                        var params = {
                            code: res.code,
                            encryptedData: res_user.encryptedData,
                            iv: res_user.iv,
                            signature: res_user.signature,
                            rawData: res_user.rawData
                        }
                        wx.request({
                            url: 'https://gyh.phpmoo.com/web/wx/login/login.php',
                            data: params,
                            header: { 'content-type': 'application/json' },
                            success: function (res) {
                                if (res.statusCode == 200 && res['data'][1]['openId'] != undefined){
                                    var userInfos = {};
                                    userInfos['nickName'] = res['data'][1]['nickName'];
                                    userInfos['avatarUrl'] = res['data'][1]['avatarUrl'];
                                    userInfos['country'] = res['data'][1]['country'];
                                    userInfos['gender'] = res['data'][1]['gender'];
                                    userInfos['openId'] = res['data'][1]['openId'];
                                    userInfos['session3rd'] = res['data'][0]['session3rd'];
                                    console.log(userInfos);
                                    wx.setStorageSync('userInfos', userInfos);
                                    wx.redirectTo({
                                        url: jump_url
                                    })
                                }else{
                                    console.log('login faild')
                                }
                            }
                        })
                    }
                })
            }
        }
    })
}

module.exports = {
    formatTime: formatTime,
    IsURL: IsURL,
    login : login
}
