/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var antwoordButtoneen = document.getElementById('button-1');
    var antwoordButtontwee = document.getElementById('button-2');
    var antwoordButtondrie = document.getElementById('button-3');
    var antwoordButtonvier = document.getElementById('button-4');
    var checkButton = document.getElementById("checkbutton");
    
    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        alert("Graag Inloggen");
    });
    antwoordButtoneen.addEventListener("click", function () {
        keuze(1);
    });
    antwoordButtontwee.addEventListener("click", function () {
        keuze(2);
    });
    antwoordButtondrie.addEventListener("click", function () {
        keuze(3);
    });
    antwoordButtonvier.addEventListener("click", function () {
        keuze(4);
    });
    checkButton.addEventListener("click", function() {
        checkStudent();
    });
}

/**
* Vraag goed of fout
*/
function keuze(nummer) {
    var scoreEl = document.getElementById("scoreQuiz2");
    if (nummer == kies[juiste[i]]) {
        alert("goed");
        score = score + 1;
    } else {
        alert("fout");
        score = score + 0;
    }

    // checken of het nu 21 wordt, bij nee  onderste 2, bij ja zet je vari

    if ((aantalVragen.length - 2) < i) {

        var page = document.getElementById('page-Resultaten');

        hideAllPages();

        page.style.display = 'block';
        scoreEl.innerHTML = "score:" + " " + (score);
        saveResultaten();
    } else {
        i = i + 1;
        antwoord();
        saveResultaten();
    }

}

/**
* Verandering van alles op de vragen pagina
*/
function antwoord() {
    var antwoordButtoneen = document.getElementById('button-1');
    var antwoordButtontwee = document.getElementById('button-2');
    var antwoordButtondrie = document.getElementById('button-3');
    var antwoordButtonvier = document.getElementById('button-4');
    var scoreEl = document.getElementById("scoreQuiz1");
    var vraagElement = document.getElementById("vraag");
    var vraagAndersElement = document.getElementById("vraagVerandering");
    vraagElement.innerHTML = (aantalVragen[i]);
    antwoordButtoneen.innerHTML = (antwoordLijst[i][0]);
    antwoordButtontwee.innerHTML = (antwoordLijst[i][1]);
    antwoordButtondrie.innerHTML = (antwoordLijst[i][2]);
    antwoordButtonvier.innerHTML = (antwoordLijst[i][3]);
    vraagAndersElement.innerHTML = (vragen[i]);
    scoreEl.innerHTML = "score:" + " " + (score);
}

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var AntwoordPage = document.getElementById('page-Antwoord');
    var ResultatenPage = document.getElementById('page-Resultaten');

    startPage.style.display = 'none';
    AntwoordPage.style.display = 'none';
    ResultatenPage.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show Antwoord page
 */

/**
 * Check student number using the API
 */
function checkStudent() {
    
    var studentNummer = document.getElementById('studentnummer').value;
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
        if (xHttp.status == 200) {
                studentIdentificationSucces(response);
      } else {
                studentIdentificationFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        //studentIdentificationFailed(xHttp.statusText);
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + studentNummer, true);
    xHttp.send();
    
}

/**
 * Student is successfully identified
 */
function studentIdentificationSucces(student) {
    var voornaam = student.firstName;
    var achterNaam = student.lastName;
    var page = document.getElementById('page-Antwoord');
    
    hideAllPages();
    
    page.style.display = 'block';
    
    alert("welkom" + " " + voornaam + " " + achterNaam);
    
    var naamVragenquiz =document.getElementById("NaamVerschijning");
    
    naamVragenquiz.innerHTML = "Succes met de Quiz" + " " + (student.firstName + " " + student.lastName);
    
}

/**
 * Student number is incorrect
 */
function studentIdentificationFailed() {
    
    alert("Foute inlog gegevens");
}

function saveResultaten() {
    
    var studentNummer = document.getElementById('studentnummer').value;
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
        if (xHttp.status == 200) {
                saveresultSucced(response);
      } else {
                saveresultFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        //studentIdentificationFailed(xHttp.statusText);
    };
    xHttp.open("POST", "https://quiz.clow.nl/v1/score",true);
    xHttp.send(
        JSON.stringify( {
            quizMaster: Master,
            Student: studentNummer,
            points: score,
            time: 0
        } )
    );
 }



