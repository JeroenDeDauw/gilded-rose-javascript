function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        update_item_quality(items[i]);
    }
}

function decrease_quality(item, value) {
    item.quality = Math.max(0, item.quality - value);
}
function increase_quality(item, value) {
    item.quality = Math.min(50, item.quality + value);
}

function update_backstagepass_quality(item) {
    if (item.sell_in <= 0) {
        item.quality = 0;
    } else if (item.sell_in < 6) {
        increase_quality(item, 3);
    } else if (item.sell_in < 11) {
        increase_quality(item, 2);
    } else {
        increase_quality(item, 1);
    }
}

function update_item_quality(item) {
    if (item.name == 'Sulfuras, Hand of Ragnaros') {
        return;
    }
    item.sell_in --;

    if (item.name == 'Aged Brie') {
        if (item.sell_in < 0) {
            increase_quality(item, 1);
        }
        increase_quality(item, 1);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        update_backstagepass_quality(item);
    } else if (item.name == 'Conjured Mana Cake') {
        if (item.sell_in < 0) {
            decrease_quality(item, 2);
        }
        decrease_quality(item, 2);
    } else {
        if (item.sell_in < 0) {
            decrease_quality(item, 1);
        }
        decrease_quality(item, 1);
    }
}
