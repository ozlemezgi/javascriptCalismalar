// document.getElementById("bio").innerHTML="Ezgi Sari : 1998"
//innerHTML p nin İÇİ yani metin yazılan yer.

var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");
mesaj.innerHTML = intro1.innerHTML;

var allLists = document.getElementsByTagName("ul");  //ul tagine ulaştım
var cities = allLists[0] // hangi ul olduğunu belirtiyoruz.tüm listelerin 0. sı
allElements = cities.getElementsByTagName("li");  // ul'nin altındaki li lere ulaştık
for (i = 0; i < allElements.length; i++) {   
    alert(allElements[i].innerHTML);    //innerHTML li nin içini okumamızı sağlar.
}

var classElements = document.getElementsByClassName("intro1");

alert(classElements[1].innerHTML);  //içeriye 0 yada 1  dememizin sebebi intro1 classını kullanan ilk tage ulaşmak istememizden dolayı
