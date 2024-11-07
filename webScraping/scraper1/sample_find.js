import * as cheerio from 'cheerio';
import axios from 'axios';

let url = 'http://localhost/webScraping/sample.html';
let response = await axios.get(url);

const $ = cheerio.load(response.data);

let $frameworks =  $('#frameworksAndTechnologies').find('.framework');

$frameworks.each(function(index, element) { 
    console.log($(element).text())
}) 
