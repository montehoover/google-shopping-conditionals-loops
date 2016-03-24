var data = require("./products.json")

var count = 0;
for (var i = 0; i < data['items'].length; i++) {
    // 
    if (data['items'][i].kind === "shopping#product") {
        count++;
    }
}
// 1.) The kind of results you're are dealing are shopping#products. 
// Go through the items and find all results that have kind of 
// shopping#product. How many are there? Where else is this count 
// information stored in the search results?
console.log(count); // There are 25 items of kind shopping#product
console.log(data['currentItemCount']); // Shows there are 25 of these items


// 2.) Find all items with a backorder availability in inventories.


// 3.) Find all items with more than one image link.


// 4.) Find all canon products in the items (careful with case 
// sensitivity).


// 5.) Find all items that have product author name of "eBay" and are 
// brand "Canon".

//console.log(data["items"]);