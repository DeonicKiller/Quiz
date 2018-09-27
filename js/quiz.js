"use strict"

/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var AntwoordButtoneen = document.getElementById('button-1');
    var AntwoordButtontwee = document.getElementById('button-2');
    var AntwoordButtondrie = document.getElementById('button-3');
    var AntwoordButtonvier = document.getElementById('button-4');

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    AntwoordButtoneen.addEventListener("click", function () {
        showAntwoordPage();
    });
    AntwoordButtontwee.addEventListener("click", function () {
        showWrongPage();
    });
    AntwoordButtondrie.addEventListener("click", function () {
        showWrongPage();
    });
    AntwoordButtonvier.addEventListener("click", function () {
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

    window.alert('je hebt het antwoord goed');
}

function showWrongPage() {
    var page = document.getElementById('page-Antwoord');
    
    hideAllPages();

    page.style.display = 'block';

    window.alert('je hebt het antwoord Fout');
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
antwoordElement.innerHTML = "Beschrijft het gedrag van websites";
antwoord2Element.innerHTML = "Beschrijft de inhoud en structuur van websites";
antwoord3Element.innerHTML = "Beschrijft de layout en stijl van websites";
antwoord4Element.innerHTML = "Beschrijft het denken van de website";
vraagAndersElement.innerHTML = "Waar gebruik je CSS voor?";
}



//Array's
/*var vragen = ["Waar gebruik je HTML voor?", "Waar gebruik je CSS voor?", "Waar gebruik je JavaScript voor?"], //Eerste lijst
var antwoordLijst = [ "Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft het gedrag van websites", "Beschrijft het denken van de website"]; //Tweede lijst*/









// Initialize
addButtonActions();
showStartPage();