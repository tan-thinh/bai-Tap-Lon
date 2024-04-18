$(document).ready(function() {
    // localStorage.removeItem("userCredentials");
    // localStorage.removeItem("thongTinCaNhan");
    // const array = [];
    $("#dangki").attr("disabled", true);
    $("#hoten").blur(function() {
        let regex = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;
        if (!regex.test($(this).val())) {
            $("#tbhoten").html("họ tên không hợp lệ");
        } else {
            $("#tbhoten").html("");
        }
    });
    $("#email").blur(function() {
        let regex = /[A-Za-z\d]+@[a-z\d.]+\.[a-z]+$/;
        if (!regex.test($(this).val())) {
            $("#tbemail").html("Email không hợp lệ");
        } else {
            $("#tbemail").html("");
        }

    });
    $("#sodt").blur(function() {
        let regex = /^[\d]{10}/
        if (!regex.test($(this).val())) {
            $("#tbsodt").html("Số điện thoại không hợp lệ");
        } else {
            $("#tbsodt").html("");
        }

    });
    // $("#ngaysinh").blur(function() {
    //     let ngayNew = new Date();
    //     let ngayNhap = new Date($(this).val());
    //     if (ngayNhap == ngayNew) {
    //         $("#tbngaysinh").html("Ngày tạo không hợp lệ");
    //     } else {
    //         $("#tbngaysinh").html("");
    //     }


    // });
    $("#dktk").blur(function() {
        let regex = /^[a-z\d]+/
        if (!regex.test($(this).val())) {
            $("#tbtk").html("Tên tài khoản không hợp lệ");
        } else
            $("#tbtk").html("");

    });
    $("#dkmk").blur(function() {
        let regex = /^[A-Za-z\d]{6,}/
        if (!regex.test($(this).val())) {
            $("#tbmk").html("tối thiểu 6 kí tự");
        } else
            $("#tbmk").html("");
    })
    const dieuKhoanCheckbox = document.getElementById('dieuKhoan');
    dieuKhoanCheckbox.addEventListener('change', function() {
        if (this.checked) {
            $("#dangki").attr("disabled", false);
        } else {
            $("#dangki").attr("disabled", true);
        }
    });
    $("#dangki").click(function(e) {
        e.preventDefault();
        let userName = $("#dktk").val();
        let password = $("#dkmk").val();
        let thongtin = { // Sử dụng tên biến này phải nhất quán
            hoTen: $("#hoten").val(),
            email: $("#email").val(),
            soDT: $("#sodt").val(),
            // ngaySinh: $("#ngaysinh").val()
        };

        let credentials = { userName: userName, password: password };

        // Lưu thông tin dưới dạng chuỗi JSON trong localStorage với một khóa cụ thể
        localStorage.setItem("userCredentials", JSON.stringify(credentials));
        localStorage.setItem("thongTinCaNhan", JSON.stringify(thongtin)); // Tên biến đã sửa đúng

        window.location.href = "login.html";

    });
});