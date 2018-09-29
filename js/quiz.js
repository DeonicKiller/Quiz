"use strict"

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

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    antwoordButtoneen.addEventListener("click", function () {
        showAntwoordPage();
    });
    antwoordButtontwee.addEventListener("click", function () {
        showWrongPage();
    });
    antwoordButtondrie.addEventListener("click", function () {
        showWrongPage();
    });
    antwoordButtonvier.addEventListener("click", function () {
        showWrongPage();
    });
}



/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var AntwoordPage = document.getElementById('page-Antwoord');
   
    startPage.style.display = 'none';   
    AntwoordPage.style.display = 'none';
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
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-Antwoord');
    
    hideAllPages();

    page.style.display = 'block';

}

/**
 * Show Antwoord page
 */
function showAntwoordPage() {
    var page = document.getElementById('page-Antwoord');
    
    hideAllPages();

    page.style.display = 'block';

}

function showWrongPage() {
    var page = document.getElementById('page-Antwoord');
    
    hideAllPages();

    page.style.display = 'block';

}

//click installeren
var antwoordButtoneen = document.getElementById('button-1');
var antwoordButtontwee = document.getElementById('button-2');
var antwoordButtondrie = document.getElementById('button-3');
var antwoordButtonvier = document.getElementById('button-4');
antwoordButtoneen.addEventListener("click", function(){
    keuze(1); });
antwoordButtontwee.addEventListener("click", function(){
    keuze(2); });
antwoordButtondrie.addEventListener("click", function(){
    keuze(3); });
antwoordButtonvier.addEventListener("click", function(){
    keuze(4); });

    

//Vraag veranderen plus vraag goed of fout
function keuze(nummer) {
    if (nummer==1){
    alert ("goed");
}   else {
    alert("fout")
}
var vraagElement = document.getElementById("vraag");
var vraagAndersElement = document.getElementById("vraagVerandering");

vraagElement.innerHTML = (aantalVragen[1]);
antwoordButtoneen.innerHTML = (antwoordLijst[3]);
antwoordButtontwee.innerHTML = (antwoordLijst[0]);
antwoordButtondrie.innerHTML = (antwoordLijst[2]);
antwoordButtontwee.innerHTML = (antwoordLijst[1]);
vraagAndersElement.innerHTML = (vragen[1])
};










//Array's
var vragen = ["Waar gebruik je HTML voor?", "Waar gebruik je CSS voor?", "Waar gebruik je JavaScript voor?"] //Eerste lijst
var antwoordLijst = ["Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft het gedrag van websites", "Beschrijft het denken van de website"] //Tweede lijst
var aantalVragen = ["Vraag 1/20", "Vraag 2/20", "Vraag 3/20", "Vraag 4/20", "Vraag 5/20", "Vraag 6/20", "Vraag 7/20", "Vraag 8/20", "Vraag 9/20", "Vraag 10/20", "Vraag 11/20", "Vraag 12/20", "Vraag 13/20", "Vraag 14/20", "Vraag 15/20", "Vraag 16/20", "Vraag 17/20", "Vraag 18/20", "Vraag 19/20", "Vraag 20/20" ] //derde lijst





// Initialize
addButtonActions();
showStartPage();