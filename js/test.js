function renderSanPhamKhoMuc() {

    const htmls = sanphamKhoMuc.map((item) => {

            return `<div class="col-md-4 col-sm-6 mt-3">
        <div class="card " style="width:400px">
             <img style="height: 300px; width: 100%;" class="card-img-top  " src="${item.image}" alt="">
         
             <div class="card-body">
                <h4>${item.name}</h4>
               <p>${item.thongtin}</p>
                 <h3 class="text-success text-center"><span>${formatToVND(item.Gia)}</span>đ</h3>
             </div>
          <div class="card-footer text-end ">
              <button  class="butXemKM btn btn-primary ">Xem thêm</button>
               <button class="btn btn-danger  mx-3">Mua ngay</button>
           </div>
       </div>
      </div>`

        })
        // console.log(htmls);
    document.getElementById('jsProductKhoMuc').innerHTML = htmls.join('\n');

    //lay nut xem them day tt qua html chi tietsp
    const x = document.getElementsByClassName('butXemKM');
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener('click', (e) => {
            //lay ra ten car
            var val = e.target.closest('.card').childNodes[3].firstElementChild.innerHTML;
            dulieu = sanphamKhoMuc.find((item) => {
                return item.name.toUpperCase().trim() == val.toUpperCase().trim();
            });
            localStorage.setItem('detailProduct', JSON.stringify(dulieu));
            window.open('../html/chitietsanpham.html');
        });


    }

}