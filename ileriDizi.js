const dizi =[1,2,3,4]

const kareDizisi =[]

dizi.forEach(sayı =>{
    console.log(sayı)
})


dizi.forEach(sayı =>{
    kareDizisi.push(sayı*sayı)
})

console.log(kareDizisi);

//map:yeni bir dizi ortaya çıkartabiliyoruz
// dizideki her bir elemanı 3 ile çarpıp mapDizi isimli diziye ekliyor
//tek satırda yazılmalı.. 
const mapDizi = dizi.map(sayı=>sayı*3)
console.log(mapDizi)

//filter:
//her bir sayı için, sayı büyüktür iki ve filtreliDiziye bunları ekle
const filtreliDizi = dizi.filter(sayı=>sayı>2)
console.log(filtreliDizi)

//reduce:toplama işlemi yapar
const toplam = dizi.reduce((acc,sayı)=>{ //acc başlangıç değeridir .default =0
    return acc+sayı;
})
console.log(toplam);

const topla = dizi.reduce((acc,sayı)=>{  //burda reduce değerini 10 yaptık ve 10 un üstüne toplama işlemi yaptı..
    return acc+sayı;
},10)
console.log(topla);