describe("Gilded Rose", function() {

  it("should do something", function() {
    update_quality();
  });

  it("should have 6 items in the global", function() {
    expect(items.length).toBe(6);
  });

  it("should decrease sell_in by 1", function() {
    var item = new Item('test item', 10, 20);
    item.update_quality_and_sell_in();
    expect(item.sell_in).toBe(9);
  });

  it("should decrease quality by two", function() {
    var item = new Item('Conjured Mana Cake', 10, 20);
    item.update_quality_and_sell_in();
    expect(item.quality).toBe(18);
  });

});
