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
        showAntwoordPage();
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
}

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var AntwoordPage = document.getElementById('page-Antwoord');
    var ResultatenPage = document. getElementById('page-Resultaten')
   
    startPage.style.display = 'none';   
    AntwoordPage.style.display = 'none';
    ResultatenPage.style.display ='none';
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
function showAntwoordPage() {
    var page = document.getElementById('page-Antwoord');
    
    hideAllPages();

    page.style.display = 'block';

}
/**
 * Show Resultaten Page
 */
/*function showresultatenPage() {
    var page = document.getElementById('page-Resultaten');
    
    hideAllPages();

    page.style.display = 'block';

}*/

    /**
    * Antwoorden
    */
    var vraagElement = document.getElementById("vraag");
    var vraagAndersElement = document.getElementById("vraagVerandering");
    var scoreElement = document.getElementById("scoreQuiz");
    var kies = [1, 2, 3, 4];
    var juiste = [0, 1, 3];
    var i = 0;
    var score =0;
                
    /**
    * Array's
    */
    var vragen = ["Waar gebruik je HTML voor?", "Waar gebruik je CSS voor?", "Waar gebruik je JavaScript voor?", "test"]; //Lijst
    var antwoordLijst = [
                    ["Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft het gedrag van websites", "Beschrijft het denken van de website"], //Eerste lijst
                    ["Beschrijft de inhoud en structuur van websites", "Beschrijft de layout en stijl van websites", "Beschrijft de gevoelens van de website", "Beschrijft de emoties van de website"], //Tweede lijst
                    ["Vernietigd gegevens", "Pusht gegevens", "Onthoud gegevens", "Beschrijft het gedrag van websites"],
                    ["test1", "test2", "test3", "test4"]
]; 
                
    var aantalVragen = ["Vraag 1/20", "Vraag 2/20", "Vraag 3/20", "Vraag 4/20", "Vraag 5/20", "Vraag 6/20", "Vraag 7/20", "Vraag 8/20", "Vraag 9/20", "Vraag 10/20", "Vraag 11/20", "Vraag 12/20", "Vraag 13/20", "Vraag 14/20", "Vraag 15/20", "Vraag 16/20", "Vraag 17/20", "Vraag 18/20", "Vraag 19/20", "Vraag 20/20" ]; //derde lijst
                
                
    /**
    * Verandering van alles op de vragen pagina
    */
function antwoord() {
    var antwoordButtoneen = document.getElementById('button-1');
    var antwoordButtontwee = document.getElementById('button-2');
    var antwoordButtondrie = document.getElementById('button-3');
    var antwoordButtonvier = document.getElementById('button-4');
    vraagElement.innerHTML = (aantalVragen[i]);
    antwoordButtoneen.innerHTML = (antwoordLijst[i] [0]);
    antwoordButtontwee.innerHTML = (antwoordLijst[i] [1]);
    antwoordButtondrie.innerHTML = (antwoordLijst[i] [2]);
    antwoordButtonvier.innerHTML = (antwoordLijst[i] [3]);
    vraagAndersElement.innerHTML = (vragen[i]);
    scoreElement.innerHTML = (score);
}
                
    /**
    * Vraag goed of fout
    */ 
function keuze(nummer) {
    if (nummer==kies[juiste[i]]){
    alert ("goed");
    i = i +1;
    score +=1;
    antwoord();}   
    else {
    alert("fout");
    i = i +1;
    score +=0;
    antwoord();}
}
                
    /**
    * Intialize
    */
    addButtonActions();
    showStartPage();
    antwoord();