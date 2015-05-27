describe("Gilded Rose", function() {

    it("should do something", function() {
        update_quality();
    });

});

describe("normal item", function() {

    it("should decrease quality by one", function() {
        var test_item = new Item('normal item', 5, 10);
        update_item(test_item);
        expect(test_item.sell_in).toBe(4);
    });

    it("should decrease sell_in by one", function() {
        var test_item = new Item('normal item', 5, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(9);
    });

    it("should decrease quality by two when sell_in zero", function() {
        var test_item = new Item('normal item', 0, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(8);
    });

    it("should not decrease quality below zero when quality zero", function() {
        var test_item = new Item('normal item', 5, 0);
        update_item(test_item);
        expect(test_item.quality >= 0).toBe(true);
    });

    it("should not decrease quality below zero even when decreasing by two", function() {
        var test_item = new Item('normal item', 0, 1);
        update_item(test_item);
        expect(test_item.quality >= 0).toBe(true);
    });

});

describe("Item that increases in quality", function() {
    var itemNames = [
        "Aged Brie",
        "Backstage passes to a TAFKAL80ETC concert"
    ];

    for (var i = 0; i < itemNames.length; i++) {
        it(itemNames[i] + " should not increase in quality beyond 50", function() {
            var test_item = new Item(itemNames[i], 10, 50);
            update_item(test_item);
            expect(test_item.quality <= 50).toBe(true);
        });
    }

});

describe("Aged Brie", function() {

    it("should increase in quality by one", function() {
        var test_item = new Item('Aged Brie', 5, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(11);
    });

});

describe("Backstage passes to a TAFKAL80ETC concert", function() {

    it("should increase quality by 2 when sell_in is <= 10", function() {
        var test_item = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(12);
    });

    it("should increase quality by 3 when sell_in is <= 5", function() {
        var test_item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(13);
    });

    it("should have quality 0 when sell_in is < 0", function() {
        var test_item = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(0);
    });

});

describe("Conjured Mana Cake", function() {

    it("should decrease in quality twice as fast as normal items", function() {
        var test_item = new Item('Conjured Mana Cake', 9, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(8);
    });

    it("should decrease in quality twice as fast as normal items even sell_in is zero", function() {
        var test_item = new Item('Conjured Mana Cake', 0, 10);
        update_item(test_item);
        expect(test_item.quality).toBe(6);
    });

    it("should decrease quality to zero if quality is one", function() {
        var test_item = new Item('Conjured Mana Cake', 9, 1);
        update_item(test_item);
        expect(test_item.quality).toBe(0);
    });

    it("should decrease quality to zero if quality is one and sell_in is 0", function() {
        var test_item = new Item('Conjured Mana Cake', 0, 1);
        update_item(test_item);
        expect(test_item.quality).toBe(0);
    });

});

describe("Sulfuras", function() {

    it("should not decrease in quality", function() {
        var test_item = new Item('Sulfuras, Hand of Ragnaros', 5, 10);
        update_item(test_item);
        expect(test_item.quality >= 10).toBe(true);
    });

});

