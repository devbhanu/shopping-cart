var Product = require('../models/product');
var mongoose = require('mongoose');
 mongoose.connect('localhost:27017/shopping');

var products =[
  new Product({
  imagePath:'http://images.gr-assets.com/books/1394240270l/21378580.jpg',
  title:'gothic video game',
  description:'awesome game of gothic is really action fame',
 price:20
}),
   new Product({
imagePath:'http://nick.mtvnimages.com/nick/promos-thumbs/games/scary-brawl/scary-brawl-4x3.jpg?quality=0.51&maxdimension=600',
title:'scary-brawl',
description:' fantastic funny game scare much as awesome game Nicklodean ',
price:20
}),
   new Product({
imagePath:'https://c.s-microsoft.com/en-in/CMSImages/Windows_Xbox_SeaofThieves_1920.jpg?version=32e154c5-de4e-75e5-e88d-a6a673a9b07b',
title:'Sea of theives',
description:'Nicklodean awesome game find many more in it',
price:35
}),
   new Product({
imagePath:'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-1lntw9n_81f4e962.jpeg',
title:'Monstober Zap',
description:'Play free Disney Channel games online featuring the likes of Descendants, Evermoor, and Jessie',
price:40
}),
   new Product({
imagePath:'http://pbskids.org/oddsquad/img/hexagons/downthetubes-badge.png',
title:'downthetubes-badge',
description:'Whether solving puzzles or adventuring is your thing we’ve got plenty of free online games for you to play',
price:25
})
];
var done=0;
for (var i=0;i<products.length;i++){
  products[i].save(function(err,result){
    done++;
    if(done===products.length){
    exit();
  }
  });
}
function exit(){
  mongoose.disconnect();
}
