//Nome do herói.
let nickName = "Jorel";

//Variável de XP.
let xpCount = 7000;

// Calculo XP/Level.
let rankings = [
    {xp:[0, 1000], level:"Ferro!!"},
    {xp:[1001,2000], level:"Bronze!!"},
    {xp:[2001,5000], level:"Prata!!"},
    {xp:[5001,7000], level:"Ouro!!"},
    {xp:[7001,8000], level:"Platina!!"},
    {xp:[8001,9000], level:"Ascendente!!"},
    {xp:[9001,10000], level:"Imortal!!"},
    {xp:[10001], level:"Radiante!!"},
];

let level;

for (let i = 0; i < rankings.length; i++) {
    if (xpCount >= rankings[i].xp[0] && xpCount <= rankings[i].xp[1]) {
        level = rankings[i].level;
        break;
    }
};

//Resultado.
console.log("O Herói " + nickName, "possui " + xpCount, "de XP! E seu level está é " + level);