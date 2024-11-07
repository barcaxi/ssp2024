import * as cheerio from 'cheerio';
import axios from 'axios';


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// follow the tutorial at https://cheerio.js.org/docs/intro

// https://www.youtube.com/watch?v=-3lqUHeZs_0

//https://www.youtube.com/watch?v=4ty0VzIagW4


let url = 'http://localhost/webScraping/sample.html';
// let url = 'http://quotes.toscrape.com/';


let response = await axios.get(url);
// console.log(response.data);

// console.log(response.status);
// console.log(response.headers);

const $ = cheerio.load(response.data);
// console.log($.html());

// let $frameworks = $('[class=framework]');
let $paragraphs = $('p');


// $frameworks.each(function(index, element) { 
//     console.log($(element).text())
// }) 

// $paragraphs.each(function(index, element) { 
    console.log($($paragraphs[0]).text())
// }) 


// console.log($frameworks.text());



// console.log($('span.text:first').text());
// $('span.text').each((index, element) => { 
//     console.log($(element).text())
// }) 

// console.log($('h1').text());

// axios.g
// http://quotes.toscrape.com/


//import * as fs from 'fs';
// import * as http from 'http';

// const buffer = fs.readFileSync('document.html');
// const $ = cheerio.load(buffer);
// console.log($.html());

// let HTML = "";

// const request = http.get(
//     "http://quotes.toscrape.com/",
//     function (response) {
//     //   response.pipe(HTML);
//         console.log(response.pipe(HTML,))
//         // const $ = cheerio.load(response);
//         // console.log($.html());
//     }
//   );



// import * as request from 'request';



// request('https://news.ycombinator.com', function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//         console.log(html);
//     }
// });


// const $ = await cheerio.

// // return a Cheerio object $
// const $ = cheerio.load('<h1 class="title">Hello world</h1>');

// console.log($.html());

// console.log($('h1').text());
// console.log($('h1.title').text());


// $('h1.title').text('Hello there!');
// console.log($('h1').text());


// 