describe("Gilded Rose", function() {

    it("Dexterity Vest quality decreases normally", function() {
        var item = new Item('+5 Dexterity Vest', 10, 20);
        var expectedItem = new Item('+5 Dexterity Vest', 9, 19);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Aged Brie quality increases by one", function() {
        var item = new Item('Aged Brie', 2, 0);
        var expectedItem = new Item('Aged Brie', 1, 1);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Backstage pass quality increases by one (15 days to sell in)", function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
        var expectedItem = new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Elixir of the Mongoose quality decreases by one", function() {
        var item = new Item('Elixir of the Mongoose', 5, 7);
        var expectedItem = new Item('Elixir of the Mongoose', 4, 6);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Sulfuras, quality does not alter", function() {
        var item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
        var expectedItem = new Item('Sulfuras, Hand of Ragnaros', 0, 80);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Dexterity Vest quality decreases faster if sell is negative", function() {
        var item = new Item('+5 Dexterity Vest', 0, 20);
        var expectedItem = new Item('+5 Dexterity Vest', -1, 18);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Aged Brie quality increases by two if sell is negative", function() {
        var item = new Item('Aged Brie', 0, 0);
        var expectedItem = new Item('Aged Brie', -1, 2);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Backstage pass quality increases by two (less then 10 days to sell in)", function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
        var expectedItem = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 22);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Backstage pass quality increases by three (less then 5 days to sell in)", function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
        var expectedItem = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 23);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Backstage pass quality is zero after the sell in date", function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
        var expectedItem = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Quality is never more than 50", function() {
        var item = new Item('Aged Brie', 5, 50);
        var expectedItem = new Item('Aged Brie', 4, 50);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Quality is never negative", function() {
        var item = new Item('+5 Dexterity Vest', 5, 0);
        var expectedItem = new Item('+5 Dexterity Vest', 4, 0);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Conjured Mana Cake quality decreases by two", function() {
        var item = new Item('Conjured Mana Cake', 3, 6);
        var expectedItem = new Item('Conjured Mana Cake', 2, 4);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });

    it("Conjured Mana Cake quality decreases by four", function() {
        var item = new Item('Conjured Mana Cake', 0, 6);
        var expectedItem = new Item('Conjured Mana Cake', -1, 2);

        update_item_quality(item);

        expect(item).toEqual(expectedItem);
    });
});
