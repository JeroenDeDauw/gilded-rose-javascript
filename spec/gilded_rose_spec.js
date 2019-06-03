describe("Gilded Rose", function() {

  it("Golden Master test", function () {
      update_quality();
      expect(items[0]).toEqual(new Item('+5 Dexterity Vest', 9, 19));
      expect(items[1]).toEqual(new Item('Aged Brie', 1, 1));
      expect(items[2]).toEqual(new Item('Elixir of the Mongoose', 4, 6));
      expect(items[3]).toEqual(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
      expect(items[4]).toEqual(new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21));
      expect(items[5]).toEqual(new Item('Conjured Mana Cake', 2, 5));
  });


  describe("A Backstage pass", function () {
      let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 21);
      it("should increase in quality by 3 when 5 days or less are left", function() {
        backstagePass.sell_in = 5;
          let items = [backstagePass];
          update_quality([backstagePass]);
          expect(backstagePass.quality).toEqual(22)
      });
  })

});
