import axios from 'axios';

let response = await axios.get('http://quotes.toscrape.com/');

console.log(response.data);

//console.log(response.status);
//console.log(response.headers);

