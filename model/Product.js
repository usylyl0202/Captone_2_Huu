//  "id": 1,
//       "name": "Adidas Prophere",
//       "alias": "adidas-prophere",
//       "price": 350,
//       "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//       "size": "[36,37,38,39,40,41,42]",
//       "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//       "quantity": 995,
//       "deleted": false,
//       "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
//       "relatedProducts": "[2,3,5]",
//       "feature": true,
//       "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"

class Product {
  constructor(id, name, price, description, shortDescription, size, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.shortDescription = shortDescription;
    this.size = size;
    this.image = image;
  }
}
function Product () {
  this.alias = '';
  this.categories = '';
  this.deleted = '';
  this.description = '';
  this.feature = '';
  this.id = '';
  this.image = '';
  this.name = '';
  this.price = '';
  this.quantity = '';
  this.relatedProducts = '';
  this.shortDescription = '';
  this.size = '';
}