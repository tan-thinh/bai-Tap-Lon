$(document).ready(function() {
    let data = JSON.parse(localStorage.getItem("product"));
    // console.log(data);
    // name
    $("#name").html(data.name);
    //img
    let x = data.img;
    let img = x.split(";");
    console.log(img);
    $("#img1").attr("src", img[0]);
    $("#img2").attr("src", img[1]);
    $("#img3").attr("src", img[2]);
    $("#img4").attr("src", img[3]);
    // danh gia
    $("#danhgia").html(data.danhGia);
    // ma sp
    $("#masp").html(data.maSP);
    // tinh trang
    $("#tinhtrang").html(data.tinhTrang);
    // phan khuc
    $("#tui").html(data.phanKhuc);
    // gia tien sales
    $("#tiensales").html(data.giaTienSales);
    // tien
    $("#tien").html(data.giaTien);
    //mauSac
    $("#mauSac").html(data.mauSac);
    // kichthuoc 
    $("#kichthuoc").html(data.kichThuoc);
    // chat lieu
    $("#chatlieu").html(data.chatLieu);
    //ttct
    $("#ttct").html(data.ttCt);
});