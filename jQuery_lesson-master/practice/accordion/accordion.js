$(function () {
    $(".accordion-item").on("click", function () {
    // 點擊展示手風琴內容，增加 active
    $(this).toggleClass("active");
    // 折疊面板，自動偵測需要展開或收縮
    $(this).find(".accordion-content").slideToggle();
    // 其他沒有被點擊的其他項目要縮起來，移除 active
    $(this).siblings().removeClass("active");
    // 面板內容也要收縮起來
    $(this).siblings().find(".accordion-content").slideUp();
    });
    // 預設第一個折疊面板內容顯示
    $(".accordion-item").first().click();
});