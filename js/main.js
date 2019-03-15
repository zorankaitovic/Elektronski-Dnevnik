var ucenici = {};
ucenici[0] = {
    ime: "Marko",
    prezime: "Marković",
    ocene: [[3, 4, 5, 2], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 1],
    vladanje: 5,
    rbroj: 0,
}
ucenici[1] = {
    ime: "Janko",
    prezime: "Janković",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: 5,
    rbroj: 1,
}
ucenici[2] = {
    ime: "Petar",
    prezime: "Petrović",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 15],
    vladanje: 5,
    rbroj: 2,
}
ucenici[3] = {
    ime: "Ivana",
    prezime: "Ivanović",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: 5,
    rbroj: 3,
}
ucenici[4] = {
    ime: "Jovana",
    prezime: "Jovanović",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: 5,
    rbroj: 4,
}
ucenici[5] = {
    ime: "Boško",
    prezime: "Bošković",
    ocene: [[3, 4, 5, 2], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: 5,
    rbroj: 5,
}
profesor = {
    userName: "profesor",
    password: "11111",
}
var korisnicko = ["mm001", "jj002", "pp003", "ii004", "jj005", "bb006"]
var lozinka = ["00001", "00002", "00003", "00004", "00005", "00006"]
var predmeti = ["Srpski jezik i književnost", "Engleski jezik", "Francuski jezik", "Ustav i prava građana",
    "Sociologija", "Filozofija", "Biologija", "Matematika", "Fizika", "Hemija", "Računarstvo i informatika",
    "Fizičko vaspitanje"];
var ukor = ["Opomena odeljenjskog starešine", "Ukor odeljenjskog starešine", "Ukor Odeljenjskog veća",
    "Ukor direktora škole", "Ukor Nastavničkog veća"];
var izostanci = ["Opravdani izostanci", "Neopravdani izostanci"];
var meseci = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
var dani = ["PON", "UTO", "SRE", "ČET", "PET", "SUB", "NED"];
var brojDana = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var tultip = [
    ["10.10. Pismeni zadatak", "22.11. Kontrolni zadatak", "mjk", "kkk"],
    ["19.10. Kontrolni zadatak", "7.12. Pismeni zadatak", "mjk", "kkk"],
    ["11.12. Kontrolni zadatak", "25.12. Pismeni zadatak", "mjk", "kkk"],
    ["2.11. Kontrolni zadatak", "bcd", "mjk", "kkk"],
    ["12.10. Kontrolni zadatak", "21.11. Kontrolni zadatak", "mjk", "kkk"],
    ["8.10. Kontrolni zadatak", "bcd", "mjk", "kkk"],
    ["19.11. Kontrolni zadatak", "bcd", "mjk", "kkk"],
    ["4.10. Kontrolni zadatak", "1.11. Pismeni zadatak", "6.12. Kontrolni zadatak", "10.01. Pismeni zadatak"],
    ["24.09. Kontrolni zadatak", "5.12. Pismeni test", "mjk", "kkk"],
    ["24.10. Pismeni test", "9.1. Pismeni test", "mjk", "kkk"],
    ["11.12. Praktičan rad", "bcd", "mjk", "kkk"],
    ["abc", "bcd", "mjk", "kkk"]];
var noveOcene = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
var noviIzostanci = ["-", "-"];
var novoVladanje = "-";
// provera korisnickog imena i lozinke za profesora
function provera1() {
    return proveraProfesora() && proveraLozinkeProf();
}
function proveraProfesora() {
    var text = document.getElementById("korisnickoProf").value.toLowerCase();
    if (text == profesor.userName) {
        return true;
    }
    else {
        greska.innerHTML = "Pogrešno korisničko ime";
        return false;
    }
}
function proveraLozinkeProf() {
    var lozProf = document.getElementById("lozinkaProf").value;
    if (lozProf != profesor.password) {
        greska.innerHTML = "Pogrešna lozinka";
        return false;
    }
    return true;
}
// provera korisnickog imena i lozinke za roditelje
function provera2() {
    return proveraImena() && proveraLozinke();
}
function proveraImena() {
    var text = document.getElementById("korisnickoIme").value.toLowerCase();
    var i = 0;
    do {
        if (text == korisnicko[i]) {
            localStorage.setItem("ucenik", i);
            return true;
        }
        i++;
    } while (i < korisnicko.length)
    greska.innerHTML = "Pogrešno korisničko ime";
    return false;
}
function proveraLozinke() {
    var loz = document.getElementById("lozinka").value;
    var n = localStorage.getItem("ucenik");
    if (loz != lozinka[n]) {
        greska.innerHTML = "Pogrešna lozinka";
        return false;
    }
    return true;
}
var niz = [];
localStorage.setItem("ucenici", JSON.stringify(ucenici));
var obj = JSON.parse(localStorage.getItem("ucenici"));
var brojac = korisnicko.length;
function redosled() {
    for (i = 0; i < brojac; i++) {
        niz[i] = obj[i].prezime + " " + obj[i].ime;
    }
    var obj1 = JSON.parse(localStorage.getItem("ucenik"));
    if (obj1 != undefined) {
        niz.push(obj1.prezime + " " + obj1.ime);
    }
    niz = niz.sort();
    spisak();
    return;
}
function spisak() {
    var lista = document.getElementById("lista");
    var ul = document.createElement("ul");
    lista.appendChild(ul);
    for (i = 0; i < niz.length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        var button = document.createElement("button");
        button.textContent = niz[i];
        li.appendChild(button);
        button.setAttribute("onClick", 'location.href="strana3.html"');
        button.setAttribute("class", "btn btn-outline-primary");
        button.setAttribute("id", "d" + i);
    }
    return;
}
function noviUcenik() {
    var ime = document.getElementById("imeNovi").value;
    var prezime = document.getElementById("prezimeNovi").value;
    var ucenik = {};
    var korisnickoNovo = "";
    ucenik.ime = ime;
    ucenik.prezime = prezime;
    ucenik.ocene = noveOcene;
    ucenik.brojIzostanaka = noviIzostanci;
    ucenik.vladanje = novoVladanje;
    ucenik.rbroj = brojac + 1;
    ucenici[brojac] = novi;
    localStorage.setItem("ucenik", JSON.stringify(ucenik));
    localStorage.setItem("ucenici", JSON.stringify(ucenici[brojac]));
    korisnickoNovo = (ime.slice(0, 1) + prezime.slice(0, 1) + "00" + (brojac + 1)).toLowerCase();
    if (korisnickoNovo.length == 5) {
        korisnicko.push(korisnickoNovo);
        localStorage.setItem("korisnicko", korisnickoNovo);
    }
    return;
}
function kalendarMesec() {
    var datum = new Date();
    var prviDan = 5;
    var tekuciMesec = document.getElementById("mesec");
    var ul = document.getElementById("sedmica");
    tekuciMesec.textContent = meseci[datum.getMonth()].toUpperCase() + " " + datum.getFullYear();
    for (i = 0; i < 7; i++) {
        var li = document.createElement("li");
        li.textContent = dani[i];
        ul.appendChild(li);
    }
    var tekuciDan = datum.getDay();
    var tekuciDatum = datum.getDate();
    var ul = document.getElementById("dani");
    var prethodni = datum.getMonth() - 1;
    for (i = prviDan - 1; i > 0; i--) {
        var li = document.createElement("li");
        li.textContent = brojDana[prethodni] - i + 1;
        ul.appendChild(li);
    }
    for (i = prviDan; i < brojDana[datum.getMonth()] + prviDan; i++) {
        var li = document.createElement("li");
        li.textContent = i - 4;
        if (tekuciDatum == (i - 4)) {
            li.style.backgroundColor = "blue";
            li.style.color = "black";
        }
        if (i - 4 < tekuciDatum) {
            li.style.backgroundColor = "gray";
            li.style.color = "black";
        }
        if (i - 4 > tekuciDatum) {
            for (j = 0; j < 5; j++) {
                if ((i - 4 == j * 7 + 2) || (i - 4 == j * 7 + 3)) {
                    li.style.backgroundColor = "red";
                    li.style.color = "black";
                }
            }
        }
        ul.appendChild(li);
    }
    return;
}


var n2 = localStorage.getItem("ucenik");
//d e o  za r o d i t e lj e
//ispisivanje imena učenika
function naslov(n2) {
    var naslov = document.getElementById("naslov2");
    naslov.textContent = ucenici[n2].ime + " " + ucenici[n2].prezime;
    spisakPredmeta(n2);
    return;
}
//spisak predmeta i ocene
function spisakPredmeta(n2) {
    var prosek;
    var table = document.getElementById("tabela2");
    for (i = 0; i < 12; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < 1; j++) {
            var td = document.createElement("td");
            td.textContent = predmeti[i];
            tr.appendChild(td);
            var ocena = 0;
            for (k = 0; k < 4; k++) {
                var td = document.createElement("td");
                td.textContent = ucenici[n2].ocene[j][k];
                ocena += ucenici[n2].ocene[i][k];
                td.setAttribute("title", tultip[j][k])
                tr.appendChild(td);
            }
            prosek = (ocena / 4).toFixed(2);
            var td = document.createElement("td");
            td.textContent = "Prosek: " + prosek;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return;
}
//vladanje
function vladanje(n2) {
    var table = document.getElementById("tabela21");
    ukori(n2);
    let uk = localStorage.getItem("ukor");
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td = document.createElement("td");
    td.textContent = ("Vladanje");
    tr.appendChild(td);
    var td = document.createElement("td");
    td.textContent = ucenici[n2].vladanje;
    tr.appendChild(td);
    for (i = 0; i < 2; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < 1; j++) {
            var td = document.createElement("td");
            td.textContent = izostanci[i];
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent = ucenici[n2].brojIzostanaka[i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    if (ucenici[n2].brojIzostanaka[1] < 5) {
        return;
    } else {
        var vladanje = document.getElementById("vladanje2");
        var div = document.createElement("div");
        div.textContent = "Zbog " + ucenici[n2].brojIzostanaka[1] + " neopravdanih izostanaka, učenik dobija kaznu: " + ukor[uk];
        div.style.backgroundColor = "red";
        div.style.padding = "10px";
        div.style.width = "300px";
        div.style.color = "black";
        div.style.marginTop = "25px";
        div.style.fontWeight = "bold";
        vladanje.appendChild(div);
        return;
    }
}
function ukori(n2) {
    var ni = ucenici[n2].brojIzostanaka[1];
    let uk = -1;
    if (ni > 4 && ni < 10) {
        uk = 0;
    }
    if (ni > 9 && ni < 16) {
        uk = 1;
    }
    if (ni > 15 && ni < 22) {
        uk = 2
    }
    if (ni > 21 && ni < 25) {
        uk = 3;
    }
    if (ni > 25) {
        uk = 4;
    }
    localStorage.setItem("ukor", uk);
    return;
}
function resetuj() {
    document.getElementById("forma2").reset();
    return;
}
function sacuvajObavestenja() {
    var obavestenje = [];
    var vrednosti = document.querySelectorAll("value");
    for (i = 0; i < 6; i++) {
        obavestenje[i] = vrednosti[i];
    }
    console.log(vrednosti);
    return;
}

var n3 = localStorage.getItem("ucenik3");
function naslov3(n3) {
    var naslov = document.getElementById("naslov3");
    naslov.textContent = ucenici[n3].ime + " " + ucenici[n3].prezime;
    ispis(n3)
    return;
}
function ispis(n3) {
    var occena = localStorage.getItem("novaOcena0");
    var td1 = document.getElementsByClassName("td3");
    var td2 = document.getElementsByClassName("td31");
    var td3 = document.getElementsByClassName("td32");
    var td4 = document.getElementsByClassName("td33");
    var td5 = document.getElementsByClassName("td34");
    for (i = 0; i < 12; i++) {
        td1[i].textContent = ucenici[n3].ocene[i][0];
        td2[i].textContent = ucenici[n3].ocene[i][1];
        td3[i].textContent = ucenici[n3].ocene[i][2];
        td4[i].textContent = ucenici[n3].ocene[i][3];
        td1[i].setAttribute("title", tultip[i][0]);
        td2[i].setAttribute("title", tultip[i][1]);
        td3[i].setAttribute("title", tultip[i][2]);
        td4[i].setAttribute("title", tultip[i][3]);
    }
    if ((occena != null) && (n3 == ucenici[n3].rbroj)) {
        td5[0].textContent = occena;
        td5[0].setAttribute("title", localStorage.getItem("noviKom0"));
    }
    return;
}
function vladanje3(n3) {
    ukori(n3);
    var uk = localStorage.getItem("ukor");
    var td1 = document.getElementsByClassName("v31");
    var td2 = document.getElementsByClassName("v32");
    for (i = 0; i < 2; i++) {
        td1[0].textContent = ("Vladanje");
        td1[1].textContent = izostanci[0];
        td1[2].textContent = izostanci[1];
        td2[0].textContent = ucenici[n3].vladanje; 
        td2[1].textContent = ucenici[n3].brojIzostanaka[0]; 
        td2[2].textContent = ucenici[n3].brojIzostanaka[1]; 
    }
    if (ucenici[n3].brojIzostanaka[1] < 5) {
        return;
    } else {
        var vladanje = document.getElementById("vladanje3");
        var div = document.createElement("div");
        div.textContent = "Zbog " + ucenici[n3].brojIzostanaka[1] + " neopravdanih izostanaka, učenik dobija kaznu: " + ukor[uk];
        div.style.backgroundColor = "red";
        div.style.padding = "10px";
        div.style.width = "300px";
        div.style.color = "black";
        div.style.marginTop = "25px";
        div.style.fontWeight = "bold";
        vladanje.appendChild(div);
        return;
    }
}
function ukori(n3) {
    var ni = ucenici[n3].brojIzostanaka[1];
    let uk = -1;
    if (ni > 4 && ni < 10) {
        uk = 0;
    }
    if (ni > 9 && ni < 16) {
        uk = 1;
    }
    if (ni > 15 && ni < 22) {
        uk = 2
    }
    if (ni > 21 && ni < 25) {
        uk = 3;
    }
    if (ni > 25) {
        uk = 4;
    }
    localStorage.setItem("ukor", uk);
    return;
}
function upisiOcenu() {
    var ocena0 = document.getElementById("ocena0").value;
    var kom0 = document.getElementById("kom0").value;
    localStorage.setItem("novaOcena0", ocena0);
    localStorage.setItem("noviKom0", kom0);
    return;
}


