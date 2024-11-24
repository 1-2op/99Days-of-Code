const month = 4 // "march"

switch (month) {
    case 1:// jan
        //console.log("january");
        break;
    case 2:// feb
        //console.log("feb");
        break;


        case 3:
            //console.log("march");
            break;
            case 4:
                //console.log("april");
                break;
            default:
               // console.log("default case match");
                break;
}

const userEmail = []

if(userEmail){
    console.log("got user email");
}
else {
    console.log("don't have user email");

}
 //falsy values

 //false, 0, -0, BigInt on,"" ,null, undefined, NaN

 //truthy value

 // "0", 'false', " ",[],{}, function(){}, 

 //if(userEmail.length === 0){
    //console.log("array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}