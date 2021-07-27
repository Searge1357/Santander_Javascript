const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

  const {facebook : fb, instagram: ig} = person.links.social; 
  /*despues del const se debe poner el nombre de lo que se pide, dos puntos
  y el nombre de la nueva variable

  facebook : fb, pido a facebook y lo pone en la variable fb */

  console.log(fb, ig)