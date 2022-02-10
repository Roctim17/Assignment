// Problem No 1

function anaToVori(ana) {
    let vori;
    if (ana > 0) {
        vori = ana / 16;
    }
    else if (ana < 0) {
        var errorMassage = "Please give the possative number";
        return errorMassage;
    }
    else if (ana != "number") {
        var errorMassage = "Please give the Right number";
        return errorMassage;
    }
    return vori;
}
console.log(anaToVori(16));

// Problem No 2

function pandaCost(singara, Shomucha, gilapi) {
    var totalPrice;
    const singaraPrice = 7;
    const ShomuchaPrice = 10;
    const gilapiPrice = 15;
    if (singara > 50 || Shomucha > 50 || gilapi > 50) {
        var errorMassage = "Sorry Mama Out of stock ";
        return errorMassage;
    }
    else if (singara >= 0 && Shomucha >= 0 && gilapi >= 0) {
        let totalSingaraPrice = singaraPrice * singara;
        let totalShomuchaPrice = ShomuchaPrice * Shomucha;
        let totalGilapiPrice = gilapiPrice * gilapi;
        totalPrice = totalSingaraPrice + totalShomuchaPrice + totalGilapiPrice;
    }
    else if (singara < 0 || Shomucha < 0 || gilapi < 0) {
        var errorMassage = "Please give the possative number";
        return errorMassage;
    }
    else if (singara != "number" || Shomucha != "number" || gilapi != "number") {
        var errorMassage = "Please give the Right number";
        return errorMassage;
    }
    return totalPrice;
}
console.log(pandaCost(0, 50, 0));

// Problem No 3

function picnicBudget(person) {
    let perPersonTotalCost;
    const first100perPersonCost = 5000;
    const secend100perPersonCost = 4000;
    const Trird100PlsePerPersonCost = 3000;
    if (person > 0 && person <= 100) {
        perPersonTotalCost = person * first100perPersonCost;
    }
    else if (person > 100 && person <= 200) {
        let first100PersonCost = 100 * first100perPersonCost;
        let restperPersonCost = (person - 100) * secend100perPersonCost;
        perPersonTotalCost = first100PersonCost + restperPersonCost;
    }
    else if (person > 200) {
        let first100PersonCost = 100 * first100perPersonCost;
        let secend100PersonCost = 100 * secend100perPersonCost;
        let restperPersonCost = (person - 200) * Trird100PlsePerPersonCost;
        perPersonTotalCost = first100PersonCost + secend100PersonCost + restperPersonCost;
    }
    else if (person != "number") {
        var errorMassage = "Please give the Right number";
        return errorMassage;
    }
    else {
        var errorMassage = "Please give the Right Value";
        return errorMassage;
    }
    return perPersonTotalCost;
}
console.log(picnicBudget(101));

// Problem No 4

function oddFriend(myFriends) {
    for (var i = 0; i < myFriends.length; i++) {
        let friend = myFriends[i];
        if (friend.length % 2 == 1 && friend.length != "undefined") {
            return friend;
        }
        else if (friend.length == undefined) {
            var errorMassage = "Hay Man! Wright you friend's name";
            return errorMassage;
        }
    }
}
console.log(oddFriend(["zillur", "shawon", "ruhan", "kowshik", "johir", "fahim", "omar", "tufail", "tazib", "azad", "asraf", "shibli", "tasin", "munna", "arafat"]));