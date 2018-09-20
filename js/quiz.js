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

// Initialize
addButtonActions();
showStartPage();