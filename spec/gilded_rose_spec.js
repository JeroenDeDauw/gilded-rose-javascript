describe("Gilded Rose", function() {

  it("should decrease the value of the sell_in field of each item as day ends", function() {

    var testItems = [];
    testItems.push(new Item("Test Item", 10, 5));

    var originalItems = items;
    items = testItems;

    update_quality();
    expect(items[0].sell_in).toBe(9);
  });

});
