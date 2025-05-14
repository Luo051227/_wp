import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("test.db");


db.query(`CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  body TEXT
)`);


const data = [
  { title: "aaa", body: "aaaaa" },
  { title: "bbb", body: "bbbbb" },
  { title: "ccc", body: "ccccc" },
];


for (const post of data) {
  db.query("INSERT INTO posts (title, body) VALUES (?, ?)",[post.title, post.body]);
}

for (const [id, title, body] of db.query("SELECT id, title, body FROM posts")) {
    console.log('ID: '+id + ', ' + 'Title: ' + title + ', ' + 'Body: ' + body);
}

db.close();
