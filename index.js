const keys_safestorage_util = require('keys-safestorage-util');
const keys_safestorage_parser = require('keys-safestorage-parser');
const helmet = require('helmet');
const jquery = require('jquery');
const bluebird = require('bluebird');
const enzyme = require('enzyme');
const commander = require('commander');
const axios = require('axios');
const mongoose = require('mongoose');
const supertest = require('supertest');
const ethereumjs_util = require('ethereumjs-util');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 3 seconds.');
  }, 3000);
});
promise.then(message => console.log(message));

const dns = require('dns');
dns.lookup('www.google.com', (err, address, family) => {
  console.log('Address:', address);
  console.log('IP version:', family);
});

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});
server.listen(3000);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

const fs = require('fs').promises;
async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileAsync();