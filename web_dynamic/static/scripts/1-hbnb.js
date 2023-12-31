$('document').ready(function () {
  const amenities = {};

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      const id = $(this).data('id');
      const name = $(this).data('name');
      amenities[id] = name;
    } else {
      const id = $(this).data('id');
      delete amenities[id];
    }

    // console.log(amenities);
    if (Object.values(amenities).length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(Object.values(amenities).join(', '));
    }
  });
});
