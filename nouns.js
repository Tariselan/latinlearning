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
        if (nounC == 1) {
            correctWord = nouns.puella.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.puella.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.puella.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.puella.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.puella.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.puella.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.puella.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.puella.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.puella.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.puella.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.puella.ablP;
        }
    }
    else if (nounN == 1) {
        if (nounC == 0) {
            correctWord = nouns.servus.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.servus.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.servus.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.servus.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.servus.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.servus.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.servus.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.servus.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.servus.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.servus.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.servus.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.servus.ablP;
        }
    }
    else if (nounN == 2) {
        if (nounC == 0) {
            correctWord = nouns.puer.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.puer.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.puer.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.puer.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.puer.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.puer.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.puer.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.puer.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.puer.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.puer.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.puer.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.puer.ablP;
        }
    }
    else if (nounN == 3) {
        if (nounC == 0) {
            correctWord = nouns.baculum.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.baculum.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.baculum.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.baculum.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.baculum.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.baculum.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.baculum.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.baculum.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.baculum.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.baculum.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.baculum.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.baculum.ablP;
        }
    }
    else if (nounN == 4) {
        if (nounC == 0) {
            correctWord = nouns.vox.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.vox.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.vox.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.vox.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.vox.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.vox.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.vox.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.vox.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.vox.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.vox.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.vox.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.vox.ablP;
        }
    }
    else if (nounN == 5) {
        if (nounC == 0) {
            correctWord = nouns.civis.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.civis.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.civis.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.civis.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.civis.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.civis.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.civis.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.civis.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.civis.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.civis.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.civis.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.civis.ablP;
        }
    }
    else if (nounN == 6) {
        if (nounC == 0) {
            correctWord = nouns.nomen.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.nomen.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.nomen.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.nomen.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.nomen.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.nomen.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.nomen.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.nomen.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.nomen.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.nomen.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.nomen.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.nomen.ablP;
        }
    }
    else if (nounN == 7) {
        if (nounC == 0) {
            correctWord = nouns.manus.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.manus.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.manus.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.manus.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.manus.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.manus.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.manus.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.manus.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.manus.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.manus.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.manus.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.manus.ablP;
        }
    }
    else if (nounN == 8) {
        if (nounC == 0) {
            correctWord = nouns.cornu.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.cornu.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.cornu.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.cornu.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.cornu.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.cornu.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.cornu.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.cornu.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.cornu.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.cornu.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.cornu.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.cornu.ablP;
        }
    }
    else if (nounN == 0) {
        if (nounC == 0) {
            correctWord = nouns.dies.nomS;
        }
        if (nounC == 1) {
            correctWord = nouns.dies.vocS;
        }
        if (nounC == 2) {
            correctWord = nouns.dies.accS;
        }
        if (nounC == 3) {
            correctWord = nouns.dies.genS;
        }
        if (nounC == 4) {
            correctWord = nouns.dies.datS;
        }
        if (nounC == 5) {
            correctWord = nouns.dies.ablS;
        }
        if (nounC == 6) {
            correctWord = nouns.dies.nomP;
        }
        if (nounC == 7) {
            correctWord = nouns.dies.vocP;
        }
        if (nounC == 8) {
            correctWord = nouns.dies.accP;
        }
        if (nounC == 9) {
            correctWord = nouns.dies.genP;
        }
        if (nounC == 10) {
            correctWord = nouns.dies.datP;
        }
        if (nounC == 11) {
            correctWord = nouns.dies.ablP;
        }
    }
}
function choose() {
    chooseC(); // chooses case
    chooseN(); // chooses noun
}

function check() {
    let x = document.getElementById("input1").value;
    if (x == correctWord) {
        scoreInc();
    }
}