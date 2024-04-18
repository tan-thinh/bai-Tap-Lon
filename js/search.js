$(document).ready(function() {
    let kiemtra = localStorage.getItem("soLuongSP");
    if (kiemtra == "0") {
        $("#kiemtra").html("Tìm thấy 0 sản phẩm");
        $("#hienthi").css("display", "none");
    } else {
        let data = JSON.parse(localStorage.getItem("productSearch"));
        if (data) {
            let x = data.img;
            let img = x.split(";");
            $("#hover1").attr("src", img[0]);
            $("#hover2").attr("src", img[1]);
            $("#name").html(data.name);
            $("#danhgia").html(data.danhgia);
            $("#sotien").html(data.sotien);
            $("#giamgia").html(data.giamGia);
            $("#kiemtra").html("Tìm thấy 1 sản phẩm");

        }
    }
});