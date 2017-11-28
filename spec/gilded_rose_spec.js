describe("Gilded Rose", function() {

  it("should not cause a fatal error", function() {
    update_quality();
  });

  it("should decrease normal item quality by one", function() {
    let item = new Item('Normal item', 10, 20);

    updateItems([item]);

    expect(item.quality).toBe(19);
  });

  it("should decrease normal item quality by two when sell in is less than 0", function() {
    let item = new Item('Normal item', -1, 20);

    updateItems([item]);

    expect(item.quality).toBe(18);
  });

  it("the quality of normal item should not be negative", function() {
    let item = new Item('Normal item', 10, -1);

    updateItems([item]);

    expect(item.quality).toBeGreaterThan(-1);
  });

});
