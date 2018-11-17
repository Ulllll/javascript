var product_name
var price_product
var total = $('#total')
$('.img_text').draggable({
    cursor: 'pointer',
    helper: 'clone',
    revert: true
})
$('.cart').droppable({
    over: function() {
          $(this).css('background', 'antiquewhite')
    },
    out: function() {
          $(this).css('background', 'bisque')
        },
    drop: function(e, ui) {
        price_product = $(ui.draggable).find("span").text()
        product_name = $(ui.draggable).find("h4").text()
        $(this).css('background', 'white')
        add(product_name, price_product, total)
        }
})