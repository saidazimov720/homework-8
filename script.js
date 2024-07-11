var command = prompt("Enter your array method:");

var arr = ["Lorem ipsumabo doloribus distinctio perspiciatis a harum, illum enim, id ea! Delectus."];

if (command == "length") {
    arr.length();
}  else if(command == "toString") {
    arr.toString();
    alert(arr);
}
 else if(command == "shift") {
    arr.shift();
    alert(arr);
}
 else if(command == "unshift") {
    arr.unshift();
    alert(arr);
}
else if (command == "splice") {
    var arguments = prompt("Enter the arguments");
    var startsp = parseInt(arguments[0]);
    var delsp = parseInt(arguments[1]);
    arr.splice(startsp, delsp); 
    alert(arr);
} else if (command == "concat") {
    var newValue = prompt("Enter a value to concatenate to the array:");
    var newArr = arr.concat([newValue]); 
    alert(newArr);
} else if(command == "slice"){
    var arguments2 = prompt("Enter the arguments");
    var startsl = parseInt(arguments2[0]);
    var endsl = parseInt(arguments2[1]);
    arr.slice(startsl, endsl);

    if (arguments2 < 2) {
        arr.slice(startsl);
    }
    alert(arr);
} 
else{
    alert("Invalid method");
}