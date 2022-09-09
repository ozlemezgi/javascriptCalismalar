console.log(1);
console.log(2);
console.log(3);


for (i=1;i<=6;i++){
    console.log(i)
}
console.log("bitti")

for (i=1;i<8;i=i+2){
    console.log(i)
}

var city =["ankara","istanbul","lefkoşa","izmir"]

for(i=0;i<city.length;i=i+1){
    console.log(city[i]) 
}

console.log(city[1])


var i =1;
while(i<8){
    console.log(i);
    i++;
}

var i=1;
do{
    console.log(i)
    i++;
}while(i<5){
   
}

//dizileri gezmeye yarar...
city.forEach(function(i){
    console.log(i)
})



