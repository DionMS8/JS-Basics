// DESTRUCTURING A SINGLE OBJECT ALLOWS YOU TO GRAB THE KEYS OF THE OBJECT 
// WITHOUT HAVING TO REPEATEDLY ACCESS THE NAME OF THE OBJECT

const player = {
  name: "Lionel Messi",
  club: "Paris Saint German (PSG)",
  address: {
  city: "Barcelona"
  }
};
  
  // console.log(player.address.city);
  
  const { name, club, address: { city } } = player;
  
  // console.log(`${name} plays for ${club}`);
  
  console.log(`${name} lives in ${city}`);




