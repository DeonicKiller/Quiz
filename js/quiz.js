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

    window.alert('Je bent nu op de vragenpagina');
}

/**
 * Show Antwoord page
 */
function showAntwoordPage(gegevenAntwoord) {
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
var  antwoordElement = document.getElementById('button-1');
var  antwoord2Element = document.getElementById('button-2');
var  antwoord3Element = document.getElementById('button-3');
var  antwoord4Element = document.getElementById('button-4');
antwoordElement.addEventListener("click", function(){
            keuze(1); });
antwoord2Element.addEventListener("click", function(){
            keuze(2); });
antwoord3Element.addEventListener("click", function(){
            keuze(3); });
antwoord4Element.addEventListener("click", function(){
            keuze(4); });
    

//Vraag veranderen plus vraag goed of fout
function keuze(nummer) {
    if (nummer==1){
    alert ("goed");
}   else {
    alert("fout")
}
var vraagElement = document.getElementById("vraag");
var antwoordElement = document.getElementById("button-1");
var vraagAndersElement = document.getElementById("vraagVerandering");
vraagElement.innerHTML = "Vraag 2/20";
antwoordElement.innerHTML = (antwoordLijst[0]);
antwoord2Element.innerHTML = (antwoordLijst[1]);
antwoord3Element.innerHTML = (antwoordLijst[2]);
antwoord4Element.innerHTML = (antwoordLijst[3]);
vraagAndersElement.innerHTML = "Waar gebruik je CSS voor?";
};

var  antwoord5Element = document.getElementById('button-1');
var  antwoord6Element = document.getElementById('button-2');
var  antwoord7Element = document.getElementById('button-3');
var  antwoord8Element = document.getElementById('button-4');
antwoord5Element.addEventListener("click", function(){
            keuze(1); });
antwoord6Element.addEventListener("click", function(){
            keuze(2); });
antwoord7Element.addEventListener("click", function(){
            keuze(3); });
antwoord8Element.addEventListener("click", function(){
            keuze(4); });




//Array's
var vragen = ["Waar gebruik je HTML voor?", "Waar gebruik je CSS voor?", "Waar gebruik je JavaScript voor?"] //Eerste lijst
var antwoordLijst = ["Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft het gedrag van websites", "Beschrijft het denken van de website"] //Tweede lijst
/*var antwoord3Element = document.getElementById("button-3");
var vraagAndersElement = document.getElementById("vraagVerandering");
function keuze(nummer) {
    if (nummer==1){
    alert ("goed");
}   else {
    alert("fout")
}
antwoordElement.innerHTML = (antwoordLijst[0]);
antwoord2Element.innerHTML = (antwoordLijst[1]); 
antwoord3Element.innerHTML = (antwoordLijst[2]);
antwoord4Element.innerHTML = (antwoordLijst[3]);
vraagAndersElement.innerHTML = (vragen[2]);*/






// Initialize
addButtonActions();
showStartPage();