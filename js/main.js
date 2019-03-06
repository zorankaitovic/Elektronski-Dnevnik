var ucenici = {};
ucenici[0] = {
    ime: "Marko",
    prezime: "Marković",
    ocene: [3, 3, 4, 5, 5, 4, 3, 2, 2, 3, 4, 5],
    brojIzostanaka: [4, 11],
    vladanje: "2",
}
ucenici[1] = {
    ime: "Janko",
    prezime: "Janković",
    ocene: [2, 3, 4, 5, 5, 4, 3, 2, 2, 3, 4, 5],
    brojIzostanaka: [4, 5],
    vladanje: "2",
}
ucenici[2] = {
    ime: "Petar",
    prezime: "Petrović",
    ocene: [2, 3, 4, 5, 5, 4, 3, 2, 2, 3, 4, 5],
    brojIzostanaka: [4, 5],
    vladanje: "2",
}
ucenici[3] = {
    ime: "Ivana",
    prezime: "Ivanović",
    ocene: [2, 3, 4, 5, 5, 4, 3, 2, 2, 3, 4, 5],
    brojIzostanaka: [4, 5],
    vladanje: "2",
}
ucenici[4] = {
    ime: "Jovana",
    prezime: "Jovanović",
    ocene: [2, 3, 4, 5, 5, 4, 3, 2, 2, 3, 4, 5],
    brojIzostanaka: [4, 5],
    vladanje: "2",
}
ucenici[5] = {
    ime: "Boško",
    prezime: "Bošković",
    ocene: [2, 3, 4, 5, 5, 4, 3, 2, 2, 3, 4, 5],
    brojIzostanaka: [4, 5],
    vladanje: "2",
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
var ukor = ["Opomena odeljenskog staresine", "Ukor odeljenskog staresine", "Ukor Odeljenskog veca",
    "Ukor direktora skole", "Ukor Nastavnickog veca"];
var izostanci = ["Opravdani izostanci", "Neopravdani izostanci"]
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
function spisak(n) {
    var table = document.getElementById("tabela");
    for (i = 0; i < 12; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < 1; j++) {
            var td = document.createElement("td");
            td.textContent = predmeti[i];
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent = ucenici[n].ocene[i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return;
}
function naslov(n) {
    var naslov = document.getElementById("omotac").firstElementChild;
    naslov.textContent = ucenici[n].ime + " " + ucenici[n].prezime;
    spisak(n);
    return;
}

function vladanje(n) {
    var table = document.getElementById("tabela1");
    ukori(n);
    var j = localStorage.getItem("ukor")
    for (i = 0; i < 2; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < 1; j++) {
            var td = document.createElement("td");
            td.textContent = izostanci[i];
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent = ucenici[n].brojIzostanaka[i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    var vladanje = document.getElementById("vladanje");
    var div = document.createElement("div");
    div.textContent = "Zbog " + ucenici[n].brojIzostanaka[1] + " neopravdanih izostanaka, ucenik dobija kaznu: " + ukor[j];
    div.style.backgroundColor = "red";
    div.style.padding = "10px";
    div.style.width = "300px";
    div.style.color = "black";
    div.style.marginTop = "25px";
    div.style.fontWeight = "bold";
    vladanje.appendChild(div);
    return;
}
function ukori(n) {
    var ni = ucenici[n].brojIzostanaka[1];
    var uk = -1;
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
    document.getElementById("forma3").reset();
    return;
}