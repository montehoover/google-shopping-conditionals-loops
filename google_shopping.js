var data = require("./products.json")
var currentItem;
var count = 0;
var backorders = []
var multi_images = []
var canons = []
for (var i = 0; i < data['items'].length; i++) {
    currentItem = data['items'][i];
    // 1.)
    if (currentItem.kind === "shopping#product") {
        count++;
    }
    // 2.)
    if (currentItem.product.inventories[0].availability === "backorder") {
        backorders.push(currentItem.product.title);
    }
    // 3.)
    if (currentItem.product.images.length > 1) {
        multi_images.push(currentItem.product.title);
    }
        if (currentItem.product.brand === "Canon") {
        canons.push(currentItem.product.title);
    }

}
// 1.) The kind of results you're are dealing are shopping#products. 
// Go through the items and find all results that have kind of 
// shopping#product. How many are there? Where else is this count 
// information stored in the search results?
console.log("Answer to #1: ")
console.log(count); // There are 25 items of kind shopping#product
console.log(data['currentItemCount']); // Shows there are 25 of these


// 2.) Find all items with a backorder availability in inventories.
console.log("Answer to #2: ")
for (var i = 0; i < backorders.length; i++) {
    console.log(backorders[i]);
}

// 3.) Find all items with more than one image link.
console.log("Answer to #3: ")
for (var i = 0; i < multi_images.length; i++) {
    console.log(multi_images[i]);
}

// 4.) Find all canon products in the items (careful with case 
// sensitivity).
console.log("Answer to #4: ")
for (var i = 0; i < canons.length; i++) {
    console.log(canons[i]);
}

// 5.) Find all items that have product author name of "eBay" and are 
// brand "Canon".

//console.log(data["items"]);