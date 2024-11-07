import * as cheerio from 'cheerio';
import axios from 'axios';

let url = 'http://localhost/webScraping/sample.html';
let response = await axios.get(url);

const $ = cheerio.load(response.data);

let $parent =  $('li').parent();

console.log($parent.html());
console.log($parent.attr("id"));
