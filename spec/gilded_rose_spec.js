describe("Gilded Rose", function() {

  it("should do something", function() {
    update_quality();
    console.log(items)
    expect(items[0].quality).toBe(19);
    expect(items[0].sell_in).toBe(9);

    expect(items[1].quality).toBe(1);
    expect(items[1].sell_in).toBe(1);
  });

});
