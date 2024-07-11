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
    var start = prompt("Enter the start index for splice:");
    var deleteCount = prompt("Enter the number of elements to remove:");
    arr.splice(start, deleteCount); 
    alert(arr);
} else if(command == concat()) {
    arr.concat(arr);
    alert(arr);
}