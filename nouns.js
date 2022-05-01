var score = 0;
function scoreInc() {
    score++;
    document.getElementById("score").innerHTML = score;
}

var nounC = 0; // n 0 v 1 a 2 g 3 d 4 ab 5 N 6 V 7 A 8 G 9 D 10 ABL 11
var nounN = 0; // P 0 S 1 p 2 B 3 V 4 C 5 N 6 M 7 c 8 D 9
const nouns = {
    puella: {
        word: "puella",
        nomS: "puella",
        vocS: "puella",
        accS: "puellam",
        genS: "puellae",
        datS: "puellae",
        ablS: "puella",
        nomP: "puellae",
        vocP: "puellae",
        accP: "puellas",
        genP: "puellarum",
        datP: "puellis",
        ablP: "puellis"
    },
    servus: {
        word: "servus",
        nomS: "servus",
        vocS: "serve",
        accS: "servum",
        genS: "servi",
        datS: "servo",
        ablS: "servo",
        nomP: "servi",
        vocP: "servi",
        accP: "servos",
        genP: "servorum",
        datP: "servis",
        ablP: "servis"
    },
    puer: {
        word: "puer",
        nomS: "puer",
        vocS: "puer",
        accS: "puerum",
        genS: "pueri",
        datS: "puero",
        ablS: "puero",
        nomP: "pueri",
        vocP: "pueri",
        accP: "pueros",
        genP: "puerorum",
        datP: "pueris",
        ablP: "pueris"
    },
    baculum: {
        word: "baculum",
        nomS: "baculum",
        vocS: "baculum",
        accS: "baculum",
        genS: "baculi",
        datS: "baculo",
        ablS: "baculo",
        nomP: "bacula",
        vocP: "bacula",
        accP: "bacula",
        genP: "baculorum",
        datP: "baculis",
        ablP: "baculis"
    },
    vox: {
        word: "vox",
        nomS: "vox",
        vocS: "vox",
        accS: "vocem",
        genS: "vocis",
        datS: "voci",
        ablS: "voce",
        nomP: "voces",
        vocP: "voces",
        accP: "voces",
        genP: "vocum",
        datP: "vocibus",
        ablP: "vocibus"
    },
    civis: {
        word: "civis",
        nomS: "civis",
        vocS: "civis",
        accS: "civem",
        genS: "civis",
        datS: "civi",
        ablS: "cive",
        nomP: "cives",
        vocP: "cives",
        accP: "cives",
        genP: "civium",
        datP: "civibus",
        ablP: "civibus"
    },
    nomen: {
        word: "nomen",
        nomS: "nomen",
        vocS: "nomen",
        accS: "nomen",
        genS: "nomenis",
        datS: "nomini",
        ablS: "nomine",
        nomP: "nomina",
        vocP: "nomina",
        accP: "nomina",
        genP: "nominum",
        datP: "nominibus",
        ablP: "nominibus"
    },
    manus: {
        word: "manus",
        nomS: "manus",
        vocS: "manus",
        accS: "manum",
        genS: "manui",
        datS: "manui",
        ablS: "manu",
        nomP: "manus",
        vocP: "manus",
        accP: "manus",
        genP: "manuum",
        datP: "manibus",
        ablP: "manibus"
    },
    cornu: {
        word: "cornu",
        nomS: "cornu",
        vocS: "cornu",
        accS: "cornu",
        genS: "cornus",
        datS: "cornu",
        ablS: "cornu",
        nomP: "cornua",
        vocP: "cornua",
        accP: "cornua",
        genP: "cornuum",
        datP: "cornibus",
        ablP: "cornibus"
    },
    dies: {
        word: "dies",
        nomS: "dies",
        vocS: "dies",
        accS: "diem",
        genS: "diei",
        datS: "diei",
        ablS: "die",
        nomP: "dies",
        vocP: "dies",
        accP: "dies",
        genP: "dierum",
        datP: "diebus",
        ablP: "diebus"
    }
}
const cases = {
    nomS: "Nominative Singular", // 0
    vocS: "Vocative Singular", // 1
    accS: "Accusative Singular", // 2
    genS: "Genitive Singular", // 3
    datS: "Dative Singular", // 4
    ablS: "Ablative Singular", // 5
    nomP: "Nominative Plural", // 6
    vocP: "Vocative Plural", // 7
    accP: "Accusative Plural", // 8
    genP: "Genitive Plural", // 9
    datP: "Dative Plural", // 10
    ablP: "Ablative Plural" // 11
}
function chooseC() { // chooses Case
    let z = Math.floor(Math.random()*12); // for cases
    nounC = z;
    if (z == 0) {
        document.getElementById("case").innerHTML = cases.nomS;
    }
    else if (z == 1) {
        document.getElementById("case").innerHTML = cases.vocS;
    }
    else if (z == 2) {
        document.getElementById("case").innerHTML = cases.accS;
    }
    else if (z == 3) {
        document.getElementById("case").innerHTML = cases.genS;
    }
    else if (z == 4) {
        document.getElementById("case").innerHTML = cases.datS;
    }
    else if (z == 5) {
        document.getElementById("case").innerHTML = cases.ablS;
    }
    else if (z == 6) {
        document.getElementById("case").innerHTML = cases.nomP;
    }
    else if (z == 7) {
        document.getElementById("case").innerHTML = cases.vocP;
    }
    else if (z == 8) {
        document.getElementById("case").innerHTML = cases.accP;
    }
    else if (z == 9) {
        document.getElementById("case").innerHTML = cases.genP;
    }
    else if (z == 10) {
        document.getElementById("case").innerHTML = cases.datP;
    }
    else if (z == 11) {
        document.getElementById("case").innerHTML = cases.ablP;
    }
}
function chooseN() { // chooses Noun
    let x = Math.floor(Math.random()*10); // for Noun
    nounN = x;
    if (x == 0) {
        document.getElementById("nouns").innerHTML = nouns.puella.word;
    }
    else if (x == 1) {
        document.getElementById("nouns").innerHTML = nouns.servus.word;
    }
    else if (x == 2) {
        document.getElementById("nouns").innerHTML = nouns.puer.word;
    }
    else if (x == 3) {
        document.getElementById("nouns").innerHTML = nouns.baculum.word;
    }
    else if (x == 4) {
        document.getElementById("nouns").innerHTML = nouns.vox.word;
    }
    else if (x == 5) {
        document.getElementById("nouns").innerHTML = nouns.civis.word;
    }
    else if (x == 6) {
        document.getElementById("nouns").innerHTML = nouns.nomen.word;
    }
    else if (x == 7) {
        document.getElementById("nouns").innerHTML = nouns.manus.word;
    }
    else if (x == 8) {
        document.getElementById("nouns").innerHTML = nouns.cornu.word;
    }
    else if (x == 9) {
        document.getElementById("nouns").innerHTML = nouns.dies.word;
    }
}
var correctWord = nouns.puella.nomS;

