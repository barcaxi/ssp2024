import axios from "axios";
import * as cheerio from "cheerio";
import csv_writer from "csv-writer";

let url = "http://localhost/webScraping/sample.html";

let response = await axios.get(url);
const $ = cheerio.load(response.data);

let $items = $("ul").children("li");

let items_array = [];
$items.each(function (index, element) {
  let id = index;
  let item = $(element).text();
  items_array.push({ id, item });
});

const csvFile = "./items.csv";
const csvWriter = csv_writer.createObjectCsvWriter({
  path: csvFile,
  header: [
    { id: "id", title: "ID" },
    { id: "item", title: "ITEM" },
  ],
});

csvWriter.writeRecords(items_array).then(() => {
  console.log("CSV Created.");
});
