function initialLoad() {
   
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")

        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            setHeroesList(data);
        })

        .catch(function(error) {
            console.error("Erro ao carregar heróis:", error);
        });
}

function setHeroesList(heroes) {
    heroes.forEach(function(hero) {
        insertHero(hero);
    });
}



function insertHero(hero) {


    const divList = document.getElementById("section-list");

    const heroDiv = document.createElement("div");
    heroDiv.style.border = "1px solid #ccc";
    heroDiv.style.borderRadius = "8px";
    heroDiv.style.padding = "10px";
    heroDiv.style.width = "150px";
    heroDiv.style.textAlign = "center";
    heroDiv.style.backgroundColor = "#f4f4f4";

    const elementImg = document.createElement("img");
    elementImg.src = hero.images.sm;
    elementImg.alt = hero.name;
    elementImg.style.width = "100%";
    elementImg.style.borderRadius = "8px";



    const elementName = document.createElement("p");

    elementName.innerHTML = hero.name;

    elementName.style.fontWeight = "bold";
    elementName.style.marginTop = "5px";


    heroDiv.appendChild(elementImg);
    heroDiv.appendChild(elementName);

    divList.appendChild(heroDiv);
}