function correct() { // changes Correct Word [Answer]
    if (nounN == 0) {
        if (nounC == 0) {
            correctWord = nouns.puella.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.puella.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.puella.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.puella.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.puella.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.puella.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.puella.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.puella.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.puella.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.puella.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.puella.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.puella.ablP;
        }
    }
    else if (nounN == 1) {
        if (nounC == 0) {
            correctWord = nouns.servus.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.servus.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.servus.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.servus.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.servus.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.servus.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.servus.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.servus.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.servus.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.servus.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.servus.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.servus.ablP;
        }
    }
    else if (nounN == 2) {
        if (nounC == 0) {
            correctWord = nouns.puer.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.puer.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.puer.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.puer.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.puer.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.puer.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.puer.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.puer.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.puer.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.puer.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.puer.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.puer.ablP;
        }
    }
    else if (nounN == 3) {
        if (nounC == 0) {
            correctWord = nouns.baculum.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.baculum.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.baculum.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.baculum.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.baculum.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.baculum.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.baculum.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.baculum.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.baculum.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.baculum.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.baculum.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.baculum.ablP;
        }
    }
    else if (nounN == 4) {
        if (nounC == 0) {
            correctWord = nouns.vox.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.vox.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.vox.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.vox.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.vox.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.vox.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.vox.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.vox.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.vox.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.vox.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.vox.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.vox.ablP;
        }
    }
    else if (nounN == 5) {
        if (nounC == 0) {
            correctWord = nouns.civis.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.civis.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.civis.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.civis.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.civis.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.civis.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.civis.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.civis.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.civis.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.civis.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.civis.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.civis.ablP;
        }
    }
    else if (nounN == 6) {
        if (nounC == 0) {
            correctWord = nouns.nomen.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.nomen.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.nomen.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.nomen.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.nomen.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.nomen.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.nomen.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.nomen.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.nomen.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.nomen.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.nomen.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.nomen.ablP;
        }
    }
    else if (nounN == 7) {
        if (nounC == 0) {
            correctWord = nouns.manus.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.manus.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.manus.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.manus.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.manus.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.manus.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.manus.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.manus.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.manus.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.manus.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.manus.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.manus.ablP;
        }
    }
    else if (nounN == 8) {
        if (nounC == 0) {
            correctWord = nouns.cornu.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.cornu.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.cornu.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.cornu.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.cornu.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.cornu.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.cornu.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.cornu.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.cornu.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.cornu.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.cornu.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.cornu.ablP;
        }
    }
    else if (nounN == 9) {
        if (nounC == 0) {
            correctWord = nouns.dies.nomS;
        }
        else if (nounC == 1) {
            correctWord = nouns.dies.vocS;
        }
        else if (nounC == 2) {
            correctWord = nouns.dies.accS;
        }
        else if (nounC == 3) {
            correctWord = nouns.dies.genS;
        }
        else if (nounC == 4) {
            correctWord = nouns.dies.datS;
        }
        else if (nounC == 5) {
            correctWord = nouns.dies.ablS;
        }
        else if (nounC == 6) {
            correctWord = nouns.dies.nomP;
        }
        else if (nounC == 7) {
            correctWord = nouns.dies.vocP;
        }
        else if (nounC == 8) {
            correctWord = nouns.dies.accP;
        }
        else if (nounC == 9) {
            correctWord = nouns.dies.genP;
        }
        else if (nounC == 10) {
            correctWord = nouns.dies.datP;
        }
        else if (nounC == 11) {
            correctWord = nouns.dies.ablP;
        }
    }
}
function choose() {
    chooseC(); // chooses case
    chooseN(); // chooses nouns
    correct(); // changes answer
}

function check() {
    let x = document.getElementById("input1").value;
    if (x == correctWord) {
        scoreInc();
        choose();
    }
}