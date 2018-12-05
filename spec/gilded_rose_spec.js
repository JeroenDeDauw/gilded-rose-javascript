describe("Gilded Rose", function() {

  it("should do something", function() {
    var item = getConjuredManaItem();

    update_quality();
    expect(item.sell_in).toBe(2);
    expect(item.quality).toBe(4);

    update_quality();
    expect(item.sell_in).toBe(1);
    expect(item.quality).toBe(2);

    update_quality();
    expect(item.sell_in).toBe(0);
    expect(item.quality).toBe(0);

    update_quality();
    expect(item.sell_in).toBe(0);
    expect(item.quality).toBe(0);
  });

  function getConjuredManaItem() {
    return items[5];
  }

  it("...", function() {
      var item = new Item('Conjured Mana Cake', 3, 10);

      update_quality_conjured(item);

      // disconnected again. can you see this?
  });

});
