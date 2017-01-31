describe("Gilded Rose", function() {

  items[]

  it("passes one update", function() {
      expect(items[0].sell_in).toBe(10);
      update_quality();
      expect(items[0].sell_in).toBe(9);
  });

  it("passes more updates", function() {
      expect(items[0].sell_in).toBe(10);
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      expect(items[0].sell_in).toBe(3);
  });

});
