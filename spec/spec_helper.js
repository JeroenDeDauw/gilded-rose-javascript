var when = function(description, callback) {
  describe('when '.concat(description), callback);
};

function check_quality(item, expected_quality) {
    update_quality_of_provided_items([item]);
    expect(item.quality).toBe(expected_quality);
}

function check_sell_in(item, expected_sell_in) {
    update_quality_of_provided_items([item]);
    expect(item.sell_in).toBe(expected_sell_in);
}