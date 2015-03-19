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
    ageItem(items[i]);
  }
}

function increaseQualityIfPossible(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

function ageItem(item) {
  decrementSellInDate(item);
  updateQuality(item);
}

function decrementSellInDate(item) {
  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sell_in = item.sell_in - 1;
  }
}

function updateQuality(item) {
  if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    var qualityLoss = 1;

    if (item.sell_in < 0) {
      qualityLoss *= 2;
    }

    if (item.name == 'Conjured Mana Cake') {
      qualityLoss *= 2;
    }

    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      if (item.quality >= qualityLoss) {
        item.quality -= qualityLoss;
      } else {
        item.quality = 0;
      }
    }
  } else {
    increaseQualityIfPossible(item);
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sell_in < 10) {
        increaseQualityIfPossible(item);
      }
      if (item.sell_in < 5) {
        increaseQualityIfPossible(item);
      }
    }
  }

  if (item.sell_in < 0) {
    if (item.name != 'Aged Brie') {
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = 0;
      }
    } else {
      increaseQualityIfPossible(item);
    }
  }
}