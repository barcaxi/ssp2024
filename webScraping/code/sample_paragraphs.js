import * as cheerio from 'cheerio';
import axios from 'axios';

let url = 'http://localhost/webScraping/sample.html';
let response = await axios.get(url);

const $ = cheerio.load(response.data);

let $paragraphs = $('p');
$paragraphs.each(function(index, element) { 
    console.log($(element).text())
}) 
// console.log($($paragraphs[0]).text()); 

