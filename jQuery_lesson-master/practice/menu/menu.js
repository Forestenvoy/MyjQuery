$(function () {
  // 偵測 Menu 按鈕點擊
  $(".toggle").on("click", function () {
    $(this).toggleClass("close");
    $(".menu").toggleClass("expanded");
    $(".menu-list li").toggleClass("hidden");
    $(this).parent().toggleClass("close");
  });
});