import * as cheerio from 'cheerio';
import axios from 'axios';

let url = 'http://localhost/webScraping/sample.html';
let response = await axios.get(url);

const $ = cheerio.load(response.data);

let $nextLI =  $('li:first').next();
let $firstLI =  $('li:eq(1)').prev();

console.log($nextLI.text());
console.log($firstLI.text());
