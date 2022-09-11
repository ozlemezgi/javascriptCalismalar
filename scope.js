var num = 10;
var city= "ankara"

num= 11;
city ="Nicosia"

var city ="İzmir"

//let birden fazla aynı isimde variable tanımlamamızı sağlar.
let isim="Ezgi"
isim = "Limon"
//let isim="Volki" //bu hata verir.ERROR

function mesajVer(){
    var adSoyad = "Ezgi SARI"
    console.log(city);
    console.log(adSoyad);
}

console.log(num);
console.log(city);
console.log(isim);


mesajVer();
//console.log(adSoyad); //fonksiyon içinde tanımladığımız için dışarıdan isime ulaşamayız.ERROR

for (i=1;i<10;i++){  //burda i yi let şeklinde tanımlarsan dışarıdan i ye erişilemez ve aşağıdaki çıktının sonucu ERROR olur

}
console.log(i); //burda çıktı 10 olur 

const surname = "SARI" //const sabit demek değişmeyecek veriler için kullanılır.
//surname ="AKTAŞ" //ERROR verir
console.log(surname)

const sehirler = ["Ankara","İstanbul"]
sehirler.push("İzmir"); //burda hata vermez ve array'e izmiri ekler. 
//diziler ve nesneler referans tiptir..
sehirler =["Bursa","Magusa"]//ERROR verir.
console.log(sehirler)
