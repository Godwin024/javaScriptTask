function ageCheck(age){
    let age = 0;

    if(age > 1 && age <= 13  ){
    console.log("Child");

}else if(age > 13 && age <=17){
    console.log("Teen");

} else if(age > 17){
    console.log("Adult");

}

    return age;

}
