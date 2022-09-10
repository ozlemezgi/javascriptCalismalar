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
alert(classElements.length); 


//querySelectorAll ; Ayni classı kullanan bir kaç farklı p,h,intro vs tipin arasında seçim yapmamızı gerektiren durumlarda kullanılır. 
var queryElements = document.querySelectorAll("p.intro1"); 
alert(queryElements.length);

var nameElements =document.getElementsByName("Name");
alert(nameElements[0].value);


//addEventListener event eklemeye yarar "mouseover -üzerine gelindiğinde","click -tıklandığında" gibi
var ezgi = document.getElementById("Ezgi").addEventListener("mouseover",changeCollor);

function changeCollor(){
    document.getElementById("div1").style.color="blue";
    var nameElements =document.getElementsByName("Name");
    nameElements[0].value="leo"

}


//ağaç yapısında bir şeye ulaşmak..
//<p class="intro1" id="tree">tree value</p> burada p'nin child nodu tree 
var node1 = document.getElementById("tree");
alert(node1.childNodes[0].nodeValue); //burada p tag'inin bir alt nodu olan tree değeri adlı value'yu okuduk




//ağaç yapısına bir şeyler ekleme ..
var heading = document.createElement("h2"); //createElement element oluşturmaya yarar
var node = document.createTextNode("Hello JavaScript") //oluşturulan h2 nin alt noduna bir bir şeyler (text )ekledik
heading.appendChild(node) //oluşturduğumuz nodu h2 nin bir alt noduna ekledik

//ekranda gözüken bir şey yok çünkü dökümanın neresine eklediğimiz belli değil..
var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(heading,p2)//heading'i önüne ekledik neyin önüne p2 nin önüne 


//herhangi bir şeyi kaldırmak istiyoruz.(p2)
div1.removeChild(p2);

//yerine koyma burda başlığı p1 in yerine koyduk
var p1 =document.getElementById("p1")
div1.replaceChild(heading,p1)
