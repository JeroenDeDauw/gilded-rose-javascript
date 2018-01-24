describe("Gilded Rose", function() {

  it("should do something", function() {
    update_quality();
  });

	describe("Normal Item", function() {
		it("should update a normal item correctly", function () {
			var vest = new Item('+5 Dexterity Vest', 10, 20);
			update_item(vest);
			expect(vest.sell_in).toBe(9);
			expect(vest.quality).toBe(19);
		})

		it("should update a normal item past sell_by date correctly", function () {
			var vest = new Item('+5 Dexterity Vest', 0, 20); // TODO: verify this is correct with owner
			update_item(vest);
			expect(vest.quality).toBe(18);
		})
  })



  it("should update a conjured item correctly", function () {
      var conjuredItem = new Item('Conjured Mana Cake', 10, 20);
      update_item(conjuredItem);
      expect(conjuredItem.quality).toBe(18);
  })

  it("should update a conjured item past sell_by date correctly", function () {
      var conjuredItem = new Item('Conjured Mana Cake', 0, 20); // TODO: verify this is correct with owner
      update_item(conjuredItem);
      expect(conjuredItem.quality).toBe(16);
  })

});
