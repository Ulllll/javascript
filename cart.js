const baseUrl = 'http://85.119.150.33'
        let userId = ''
$.ajax({
    
          url: `${baseUrl}/shop`, 
          contentType: 'json',
          success: function(data) {
            console.log(data)

            userId = data.user_id
             console.log(userId)
          }
        })
function add(product, price, total) {
    $.ajax({
            url: `${baseUrl}/shop?user_id=${userId}&product=${product}&price=${price}`,
            type: 'post',
            contentType: 'json',
            success: function(data) {
              console.log(data)
              $('<div>', {
                class: 'cart-item',
                html: `${product} <span> ${price}</span>`,
                click: function() {
                  const productId = $(this).attr('productId')

                  console.log(productId)
                }
              })
              .attr('productId', data.product_id)
              .appendTo('.cart')
              total.html(parseFloat(total.html()) + parseFloat(price))
            }
})
}
