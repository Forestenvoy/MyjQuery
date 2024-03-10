// jQuery 程式碼
$(function () {
$(".lightbox").on("click", function (e) {
    // 防止跳頁
    e.preventDefault();
    // 取得點擊圖片的 src
    var imageUrl = $(this).attr("href");
    console.log(imageUrl);
    // 設置燈箱圖片
    $(".lightbox-img").attr("src", imageUrl);
    $(".lightbox-overlay").fadeIn(500);
});
$(".close").on("click", function () {
    $(".lightbox-overlay").fadeOut(500);
});
});