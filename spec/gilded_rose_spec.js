describe("Gilded Rose", function() {

    describe("Default item behaviour", function() {
        it( "does not decrease quality below zero", function() {
            var item = new Item( "test", 5, 0 );
            update_item( item );
            expect( item.quality ).toBe( 0 );
        } );

        it( "does decrease quality normally", function() {
            var item = new Item( "test", 5, 2 );
            update_item( item );
            expect( item.quality ).toBe( 1 );
        } );

        it( "quickly decrease if negative sell-in", function() {
            var item = new Item( "test", -5, 4 );
            update_item( item );
            expect( item.quality ).toBe( 2 );
        } );

        it( "goes to zero even if decreases quickly", function() {
            var item = new Item( "test", -5, 1 );
            update_item( item );
            expect( item.quality ).toBe( 0 );
        } );

        it( "decreases sell in by one", function() {
            var item = new Item( "test", 10, 5 );
            update_item( item );
            expect( item.sell_in ).toBe( 9 );
        } );
    });

    describe("Aged Brie", function() {
        it("...quality increases by one", function() {
            var item = new Item("Aged Brie", 10, 5);
            update_item(item);
            expect(item.quality).toBe(6);
        });

        it("...quality does not increase beyond 50", function() {
            var item = new Item("Aged Brie", 10, 50);
            update_item(item);
            expect(item.quality).toBe(50);
        });
    });

    describe("Sulfuras", function() {
        it("retains its-sell", function() {
            var item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
            update_item(item);
            expect(item.sell_in).toBe(0);
        });

        it("retains its quality", function() {
            var item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
            update_item(item);
            expect(item.quality).toBe(80);
        });
    });

    describe("Backstage passes", function() {
        it("increases in quality by 1 if more than 10 days to sell-in", function() {
            var item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 5);
            update_item(item);
            expect(item.quality).toBe(6);
        });

        it("increases in quality by 2 if 5 < sell-in <= 10 ", function() {
            var item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5);
            update_item(item);
            expect(item.quality).toBe(7);
        });

        it("increases in quality by 3 if 0 < sell-in <= 5 ", function() {
            var item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5);
            update_item(item);
            expect(item.quality).toBe(8);
        });

        it("increases in quality by 3 if sell-in = 1 and then goes to 0 ", function() {
            var item = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 5);
            update_item(item);
            expect(item.quality).toBe(8);
        });

        it("increases in quality by 3 if sell-in = 0 ", function() {
            var item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5);
            update_item(item);
            expect(item.quality).toBe(0);
        });

    });

    describe("Conjured", function() {
        var item_name = "Conjured Mana Cake";

        it( "does not decrease quality below zero", function() {
            var item = new Item( item_name, 5, 0 );
            update_item( item );
            expect( item.quality ).toBe( 0 );
        } );

        it( "does decrease quality twice fast", function() {
            var item = new Item( item_name, 5, 3 );
            update_item( item );
            expect( item.quality ).toBe( 1 );
        } );

        it( "very quickly decrease if negative sell-in", function() {
            var item = new Item( item_name, -5, 6 );
            update_item( item );
            expect( item.quality ).toBe( 2 );
        } );

        it( "goes to zero even if tries to go negative", function() {
            var item = new Item( item_name, -5, 1 );
            update_item( item );
            expect( item.quality ).toBe( 0 );
        } );

        it( "decreases sell in by one", function() {
            var item = new Item( item_name, 10, 5 );
            update_item( item );
            expect( item.sell_in ).toBe( 9 );
        } );

    });

});
