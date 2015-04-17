(function () {
    "use strict";

    describe("Gilded Rose", function() {

        it("should do something", function() {
            update_quality();
        });

        describe('with ordinary item', function() {
            it("should decrease quality and sell-in by one", function () {
                var testItem = new Item('Test name', 20, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.sell_in).toBe(19);
                expect(agedItem.quality).toBe(24);
            });

            it("should decrease quality by two when sell-in less than 0", function () {
                var testItem = new Item('Test name', -10, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(23);
            });

            it("should not decrease quality under 0", function () {
                var testItem = new Item('Test name', 20, 0);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(0);
            });

            it("should not decrease quality under 0 even when above 0 before", function () {
                var testItem = new Item('Test name', -10, 1);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(0);
            });
        });

        describe('with Aged Brie', function () {
            it("should increase the quality", function () {
                var testItem = new Item('Aged Brie', 20, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(26);
            });

            it("should not increase the quality above 50", function () {
                var testItem = new Item('Aged Brie', 20, 50);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(50);
            });

            it("should increase the quality by two when sell-in is below 0", function () {
                var testItem = new Item('Aged Brie', -20, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(27);
            });
        });

        describe('with Sulfuras', function () {
            var testItem = new Item('Sulfuras, Hand of Ragnaros', 20, 25);

            it("should not change the quality", function () {
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(25);
            });

            it("should not change the sell-in", function () {
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.sell_in).toBe(20);
            });
        });

        describe('with Backstage passes', function () {
            it("should increase the quality by one when sell-in is above 10", function () {
                var testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 20, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(26);
            });

            it("should increase the quality by two when sell-in is between 5 and 10", function () {
                var testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(27);
            });

            it("should increase the quality by three when sell-in is between 0 and 5", function () {
                var testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(28);
            });

            it("should set quality to zero when sell-in is negative", function () {
                var testItem = new Item('Backstage passes to a TAFKAL80ETC concert', -10, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(0);
            });
        });

        describe('with Conjured item', function () {
            it("should decrease quality by two", function () {
                var testItem = new Item('Conjured Mana Cake', 20, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(23);
            });

            it("should decrease quality by four when sell-in less than 0", function () {
                var testItem = new Item('Conjured Mana Cake', -10, 25);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(21);
            });

            it("should not decrease quality under 0 even when above 0 before", function () {
                var testItem = new Item('Conjured Mana Cake', -10, 3);
                var agedItem = getUpdatedItem(testItem);
                expect(agedItem.quality).toBe(0);
            });
        });
    });
}());
