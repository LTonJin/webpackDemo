/**
 * date 2017/10/09
 */
const version = 'v1.0.2';
console.log(version);

$(function () {
    /**
     * 判断是否为ios9以上设备
     */
    function checkGtIOS9(ua) {
        var matchs = ua.match(/OS (\d+)_/);
        if (matchs) {
            osVersion = matchs[1];
            if (osVersion >= 9) {
                return true;
            }
        }
        return false;
    }

    var ua = navigator.userAgent;
    //var is_mobile = "<%=is_mobile%>";
    var is_weixin = ua.match(/MicroMessenger/ig);
    var is_ios9 = is_ios && checkGtIOS9(ua);
    var is_safari = (ua.match(/Safari/i));
    var is_ucbrowser = (ua.match(/UCBrowser/i));
    var is_qqbrowser = (ua.match(/MQQBrowser/i));
    var is_ios9safari = is_ios9 && is_safari && (!is_ucbrowser) && (!is_qqbrowser);

    // qq中打开
    var is_QQ = ua.match(/QQ\//i); // 匹配 "QQ/"
    var is_ios = false;
    var is_android = false;
    var is_windows = false;
    // 判断是否为ipadOS设备
    var is_ipados = ua.indexOf("Mac OS") > -1 && ua.indexOf("iPhone") == -1 && 'ontouchend' in document;
    if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1 || is_ipados) {
        is_ios = true;
    } else if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1 || ua.indexOf("MiuiBrowser") > -1) {
        is_android = true;
    } else if (ua.indexOf("Windows") > -1) {
        is_windows = true;
    }

    var is_mobile = is_ios || is_android;

    /*var hvsapp_android_url = "http://www.butel.com/download/android/MobileHvsJustMeeting.apk";
    var hvsapp_ios_url = "https://itunes.apple.com/us/app/hong-yun-yi-liao/id1101633751?ls=1&mt=8";*/

    var hvsapp_android_url = params.hvsapp_android_url.toString();
    var hvsapp_ios_url = params.hvsapp_ios_url.toString();
    var hvsapp_win_url = params.hvsapp_win_url.toString();
    var screen_share_url = params.screen_share_url.toString();


    /*
    * ios/android 打开不同的下载二维码
    */
    var btnText = '';
    // var btn = document.getElementById('downBtn');

    var QQ_wechatDom = document.getElementById('QQ_wechat'); // 微信和QQ显示的dom
    var mobile_browerDom = document.getElementById('mobile_brower'); // 移动浏览器显示的dom
    var pc_bgDom = document.getElementById('pc_bg'); // pc显示的dom

    // 获取不同页面下的下载按钮，设置不同的下载地址

    if (is_weixin || is_QQ) {
        QQ_wechatDom.style.display = 'block';
        mobile_browerDom.style.display = 'none';
        pc_bgDom.style.display = 'none';

        var right = QQ_wechatDom.getElementsByClassName('tip_open_right')[0];
        var left = QQ_wechatDom.getElementsByClassName('tip_open_left')[0];
        if (!is_mobile) { // pc端微信打开
            right.style.display = 'none';
            left.style.display = 'block';
        } else { // 手机微信打开
            right.style.display = 'block';
            left.style.display = 'none';
        }
    } else if (is_ios) {
        QQ_wechatDom.style.display = 'none';
        mobile_browerDom.style.display = 'block';
        pc_bgDom.style.display = 'none';
    } else if (is_android) {
        QQ_wechatDom.style.display = 'none';
        mobile_browerDom.style.display = 'block';
        pc_bgDom.style.display = 'none';
    } else {
        QQ_wechatDom.style.display = 'none';
        mobile_browerDom.style.display = 'none';
        pc_bgDom.style.display = 'block';
    }

    var anBtn = document.getElementsByClassName('join_btn');
    var iosBtn = document.getElementsByClassName('download_btn');
    var pcBtn = document.getElementsByClassName('pc_download_btn');
    var shareBtn = document.getElementsByClassName('share_btn');


    if (!is_weixin && !is_QQ) {
        for (var i = 0; i < anBtn.length; i++) {
            anBtn[i].getElementsByTagName('a')[0].href = hvsapp_android_url;
        }
        for (var i = 0; i < iosBtn.length; i++) {
            iosBtn[i].getElementsByTagName('a')[0].href = hvsapp_ios_url;
        }
        for (var i = 0; i < pcBtn.length; i++) {
            pcBtn[i].getElementsByTagName('a')[0].href = hvsapp_win_url;
        }
        for (var i = 0; i < shareBtn.length; i++) {
            shareBtn[i].getElementsByTagName('a')[0].href = screen_share_url;
        }
    }

});
