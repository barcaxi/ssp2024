import axios from 'axios';
import * as cheerio from 'cheerio';

let url = 'http://localhost/webScraping/sample.html';

let response = await axios.get(url);
const $ = cheerio.load(response.data);

let $items =  $('ul').children('li');

let items_array = [];
$items.each(function(index, element) { 
    let id = index;
    let item = $(element).text();
    items_array.push({
        id,
        item
    })
}); 
console.log(items_array);