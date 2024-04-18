$(document).ready(function() {
    let data = JSON.parse(localStorage.getItem("sanpham"));
    // console.log(data.length)
    const htmls = data.map((item) => {
        let x = item.img;
        let img = x.split(";");

        return `
        <div class="col-sm-3 col-6 ">
            <div class="card w-100 h-50">
                <div class="card-header h-100" style="background-color: rgba(170,176,182,255);" id="hover">
                    <img src="${img[0]}" alt="" class="card-img w-100 h-100" width="100%" style=" border-bottom-left-radius: 30%;" id="hover1">
                    <img src="${img[1]}" alt="" class="card-img w-100 h-100" width="100%" style=" border-bottom-left-radius: 30%;" id="hover2">
                </div>
                <div class="card-body" style="height: 90%; line-height: 100%;border: 1px solid rgba(170,176,182,255) ; 
                border-bottom-left-radius: 10%; border-bottom-right-radius: 10%;">
                    <p class="">${item.name}</p>
                    <div class="row" id="star">
                        <label for="#"><i class="fa-solid fa-star"></i></label>
                        <label for="#"><i class="fa-solid fa-star"></i></label>
                        <label for="#"><i class="fa-solid fa-star"></i></label>
                        <label for="#"><i class="fa-solid fa-star"></i></label>
                        <label for="#"><i class="fa-solid fa-star"></i></label>
                        <p style="width: 30%; font-size: 13px;">${item.danhGia}</p>
                    </div>
                    <div class="row">
                        <p class="w-50" style="color:red; font-size: 20px;">${item.giaTienSales}</p>
                        <button type="button" class="btn btn-outline-secondary btn-detail" style="width: 40%;">Chi Tiết</button>
                    </div>
                    <div class="khuyenmai">
                        <p>${item.giamGia}</p>
                    </div>
                </div>
            </div>
        </div>

        `
    })
    $("#hienthi").html(htmls);

});