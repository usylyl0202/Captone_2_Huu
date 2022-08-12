window.onload = function () {
  const urlParam = new URLSearchParams(window.location.search);
  const myParam = urlParam.get("productid");
  console.log(myParam);
  showDetail(myParam);
};
function showDetail(id) {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id, //Đường dẫn backend cung cấp
    method: "GET", //method backend cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    console.log("hihi ", result.data.content);
    console.log("id", id);
    getProductById(result.data.content);
    relatedProducts(result.data.content.relatedProducts);
    console.log(
      "result.data.content.relatedProducts",
      result.data.content.relatedProducts
    );
    //Sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
  });
  //Xử lý thất bại
  promise.catch(function (err) {});
}
function getProductById(product) {
  let imge = "";
  imge = product.image;
  let html = `
  <div class="image">
            <img src="${product.image}" alt=""/>
          </div>
          <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}
            </p>
            <h4>Available size</h4>
            <div class="size">
              <button class="btn-size">${product.size[0]}</button>
              <button class="btn-size">${product.size[1]}</button>
              <button class="btn-size">${product.size[2]}</button>
              <button class="btn-size">${product.size[3]}</button>
              <button class="btn-size">${product.size[4]}</button>
              <button class="btn-size">${product.size[5]}</button>
              <button class="btn-size">${product.size[6]}</button>
              

            </div>
            <div class="price">${product.price}$</div>
            <div class="volume">
              <button class="plus" onclick="addVolume()">+</button>
              <p class="number">1</p>
              <button class="noplus"onclick="noAddVolume()">-</button>
            </div>
            <button class="add-card">Add to card</button>
          </div>"`;

  document.querySelector(".productDeteal").innerHTML = html;
}
function relatedProducts(arr) {
  let html = "";

  for (var i = 0; i < arr.length; i++) {
    var pd = arr[i];
    imge = pd.image;

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
    document.querySelector(".product-item").innerHTML = html;
  }
}
function addVolume() {
  const valueVolume = Number(document.querySelector(".number").innerHTML);

  document.querySelector(".number").innerHTML = valueVolume + 1;
}
function noAddVolume() {
  const valueVolume = Number(document.querySelector(".number").innerHTML);

  if (valueVolume !== 1) {
    document.querySelector(".number").innerHTML = valueVolume - 1;
  }
  //
}
