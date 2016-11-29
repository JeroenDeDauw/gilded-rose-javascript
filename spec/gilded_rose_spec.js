describe("Gilded Rose", function() {

  it("non-sulfuras should have its sell-in decreased by one", function() {
    var item = {sell_in: 2, name: "something else", quality: 5};
    update_item(item);
    expect(item.sell_in).toBe(1);
  });

  it("sulfuras should not have sell-in decreased", function() {
    var item = {sell_in: 2, name: "Sulfuras, Hand of Ragnaros", quality: 5};
    update_item(item);
    expect(item.sell_in).toBe(2);
  });

});
