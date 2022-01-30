var bottleColor = 'yellow';
var watterQuantity = 1;
var isFull = false;

//array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('logens'); // -1
items.push('envelape');
items.push('watch');

items.pop();

//conditionals
if (items.length >= 4) {
    console.log('You have Too many stuff on your desk.');
}
else if (items.length == 4) {
    console.log('You only have one hali items');
}
else {
    console.log('WoW ! you have a celen desk');
}
