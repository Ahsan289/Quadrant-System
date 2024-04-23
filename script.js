//Question 1

//printing a even number and odd numbers
// for (i=0; i<=100; i++){
//     if (i%2===0) {
//         console.log(i , "even number");
//     }
//     else if (i%2!==0){
//     console.log(i , "odd number");
//     }
// }


//quadrant graph
document.write("<h1>Quadrant System</h1>")

let n1 = prompt("Enter Number : ");
let n2 = prompt("Enter Number : ");

if (n1 > 0 && n2 > 0) {
    console.log("1st Quadrant" , "\n" , n1 , n2);
    document.write("1st Quadrant : " , "(" , n1 , "," , n2 , ")")
}else if (n1<0 && n2 > 0){
    console.log("2nd Quadrant" , "\n" , n1 , n2);
    document.write("2nd Quadrant : " , "(" , n1 , "," , n2 , ")")

}else if (n1<0 && n2<0) {
    console.log("3rd Quadrant" , "\n" , n1 , n2);
    document.write("3rd Quadrant : " , "(" , n1 , "," , n2 , ")")
}
else if (n1>0 && n2<0){
    console.log("4th Quadrant" , "\n" , n1 , n2);
    document.write("4th Quadrant : " , "(" , n1 , "," , n2 , ")")
}
else{
    console.log("Origin" , "\n" , n1 , n2);
    document.write("Origin : " , "(" , n1 , "," , n2 , ")")
}