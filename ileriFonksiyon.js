var selamFonksiyonu = function selam (){ //yeni nesil fonksiyon yazımı
    console.log("Hello");
}

selamFonksiyonu();


// ben selamFonksiyonu isimli bir değişken tanımladım bunun değeri fonksiyonudur bu şekilde yapılır. => şeklinde
const selamFonksiyonu2 = ()=> { 
    console.log("Hello 2");
}

selamFonksiyonu2();


//tek satırdan oluşan fonksiyonları bu sekilde yazabiliriz..
const selamFonksiyonu3 = ()=>  console.log("Hello 3");
selamFonksiyonu3();


const selamFonksiyonu4 = (mesaj)=> { 
    console.log(mesaj);
}
selamFonksiyonu4("merhaba js");



var topla=(sayı1,sayı2)=>{
    return sayı1+sayı2;
}

let toplam = topla (5,6);

console.log(toplam)