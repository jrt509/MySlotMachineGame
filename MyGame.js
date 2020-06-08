let chance = require('chance').Chance();

function wildCherrySlotMachine() {

    let i = 0;
    let slots = new Array;
    const items = ['SingleBar', 'DoubleBar', 'TripleBar', 'Zonk', '7', 'WildCherry'];
    const weights = [5, 4, 3, 6, 2, 1];
    let wallet = 0;
    let playerBet = 0;
    let randomWin = 0;
    let playerWallet = 0;
    let spinAnswer = "yes";

    console.log("Welcome to the Worst Odds of Winning Casino!\n");
    console.log("Voted #1 Casino at Bottega!\n");
    console.log("So Sit Down, Get Your Money Out and Enjoy Your Visit!\n");
    console.log("Are You Ready to Play?\n");
    readyToPlayAnswer = prompt('yes or no?\n\n');

    if (readyToPlayAnswer === "yes") {
        playerWallet = prompt('How much money are you starting with?\n');
        wallet += playerWallet; // console.log(`${wallet}`);
        while (spinAnswer === "yes") {
            playerBet = prompt('How much would you like to bet?\n\n');
            wallet -= playerBet;

            while (i < 3) {
                let slot = chance.weighted(items, weights);
                console.log(slot);
                slots.push(slot);
                i++;
            }

            if (slots[0] === "WildCherry" || slots[1] === "WildCherry" || slots[2] === "WildCherry") {
                
                if (slots[0] === "WildCherry" && slots[1] === "WildCherry" && slots[2] === "WildCherry") {
                    wallet += 300;
                    console.log(`You won the JACKPOT!! You won $300 and you now have $${wallet}`)
                } else {
                    wallet += 5;
                    console.log(`You won $5, bringing your total to $${wallet}`)
                }


            } else if (slots[0] === slots[1] && slots[0] === slots[2]) {

                if (slots[0] === 'SingleBar') {
                    wallet += 10;
                    console.log(`You just won $10 and you now have $${wallet}`);
                } else if (slots[0] === 'DoubleBar') {
                    wallet += 30;
                    console.log(`You just won $30 and you now have $${wallet}`);
                } else if (slots[0] === 'TripleBar') {
                    wallet += 50;
                    console.log(`You just won $50 and you now have $${wallet}`);
                } else if (slots[0] === '7') {
                    wallet += 150;
                    console.log(`You just won $150 and you now have $${wallet}`);
                }

            } else {

                // wallet -= playerBet;
                console.log(`Sorry, not a win. Your total is now $${wallet}`);
            }


            spinAnswer = prompt("Spin again?\n");
        }
        switch (spinAgain.toLowerCase()) {
            case 'spin again':
                console.log("Would you like to bet the same amount or change your bet?\n");
                break;
            case 'cashout':
                console.log(`We hope you had fun! Your total cashout is ${wallet.push}.`);
                break;
        }
    } else {
        console.log("Then get outta here, stop by our amazing gift shop!!!");
    }
    // console.log(slots);
}

wildCherrySlotMachine();
