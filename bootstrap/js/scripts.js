
const osoby = [
    {
        imie: "Jan",
        wiek: 30,
        miasto: "Warszawa"
    },
    {
        imie: "Anna",
        wiek: 25,
        miasto: "Kraków"
    },
    {
        imie: "Piotr",
        wiek: 35,
        miasto: "Gdańsk"
    }
];

document.getElementById("button").addEventListener("click", () => {
    osoby.forEach((props) => {
        for(const property in props) {

            console.log(`${property}: ${props[property]}`)

        }
        
    })})
