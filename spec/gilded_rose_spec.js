describe('Gilded Rose', function() {

    it('should be able to call update_quality()', function() {
        update_quality();
    });

    it('degrades the quality twice as fast if the sell_in days is less than zero', function() {
        var item = new Item('test', -1, 6);
        check_quality(item, 4);
    });

    it('does not degrade the quality below zero', function() {
        var item = new Item('test', 5, 0);
        check_quality(item, 0);
    });

    it('increases the quality on "Aged Brie" the older it gets', function() {
        var item = new Item('Aged Brie', 3, 6);
        check_quality(item, 7);
    });

    it('does increase the quality above 50', function() {
        var item = new Item('Aged Brie', 3, 50);
        check_quality(item, 50);
    });

    it('does not decrease Sulfuras in quality', function() {
        var item = new Item('Sulfuras, Hand of Ragnaros', 3, 10);
        check_quality(item, 10);
    });

    it('does not decrease Sulfuras sell_in time', function() {
        var item = new Item('Sulfuras, Hand of Ragnaros', 3, 10);
        check_sell_in(item, 3);
    });

    it('decreases sell_in time by one', function() {
        var item = new Item('test', 3, 10);
        check_sell_in(item, 2);
    });

    it('does increase the quality by two when there are 10 days or less left for "Backstage Passes"', function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10);
        check_quality(item, 12);
    });

    it('does increase the quality by 3 when there are 5 days or less left for "Backstage Passes"', function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10);
        check_quality(item, 13);
    });

    it('does drop the quality quality to zero after the concert', function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10);
        check_quality(item, 0);
    });

    it('does increase the quality by one when there are more than 10 days left for "Backstage Passes"', function() {
        var item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10);
        check_quality(item, 11);
    });

    it('degrades the quality by one for a normal item', function() {
        var item = new Item('test', 3, 6);
        check_quality(item, 5);
    });

    it('degrades the quality twice as fast on conjured items', function() {
        var item = new Item('Conjured Mana Cake', 3, 6);
        check_quality(item, 4);
    });

});
