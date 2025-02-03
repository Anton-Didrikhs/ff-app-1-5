const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
const eyeColors = ['blue', 'green', 'brown', 'hazel', 'gray'];
let names = [];                        // tablica z obiektami 

function getRandomDate(startYear, endYear) {
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "export const data = [\n";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomEyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];
        const randomDOB = getRandomDate(1950, 2010);
        const randomRating = Math.floor(Math.random() * 11); // losowanie oceny od 0 do 10

        content += `  {\n`;
        content += `    id: ${i+1},\n`;
        content += `    name: "${randomName}",\n`;
        content += `    dateOfBirth: "${randomDOB}",\n`;
        content += `    eyeColor: "${randomEyeColor}",\n`;
        content += `    rating: ${randomRating}\n`;
        content += `  },\n`;
        
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});