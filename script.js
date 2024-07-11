var command = prompt("Enter your array method:");

var arr = ["Lorem ipsumabo doloribus distinctio perspiciatis a harum, illum enim, id ea! Delectus."];

if (command == "length") {
    arr.length();
}  else if(command == toString()) {
    arr.toString();
    alert(arr);
}
 else if(command == shift()) {
    arr.shift();
    alert(arr);
}
 else if(command == unshift()) {
    arr.unshift();
    alert(arr);
}
 else if(command == splice()) {
    var splicecom = prompt("Enter the values for splice method:");
    arr.splice(splicecom);
    alert(arr);
} else if(command == concat()) {
    arr.concat(arr);
    alert(arr);
}