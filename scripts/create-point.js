
const states =  async function() {
    const data = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const value = await data.json();
    return value
} 


function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res =>  res.json())
        .then( states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
            
        })
}

function populateCitys(event) {
    const ufId = event.target.value;
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const indexOfSelectState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectState].text;


    citySelect.disabled = true;
    citySelect.innerHTML = `<option value="">Selecione a Cidade</option>`

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios`)
        .then( res =>  res.json())
        .then( citys => {

            for (const city of citys) {
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }

            citySelect.disabled = false;
        })
}


populateUFs();

document
    .querySelector("select[name=uf]")
    .addEventListener("change", populateCitys)
