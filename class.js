class Personel {

    constructor(ad,soyad){
        this.ad = ad;
        this.soyad= soyad;

    }    
    kaydet(){ //bu bir fonksiyondur..
        console.log("Kaydedildi" +this.ad);
        console.log('Kaydedildi :${this.ad}'); //bu başka bir yazım şekli ama klavyede ters virgülü bulamadım...

    }
}



//yukarıdaki class bir tanımdır bu tanımdan bir nesne tanımlamamız gerekli
const personel1 = new Personel("özlem","sarı")



personel1.kaydet();
