let countryInp = document.getElementById("search");
let btnSearch = document.getElementById("btn");
let result = document.getElementById("result");
btnSearch.addEventListener("click", () => {
    let countryName = countryInp.value;
    let linkRul = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(linkRul)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
            <div class="info" >
            <img src="${data[ 0 ].flags.svg }"  class="flag-img" >
             <h2>${data[ 0 ].name.common}</h2>
             </div>
              <div class="data">
              <h3> Capital: <span> ${data[ 0 ].capital[ 0 ]} </span> </h3>
              <h3> Continents: <span> ${data[0].continents[0]} </span> </h3>
              <h3> Population: <span> ${data[ 0 ].population} </span> </h3>
              <h3>Languages: <span> ${Object.values( data[ 0 ].languages ).toString().split( " , " ).join( " , " )} </span> </h3>
               </div>`;
        }).catch(() => {
            if (countryName === "") {
                result.innerHTML = ` <div class="valid"> The input field cannot be empty </div> `;
            } else {
                result.innerHTML = ` <div class="valid"> Please enter a valid country name. </div> `;
            }
        })

});