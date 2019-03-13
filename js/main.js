var ucenici = {};
ucenici[0] = {
    ime: "Marko",
    prezime: "Marković",
    ocene: [[3, 4, 5, 2], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 1],
    vladanje: "2",
    rbroj: 0,
}
ucenici[1] = {
    ime: "Janko",
    prezime: "Janković",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: "2",
    rbroj: 1,
}
ucenici[2] = {
    ime: "Petar",
    prezime: "Petrović",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 15],
    vladanje: "2",
    rbroj: 2,
}
ucenici[3] = {
    ime: "Ivana",
    prezime: "Ivanović",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: "2",
    rbroj: 3,
}
ucenici[4] = {
    ime: "Jovana",
    prezime: "Jovanović",
    ocene: [[3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: "2",
    rbroj: 4,
}
ucenici[5] = {
    ime: "Boško",
    prezime: "Bošković",
    ocene: [[3, 4, 5, 2], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5], [3, 4, 5, 5]],
    brojIzostanaka: [4, 5],
    vladanje: "2",
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



