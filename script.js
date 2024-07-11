var command = prompt("Enter your array method:");

var arr = [
    "Oracle",
    "IBM",
    "Microsoft",
    "SLK",
    "Apple",
    "Sony",
    "Meta",
    "Alphabet.Inc",
    "Infinity Ward",
    "Valve",
    "Electronic Arts",
];

if (command == "length") {
    alert(arr.length);
} else if (command == "toString") {
    alert(arr.toString());
} else if (command == "shift") {
    arr.shift();
    alert(arr.toString());
} else if (command == "unshift") {
    var value = prompt("Enter a value to add to the beginning of the array:");
    arr.unshift(value);
    alert(arr.toString());
} else if (command == "splice") {
    var spliceArguments = prompt("Enter the arguments with comma:").split(",");
    var startsp = parseInt(spliceArguments[0]);
    var delsp = parseInt(spliceArguments[1]);
    arr.splice(startsp, delsp);
    alert(arr.toString());
} else if (command == "concat") {
    var newValue = prompt("Enter a value to concatenate to the array:");
    var conArr = arr.concat([newValue]);
    alert(conArr.toString());
} else if (command == "slice") {
    var sliceArguments = prompt("Enter the arguments with comma:").split(",");
    var startsl = parseInt(sliceArguments[0]);
    var endsl = parseInt(sliceArguments[1]);
    var slicedArr = arr.slice(startsl, endsl);
    alert(slicedArr.toString());
} else if (command == "join") {
    var addjoin = prompt("Enter the separator:");
    var joinarr = arr.join(addjoin);
    alert(joinarr);
} else if (command == "pop") {
    var arraypop = arr.pop();
    alert(arraypop);
    alert(arr);
} else if (command == "push") {
    var add = prompt("Enter the argument to add to array:");
    var pushres = arr.push(add);
    alert(arr.toString());
} else {
    alert("Invalid method");
}