/**
 * Resultaat van de quiz met succes opgeslagen
 */
function saveresultSucced() {
    console.info(alert("Succes"));
}

/**
 * Resultaat van de quiz niet opgeslagen
 */
function saveresultFailed() {
    console.info(alert("Failed"));  

}

/**
 * Antwoorden
 */
var kies = [1, 2, 3, 4];
var juiste = [0, 1, 3, 2, 3, 1, 1, 3, 0, 0, 2, 3, 1, 0, 2, 3, 0, 1, 2, 1];
var i = 0;
var score = 0;
var Master = "S1114352";
/**
 * Array's
 */
var vragen = ["Waar gebruik je HTML voor?", "Waar gebruik je CSS voor?", "Waar gebruik je JavaScript voor?", "Hoe kopieer je een geselecteerde tekst?", "Hoe plak je een tekst?",
"Hoe verander je de tekst kleur?", "Hoe undo je een actie?", "Hoe redo je een actie?", "Hoe knip je een actie weg?", "Welke button position is gebruikt voor deze quiz?",
"Hoe vaak kan je dezelfde var naam gebruiken?", "Hoe verhoog je een var = 0?", "Waar gebruik je een div voor?", "Hoe align je een tekst?", "Hoe maak je een header tag?",
"Hoe maak je een array?", "Waar staat html voor?", "Waar gebruik je margin voor?", "Hoe voeg je comments toe in JavaScript?", "Hoe begin je een HTML document?"];

//Lijst
var antwoordLijst = [
    ["Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft het gedrag van websites", "Beschrijft het denken van de website"], //Eerste lijst
    ["Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft de gevoelens van de website", "Beschrijft de emoties van de website"], //Tweede lijst
    ["Vernietigd gegevens", "Pusht gegevens", "Onthoud gegevens", "Beschrijft het gedrag van websites"],
    ["Crtl-n", "Ctrl-x", "Ctrl-c", "Ctrl-y"],
    ["Ctrl-p", "Ctrl-o", "Ctrl-q", "Ctrl-v"],
    ["Text-color:", "Color:", "Align", "Text"],
    ["Ctrl-m", "Ctrl-z", "Ctrl-e", "Ctrl-k"],
    ["Ctrl-r", "Ctrl-h", "Ctrl-a", "Ctrl-y"],
    ["Ctrl-x", "Ctrl-u", "ctrl-s", "Ctrl-2"],
    ["Relative", "Sticky", "Fixed", "Absolute"],
    ["10 keer", "Zo veel keer als je wilt", "1 keer", "2 keer"],
    ["--", "==", "//", "++"],
    ["Om text te schrijven", "Om een pagina te maken", "Om een Element op te halen", "Om een counter toe te voegen"],
    ["Text-align", "Align-text", "Text", "Align"],
    ["Header", "tag", "h1", "p1"],
    ["Var naam ={}", "Naam var = {}", "{} Naam = var", "Var naam = []"],
    ["Hyper Text Markup Language", "Hyper Text Margin Language", "Hyper Text Markup Life", "Hyper Test Language"],
    ["Om ruimte te creëren in de echte wereld", "Om ruimte te creëren rond om de elementen", "Om ruimte weg te halen", "Om elementen te creëren"],
    ["*// */", "**/ */", "/** */", "*/ /*"],
    ["DOCTYPE html", "!DOCTYPE html", "!!DOCTYPE html", "DOCTYPE html !"]
    
];

var aantalVragen = ["Vraag 1/20", "Vraag 2/20", "Vraag 3/20", "Vraag 4/20", "Vraag 5/20", "Vraag 6/20", "Vraag 7/20", "Vraag 8/20", "Vraag 9/20", "Vraag 10/20", "Vraag 11/20", "Vraag 12/20", "Vraag 13/20", "Vraag 14/20", "Vraag 15/20", "Vraag 16/20", "Vraag 17/20", "Vraag 18/20", "Vraag 19/20", "Vraag 20/20"]; //derde lijst

/**
 * Intializes
 */
addButtonActions();
showStartPage();
antwoord();

