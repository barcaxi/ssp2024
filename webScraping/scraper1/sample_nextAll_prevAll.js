import * as cheerio from 'cheerio';
import axios from 'axios';

let url = 'http://localhost/webScraping/sample.html';
let response = await axios.get(url);

const $ = cheerio.load(response.data);

let $nextLIs =  $('li:first').nextAll();
let $prevPs =  $('p:last').prevAll();

$nextLIs.each(function(index, element){
    console.log($(element).text());
})

$prevPs.each(function(index, element){
    console.log(index, $(element).text());
})
