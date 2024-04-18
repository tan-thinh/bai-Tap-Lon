$(document).ready(function() {
    // Truy xuất dữ liệu người dùng từ localStorage
    let storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    // Kiểm tra xem có dữ liệu người dùng được lưu không và điền vào các trường tương ứng
    if (storedCredentials) {
        $("#taikhoan").val(storedCredentials.userName);
        $("#matkhau").val(storedCredentials.password);
    }
    $("#dangnhap1").click(function(e) {
        if (storedCredentials) {
            if ($("#taikhoan").val() == storedCredentials.userName &&
                $("#matkhau").val() == storedCredentials.password) {
                alert("đăng nhập thành công");
                window.location.href = "home.html";
            } else {
                $("#tbdn").html("đăng nhập không thành công");
            }
        } else
            $("#tbdn").html("đăng nhập không thành công");
    });


});