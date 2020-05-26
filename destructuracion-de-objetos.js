
let config = {
    name: 'Lionel',
    email: 'Lionel@gmail.com',
    facebook: 'liorock',
    google: 'rockon',
    premium: false
}

let { name, 
      email, 
      facebook, 
      google, 
      premium: dePago,
      sabor = 'latino'
    } = config;

console.log(name, email, facebook, google, dePago, sabor);
