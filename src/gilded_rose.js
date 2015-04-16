function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        update_item(items[i]);
    }
}

function update_item(item) {
    var update_by_amount = 1;
    if (item.name == 'Conjured Mana Cake') {
        update_by_amount = 2;
    }

    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - update_by_amount;
        }
        if (item.quality < 0) {
            item.quality = 0;
        }
    } else {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sell_in < 11 && item.quality < 50) {
                    item.quality = item.quality + 1;
                }
                if (item.sell_in < 6 && item.quality < 50) {
                    item.quality = item.quality + 1;
                }
            }
        }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sell_in = item.sell_in - 1;
    }
    if (item.sell_in < 0) {
        if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    item.quality = item.quality - update_by_amount;
                }
                if (item.quality < 0) {
                    item.quality = 0;
                }
            } else {
                item.quality = item.quality - item.quality;
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
            }
        }
    }
}


//// 1. find the direction of quality (+1, 0, -1, -2)
//var dir = -1;
//switch(items[i].name) {
//  case "Sulfuras, Hand of Ragnaros":
//          dir = 0;
//          break;
//  case "Backstage passes to a TAFKAL80ETC concert":
//      dir = someFunction()
//  case "Aged Brie":
//          dir = +1;
//          break;
//  case "Conjured Mana Cake":
//          dir = -2;
//          break;
//}
//// 2. degrade if possible/upgrade if possible