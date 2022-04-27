var score = 0;
function scoreInc() {
    score++;
    document.getElementById("score").innerHTML = score;
}

var nounCase = 0;
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
function chooseC() {
    let z = Math.floor(Math.random()*12); // for cases
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
function chooseN() {
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
function choose() {
    chooseC(); // chooses case
    chooseN(); // chooses noun
}
var correctWord = nouns.puella.nomS;

function check() {
    let x = document.getElementById("input1").value;
    if (x == correctWord) {
        scoreInc();
    }
}