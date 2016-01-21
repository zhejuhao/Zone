/**
 * Created by liqi on 16-1-20.
 */
window.onload = function () {
    var name = get_name();
    add_div(name);

};
function get_name() {
    var name;
    $.ajaxSettings.async = false;//所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false
    $.getJSON("name.json", function (data) {
        name = data.name;
        console.log(name);
    });
    return name;
}
function add_div(name) {
    var info;
    $.ajaxSettings.async = true;//原始图片的宽高需要加载完之后才有，所以需要异步加载
    $.getJSON("zone-info.json", function (data) {
        console.log(name);
        var all_info = data;
        name.forEach(function (name_i) {
            var div = document.getElementById("all-info");
            var info = all_info[name_i];
            var div_block = document.createElement("div");
            div_block.className = "div-style";
            var div_head = document.createElement("div");
            div_head.className = "head";
            var div_head_image = document.createElement("div");
            div_head_image.className = "head-image";
            div_head_image.innerHTML = "<img class='head-img' src='" + info.head + "'/> ";
            var div_name = document.createElement("div");
            div_name.className = "person";
            div_name.innerHTML = "<p >" + name_i + "</p>"+"2小时以前";
            var div_arrow = document.createElement("div");
            div_arrow.className = "arrow";
            div_arrow.innerHTML = "<img class='btn-arrow' src= './image/arrow.png' />";
            var div_image = document.createElement("div");
            div_image.className = "image";
            var new_image = new Image();
            new_image.src = info.image;
            console.log(new_image.width);
            console.log(new_image.height);
            if (new_image.width >= new_image.height) {
                div_image.innerHTML = "<img class='image-w' src= '" + info.image + "'/>";
            }
            else {
                div_image.innerHTML = "<img class='image-h' src= '" + info.image + "'/>";
            }
            var div_text = document.createElement("div");
            div_text.className = "content";
            div_text.innerHTML = info.word;
            var div_btn_left = document.createElement("div");
            div_btn_left.className = "btn-left";
            div_btn_left.innerHTML = "<img class='image-btn-left' src= './image/heart.png' />" +
                "<img class='image-btn-left' src= './image/eye.png' />";
            var div_btn_right = document.createElement("div");
            div_btn_right.className = "btn-right";
            div_btn_right.innerHTML = "<img class='image-btn-right' src= './image/heart.png' />" +
                "<img class='image-btn-right' src= './image/pinglun.png' />" +
                "<img class='image-btn-right' src= './image/share.png' />";
            div_head.appendChild(div_head_image);
            div_head.appendChild(div_name);
            div_head.appendChild(div_arrow);
            div_block.appendChild(div_head);
            div_block.appendChild(div_image);
            div_block.appendChild(div_text);
            div_block.appendChild(div_btn_left);
            div_block.appendChild(div_btn_right);
            div.appendChild(div_block);
        });
    });

}
