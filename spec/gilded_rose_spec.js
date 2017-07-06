describe("Gilded Rose", function() {

	it("Normal Items", function() {
		var item = new Item('Normal Item', 10, 20);
		update_item(item);
		expect(item.quality).toBe(19);
	});

	it("Aged Brie", function() {
		var item = new Item('Aged Brie', 2, 0);
		update_item(item);
		expect(item.quality).toBe(1);
	});

	it("Backstage passes", function() {
		var item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
		update_item(item);
		expect(item.quality).toBe(21);
	});

  it("Sulfuras", function() {
		var item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
		update_item(item);
		expect(item.quality).toBe(80);
	});

	it("Backstage passes 10 days", function() {
		var item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
		update_item(item);
		expect(item.quality).toBe(22);
	});
});
