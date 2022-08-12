window.onload = function () {
  getProduct();
};
function pagination(arr) {
  console.log("dfasdfsadasd", arr);
  let pdPage = arr;
  let curPage = 1;
  let perPage = 2;
  let totalPages = pdPage.length / 2;
  let perPD = [];
  perPD =
    pdPage.slice(curPage - 1) * (perPage, curPage - 1) * perPage + perPage;
}
function getProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product", //Đường dẫn backend cung cấp
    method: "GET", //method backend cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    console.log("hihi ", result.data.content);
    //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
    pagination(result.data.content);
  });
  //Xử lý thất bại
  promise.catch(function (err) {});
}
function renderProduct(arrProduct) {
  //param : input :arrSinhVien
  var imge = "";
  var html = ""; //output: string html
  for (var i = 0; i < arrProduct.length; i++) {
    var pd = arrProduct[i]; //Mỗi lần duyệt lấy ra 1 object sinhVien từ mảng {maSinhVien:'1',tenSinhVien:'...',...}
    // imge.push(pd.img);
    imge = pd.image;
    // console.log("pd.image", pd.image);
    html += `
                <div id="item-Features" class="item">
                    <img class="product-img" src="${imge}" alt="" />
                    <h3 class="product-name">${pd.name}</h3>
                    <p class="product-description">${pd.shortDescription}</p>
                    <div class="card-bottom">
                    <a href="../view/detail.html?productid=${pd.id}" class="btn-buy" onclick="showDetail('${pd.id}')">  Buy now</a>
                       
                        <p class="product-price">${pd.price}$</p>
                    </div> 
                </div> 
          
    
        `;
  }

  document.querySelector(".product-item").innerHTML = html;
}
