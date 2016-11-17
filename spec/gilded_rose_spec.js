describe("Gilded Rose", function() {
    it("should decrease sell_in by one for normal items", function() {
        var item = new Item('+5 Dexterity Vest', 10, 20);
        update_item(item);

        expect(item.sell_in).toBe(9);
    });

    it("should maintain sell_in for Sulfuras", function() {
        var item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
        update_item(item);

        expect(item.sell_in).toBe(0);
    });

    it("should maintain quality for Sulfuras", function() {
        var item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
        update_item(item);

        expect(item.quality).toBe(80);
    });
});
