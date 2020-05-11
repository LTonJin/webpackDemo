import $ from './jquery.min.js'

console.log('当前版本号：' + ConstConfig.version);

// 解析地址栏url
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}
// 根据地址栏传参判断是移动端或是pc端
if (getQueryVariable('cp') === 'mobile') {
  $(".pc_page").remove();
  $('.mobile_page').css('display', 'block');
} else {
  $('.pc_page').css('display', 'block');
  $(".mobile_page").remove();
}
// 设置ConstConfig中的配置参数到html中
$('.service_tel').html('客服电话 ' + ConstConfig.ServiceTel);
$('.mo_service_tel').html(ConstConfig.ServiceTel);
$('.tel_number').attr("href", "tel:"+ ConstConfig.ServiceTel);

// 移动端拨打电话弹框
$('.enter_call').click(function () {
  $(".call_modal").fadeIn(300);
  $('.call_modal_content').animate({ bottom: '0' }, 300);
});
$('.cancel_call').click(function () {
  $(".call_modal").fadeOut(300);
  $('.call_modal_content').animate({ bottom: '-120px' }, 300);
});
$('.modal').click(function () {
  $(".call_modal").fadeOut(300);
  $('.call_modal_content').animate({ bottom: '-120px' }, 300);
});