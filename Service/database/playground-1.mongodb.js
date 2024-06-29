// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('crud');

// Create a new document in the collection.
db.getCollection('products').insertMany(
  [{
  
    "name": "Ergonomic Chair",
    "description": " Ghế phong cách Bắc Âu",
    "price": 20,
    "color": "Nâu",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-3.png"
  },
  {
    "name": "Nordic chair",
    "description": "Ghế gỗ cổ điển",
    "price": 30,
    "color": "Xanh đậm",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-1.png"
  },
  {
    "name": "Contemporary Leather Armchair",
    "description": "Áo hoodie unisex với họa tiết in hoạt hình, chất liệu cotton-polyester",
    "price": 25,
    "color": "Đen",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190921/original/pngtree-white-small-round-table-furniture-png-image_4708947.jpg"
  },
  {
    "name": "Vintage Metal Dining Chair",
    "description": "Áo thun nam phong cách streetwear, chất liệu cotton thoáng mát",
    "price": 15,
    "color": "Xám",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190705/original/pngtree-white-cartoon-table-png-image_4283831.jpg"
  },
  {
    "name": "Modern Plastic Chair",
    "description": "Quần legging nữ co giãn, phù hợp với hoạt động thể dục",
    "price": 10,
    "color": "Đen",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-1.png"
  },
  {
    "name": "Ergonomic Office Chair",
    "description": "Áo khoác nam phối lớp lót nỉ bên trong, phong cách thể thao",
    "price": 45,
    "color": "Đen",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190902/original/pngtree-simple-round-table-decoration-pattern-png-image_4389205.jpg"
  },
  {
    "name": "Folding Outdoor Chair",
    "description": "Quần jeans nam dáng slim fit, chất liệu jean co giãn tốt",
    "price": 30,
    "color": "Xanh đậm",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-2.png"
  },
  {
    "name": "Rustic Wooden Bench",
    "description": "Áo len nữ phom rộng, cổ lọ, phối họa tiết hình học",
    "price": 25,
    "color": "Hồng pastel",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190902/original/pngtree-simple-round-table-decoration-pattern-png-image_4389205.jpg"
  },
  {
    "name": "Industrial Bar Stool",
    "description": "Áo thun unisex in hình vintage, chất liệu cotton thoáng mát",
    "price": 15,
    "color": "Xám",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-2.png"
  },
  {
    "name": " Leather Recliner Chair",
    "description": "Váy dài nữ dáng chữ A, phối ren tinh tế",
    "price": 35,
    "color": "Trắng kem",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190902/original/pngtree-simple-round-table-decoration-pattern-png-image_4389205.jpg"
  },
  {
    "name": " Wooden Rocking Chair",
    "description": "Áo khoác bomber nam phối lớp lót nỉ dày, kiểu dáng thời trang",
    "price": 50,
    "color": "Xanh rêu",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190902/original/pngtree-simple-round-table-decoration-pattern-png-image_4389205.jpg"
  },
  {
    "name": "Plastic Kids Chair",
    "description": "Quần short nữ phong cách vintage, chất liệu thoáng mát",
    "price": 20,
    "color": "Vàng nghệ",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190902/original/pngtree-simple-round-table-decoration-pattern-png-image_4389205.jpg"
  },
  {
    "name": "Mid-century Lounge Chair",
    "description": "Áo hoodie unisex thêu hình trên ngực, chất liệu cotton dày dặn",
    "price": 40,
    "color": "Đỏ",
    "category": "Bàn",
    "image": "https://png.pngtree.com/png-clipart/20190902/original/pngtree-simple-round-table-decoration-pattern-png-image_4389205.jpg"
  },
  {
    "name": "Bohemian Rattan Chair",
    "description": "Áo sơ mi nữ cổ sen, phom dáng rộng rãi, chất liệu cotton mềm mại",
    "price": 22,
    "color": "Xanh pastel",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-2.png"
  },
  {
    "name": "Modern Plastic Chair",
    "description": "Quần tây nam dáng ôm body, chất liệu vải mịn, phù hợp công sở",
    "price": 55,
    "color": "Xám tro",
    "category": "Ghế",
    "image": "https://themewagon.github.io/furni/images/product-2.png"
  }]
    

);








db.getCollection('sercurity').insertMany(
  [
  { username: "HaiCutee",
    password: "123456" }
  ]
);
