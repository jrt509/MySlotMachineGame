let chance = require('chance').Chance();

function wildCherrySlotMachine() {

    let i = 0;
    let slots = new Array;
    const items = ['SingleBar', 'DoubleBar', 'TripleBar', 'Zonk', '7', 'WildCherry'];
    const weights = [5, 4, 3, 6, 2, 1];
    let wallet = 0;

    console.log("Welcome to the Worst Odds of Winning Casino!\n");
    console.log("Voted #1 Casino at Bottega!\n");
    console.log("We Only Have One Kind of Slot Machine to Play\nand it's Called Wild Cherry Slots!\nYou can bet $1, $2, or $5 a Spin");
    console.log("So Sit Down, Get Your Money Out and Enjoy Your Visit!\n");
    console.log("Are You Ready to Play?\n")
    readyToPlayAnswer = prompt('yes or no?\n\n');
    switch (readyToPlayAnswer.toLowerCase()) {
        case 'yes':
            console.log("\nGreat! Have Fun and Remember to Gamble Responsibly!\n");
            break;
        case 'no':
            console.log("\nShucks! Well Remember to Visit Our Gift Shop on Your Way Out!\n");
    }
    playerBet = prompt('How much would you like to bet?\n');
    switch (playerBet.toLowerCase()) {
        case '$1':
            console.log("Good Luck!");
            break;
        case '$2':
            console.log("Good Luck!");
            break;
        case '$5':
            console.log("Good Luck!");
            break;

    }



    while (i < 3) {
        let slot = chance.weighted(items, weights);
        // console.log(slot);
        slots.push(slot);
        i++;
    }
    console.log(slots);

}

wildCherrySlotMachine();

