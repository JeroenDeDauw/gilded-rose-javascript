describe("Gilded Rose", function() {

    it("should do something", function() {

        update_quality();
    });

    describe("normal item", function() {

        it( "should have a sell_in and quality value", function() {
            var item = new Item( 'test', 3, 6 );
            update_quality_of_item( item );

            expect( typeof item.sell_in ).toBe( 'number' );
            expect( typeof item.quality ).toBe( 'number' );
        } );

        it( "should have its quality decreased by one", function() {
            var item = new Item( 'test', 3, 6 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 5 );
        } );

        it( "should never have a negative quality value", function() {
            var item = new Item( 'test', 3, 0 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 0 );
        } );

        it( "should never have a negative quality value even when quality would decrease by more than one", function() {
            var item = new Item( 'test', 0, 1 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 0 );
        } );

        it( "should have its quality decreased by two when sell in is zero or less", function() {
            var item = new Item( 'test', 0, 6 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 4 );
        } );

    } );

	describe("Increase cases", function() {

		 it( "should never have quality value more than 50", function() {
            var item = new Item( 'Aged Brie', 7, 50 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 50 );
        } );

		describe("Aged Brie", function() {

			it( "should have its quality increased when its named Aged Brie and gets older", function() {
	            var item = new Item( 'Aged Brie', 7, 10 );
	            update_quality_of_item( item );

	            expect( item.sell_in ).toBe( 6 );
	            expect( item.quality ).toBe( 11 );
	        } );
        } );
	} );

    describe("Legendary items", function() {
        it( "should not have its quality or sell-in altered if it's name is Sulfuras", function() {
            var item = new Item( 'Sulfuras, Hand of Ragnaros', 0, 42 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 42 );
            expect( item.sell_in ).toBe( 0 );
        } );

        it( "should degrade twice as fast as normal items if it's name is Conjured", function() {
        	var item = new Item( 'Conjured Mana Cake', 0, 42 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 40 );
        } );
    } );

    describe("Backstage passes", function() {
        it( "should have their quality increased by one when sell in more than 10", function() {
            var item = new Item( 'Backstage passes to a TAFKAL80ETC concert', 11, 42 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 43 );
        } );

        it( "should have their quality increased by 2 when sell in between 10 and 5", function() {
            var item = new Item( 'Backstage passes to a TAFKAL80ETC concert', 6, 42 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 44 );
        } );

        it( "should have their quality increased by 3 when sell in between 5 and 0", function() {
            var item = new Item( 'Backstage passes to a TAFKAL80ETC concert', 1, 42 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 45 );
        } );

        it( "should have their quality go to null when sell in zero or lower", function() {
            var item = new Item( 'Backstage passes to a TAFKAL80ETC concert', 0, 42 );
            update_quality_of_item( item );

            expect( item.quality ).toBe( 0 );
        } );
    } );


});
