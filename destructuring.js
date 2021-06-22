// DESTRUCTURING AN OBJECT ALLOWS YOU TO GRAB THE KEYS OF THE OBJECT WITHOUT HAVING TO REPEATEDLY ACCESS THE NAME OF THE OBJECT

const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  // console.log( player.address.city );
  
  const { name, club, address: { city } } = player;
  
  // console.log(`${name} plays for ${club}`);
  
  console.log(`${name} lives in ${city}`);


  