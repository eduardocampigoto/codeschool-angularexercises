(function(){
var app = angular.module('store',[]);
var gems=[{ name: 'Dodecahedron', price: 2, description:'...', data:"19021988", images:[{full: 'imagem.png', thumb: 'imagem2-thumb.png'}], canPurchase: true, storeOut: false, specification: "Especificacao do produto 1",  review: "Review do produto 1"},
          { name: 'Pentagonal Gem', price: 5.95, description:'. . .', data:"19021988",images:[{full: 'imagem2.png', thumb: 'imagem2-thumb.png'}], canPurchase: false, storeOut: false, specification: "Especificacao do produto 2", review: "Review do produto 2"} 
         ]
    
app.controller('StoreController', function(){
    this.products = gems;
});
   

    
})();

