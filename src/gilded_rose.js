function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

Item.prototype.update_quality_and_sell_in = function() {
  this.update_quality();
  this.update_sell_in();
  this.update_special_quality();
};

Item.prototype.update_quality = function() {
    if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0) {
        if (this.name != 'Sulfuras, Hand of Ragnaros') {
          if (this.name === 'Conjured Mana Cake') {
            this.quality = this.quality - 2;
          } else {
            this.quality = this.quality - 1;
          }
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.sell_in < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
          if (this.sell_in < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
    }
};

Item.prototype.update_sell_in = function() {
   if (this.name != 'Sulfuras, Hand of Ragnaros') {
      this.sell_in = this.sell_in - 1;
    }
};

Item.prototype.update_special_quality = function() {
   if (this.sell_in < 0) {
      if (this.name != 'Aged Brie') {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name != 'Sulfuras, Hand of Ragnaros') {
              this.quality = this.quality - 1;
            }
          }
        } else {
          this.quality = this.quality - this.quality;
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1;
        }
      }
    }
};

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
   var item = items[i];

    item.update_quality_and_sell_in();
 }
}
