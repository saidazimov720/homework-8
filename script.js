var command = prompt("Enter your array method:");

var arr = ["Lorem ipsumabo doloribus distinctio perspiciatis a harum, illum enim, id ea! Delectus."];

if (command == "length") {
    alert(arr.length); 
} else if (command == "toString") {
    alert(arr.toString()); 
} else if (command == "shift") {
    arr.shift(); 
    alert(arr);
} else if (command == "unshift") {
    var value = prompt("Enter a value to add to the beginning of the array:");
    arr.unshift(value); 
    alert(arr);
} else if (command == "splice") {
    var arguments = prompt("Enter the argumnets with comma:").split(',');
    var startsp = parseInt(arguments[0]);
    var delsp = parseInt(arguments[1]);
    arr.splice(startsp, delsp); 
    alert(arr);
} else if (command == "concat") {
    var newValue = prompt("Enter a value to concatenate to the array:");
    var conArr = arr.concat([newValue]); 
    alert(conArr);
} else if (command == "slice") {
    var arguments2 = prompt("Enter the arguments with comma:").split(',');
    var startsl = parseInt(arguments2[0]);
    var endsl = parseInt(arguments2[1]);
    var slicedArr = arr.slice(startsl, endsl); 
    alert(slicedArr);
} else if (command == "join") {
    var addjoin = prompt("Enter the separator:");
    var joinarr = arr.join(addjoin); 
    alert(joinarr);
}

else {
    alert("Invalid method");
}
