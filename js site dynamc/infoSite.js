fetch('./стиль сайта/XML/contactsINFO.xml')

.then(response => response.text())
.then(xml => {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml , "text/xml");

    const cont = xmlDoc.getElementsByTagName("contacts")[0].childNodes[0].nodeValue;
    const tele = xmlDoc.getElementsByTagName("telegram")[0].childNodes[0].nodeValue;
    const auth = xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue;
    const year = xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue;



    const contP = document.getElementById("p1");
    contP.innerHTML = `${cont}`
    const teleP = document.getElementById("p2");
    teleP.innerHTML = `${tele}`
    const authP = document.getElementById("p3");
    authP.innerHTML = `${auth}`
    const yearP = document.getElementById("p4");
    yearP.innerHTML = `${year}`

})