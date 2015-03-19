describe("Gilded Rose", function() {

  it("should do something", function() {
    update_quality();
  });

  describe("Normal item", function() {
    it("should decrease sell in date by one", function() {
      var item = new Item('Normal item', 1, 20);
      ageItem(item);
      expect(item.sell_in).toBe(0);
      ageItem(item);
      expect(item.sell_in).toBe(-1);
    });

    it("should not reach a negative quality", function() {
      var item = new Item('Normal item', -1, 1);
      ageItem(item);
      expect(item.quality).toBe(0);
    });

    it("should be worth less after sell_in", function() {
      var item = new Item('Normal item', 0, 20);
      ageItem(item);
      expect(item.quality).toBe(18);
    });

    it("should decrease by 1 when less than or 5 days remain", function() {
      var item = new Item('Normal item', 2, 20);

      ageItem(item);
      expect(item.quality).toBe(19);

      ageItem(item);
      expect(item.quality).toBe(18);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    it("should not decrease sell in date", function() {
      var item = new Item('Sulfuras, Hand of Ragnaros', 0, 20);
      ageItem(item);
      expect(item.sell_in).toBe(0);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", function() {

    it("should switch to increasing by 2 when 10 days remain", function() {
      var item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);
      ageItem(item);
      expect(item.quality).toBe(21); // 11 days remained -> +1

      ageItem(item);
      expect(item.quality).toBe(23); // 10 days remained -> +2
    });

    it("should increase by 2 when less than or 10 days remain", function() {
      var item = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20);
      ageItem(item);
      expect(item.quality).toBe(22); // 9 days remained -> +2
    });

    it("should switch to increasing by 3 when 5 days remain", function() {
      var item = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20);

      ageItem(item);
      expect(item.quality).toBe(22); // 6 days remained -> +2

      ageItem(item);
      expect(item.quality).toBe(25); // 5 days remained -> +3
    });

    it("should increase by 3 when less than or 5 days remain", function() {
      var item = new Item('Backstage passes to a TAFKAL80ETC concert', 3, 20);

      ageItem(item);
      expect(item.quality).toBe(23); // 3 days remained -> +3
    });

    it("should be worthless after sell_in", function() {
      var item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
      ageItem(item);
      expect(item.quality).toBe(0);
    });

  });

  describe('Conjured Mana Cake', function() {
    it('decreases quality by two', function() {
      var item = new Item('Conjured Mana Cake', 7, 5);
      ageItem(item);
      expect(item.quality).toBe(3);
    })
  })

});
