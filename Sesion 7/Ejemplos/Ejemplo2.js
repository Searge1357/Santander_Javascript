//No copié todo el ejemplo, pero quise anotar algo en esta parte
function addItemToCart(cart, item, quantity) {
    const newCart = cart.map(function(element) {
      return element;
//Element es como provisional, cada elemento de cart entra en la función de mapeo,
//y se le denomina element, y lo regresa, esto lo regresa directo al nuevo objeto newCart
//ver mas ejemplos de este tipo de nomenclatura para entender a lo que me refiero 
//Es decir cada elemento del objeto cart entrará a la función y tomará el nombre de element
    });
  
    newCart.push({
      item: item,
      quantity: quantity
    })
  
    return newCart;
  }