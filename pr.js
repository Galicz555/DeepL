// 'use strict'

// let lolArray = ['non', 'yes', 'maybe'];
// let sentence = 'mamam non yes lol';

// let something = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (sentence.indexOf(arr[i]) > -1) {
// 			console.log('szuper')
// 		}
// 		return true
// 	}
// }

// console.log(something(lolArray))

// console.log(lolArray.map((elem) => {
// 	if (sentence.indexOf(elem) > -1) {
// 		console.log("szuper")
// 	}
// 	return true
// }))
// console.log(sentence.map((elem,index,arr)=>{if()}))

// let categories = [{
// 	id: '100',
// 	name: 'death'
// }
// 	, {
// 	id: '200',
// 	name: 'star'
// }, {
// 	id: '300',
// 	name: 'jedi'
// }
// ]
// let categoryPath = {
// 	mainCategory: false,
// 	subCategory: false,
// 	leafCategory: false,
// };

// if(categories.length > 0){
// 	categoryPath.mainCategory = categories[0].name;
// }
// if(categories.length > 1){
// 	categoryPath.subCategory = categories[1].name;
// }
// if(categories.length > 2){
// 	categoryPath.leafCategory = categories[2].name;
// }

// const converter = () => {
// 	for (let i = 0; i < categories.length; i++) {
// 		categoryPath[(Object.keys(categoryPath)[i])] = categories[i].name;
// 	}
// }
// converter()

// categories.forEach(({ name }, idx) => {
// 	categoryPath[Object.keys(categoryPath)[idx]] = name;
// });


// console.log(categoryPath)

// const lol = () => {
// 	categories[1].id = 1000;
// }
// lol();
// console.log(categories)

// const horse = {
// 	name: 'Tropher',
// 	size: 'Larger',
// 	skills: ['Jousting', 'racing'],
// 	age: 7
// }

// const { name, size, skills } = horse;

// function horseAge (str, age) {

// 	const ageStr = age > 5 ? 'old' : 'young';
// 	console.log(`${str[0]}`);
// 	return `${str[0]}${ageStr} at ${age} years`;
// }

// const bio2 = horseAge`This horse is ${horse.age}`;
// console.log(bio2);

// const fruits = [
// 	{name:'apple', price: 1},
// 	{name:'orange', price: 2},
// 	{name:'pear', price: 1},
// ];

// const fruitPrices = fruits.reduce(
// 	(a, v) => {
// 		a[v.name] = v.price;
// 		return a;
// 	},
// 	{}
// );

// console.log(fruitPrices)


const tf = require('@tensorflow/tfjs');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');

// Train a simple model:
const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'linear'}));
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);

model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`)
  }
});