const logo = document.querySelectorAll("#SIMPLYWING path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Buchstabe ${i} ist ${logo[i].getTotalLength()} lang`);
}