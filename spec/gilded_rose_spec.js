// cannot join anymore ?!
describe("Gilded Rose", function () {
    const IRRELEVANT_SELL_IN_DAYS = 14;

    describe("Normal Item", () => {


        it("should decrease the quality of a normal item by 1", () => {
            const item = new Item("Normal Item", IRRELEVANT_SELL_IN_DAYS, 10);

			updateItem(item);

            expect(item.quality).toBe(9);
        });

        it("should decrease the quality of a normal item by 2 when sell_in is <= 0", () => {
            const item = new Item("Normal Item", 0, 10);

			updateItem(item);

            expect(item.quality).toBe(8);
        });

        it("should not decrease the item quality below 0", () => {
            const item = new Item("Normal Item", IRRELEVANT_SELL_IN_DAYS, 0);

			updateItem(item);

            expect(item.quality).toBe(0);
        });
    });

    function updateItem(item) {
		items = [item];
		update_quality();
		return item;
    }

    describe("Aged Brie", () => {
		it("should increase the quality by 1", () => {
			const item = new Item("Aged Brie", IRRELEVANT_SELL_IN_DAYS, 10);

			updateItem(item);

			expect(item.quality).toBe(11);
		});
    });

});