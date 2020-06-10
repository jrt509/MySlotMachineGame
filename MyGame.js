let chance = require('chance').Chance();

function wildCherrySlotMachine() {


    let slots = new Array;
    const items = ['SingleBar', 'DoubleBar', 'TripleBar', 'Zonk', '7', 'WildCherry'];
    const weights = [1, 1, 1, 1, 1, 10];
    let wallet = 0;
    let playerBet = 0;
    let playerWallet = 0;
    let spinAnswer = "yes";
    let winningTotal = 0;
    let losingTotal =0;
    const displaySlots = () => {
        let i = 0;
        while (i < 3) {
            let slot = chance.weighted(items, weights);
            console.log(slot);
            slots.push(slot);
            i++;
        }
    }

    console.log("Welcome to the Worst Odds of Winning Casino!\n");
    console.log("Voted #1 Casino at Bottega!\n");
    console.log("So Sit Down, Get Your Money Out and Enjoy Your Visit!\n");
    console.log("Are You Ready to Play?\n");
    readyToPlayAnswer = prompt('yes or no?\n\n');

    if (readyToPlayAnswer.toLowerCase() === "yes" || readyToPlayAnswer.toLowerCase() === "y" || readyToPlayAnswer.toLowerCase() === "ye") {
        playerWallet = prompt('How much money are you starting with?\n');
        wallet += playerWallet;
        while (spinAnswer === "yes" || spinAnswer === "y" || spinAnswer === "ye") {
            playerBet = prompt('How much would you like to bet?\n\n');
            wallet -= playerBet;
            losingTotal += playerBet;
            displaySlots();
            if (slots[0] === slots[1] && slots[0] === slots[2]) {

                if (slots[0] === 'SingleBar') {
                    wallet += 10;
                    winningTotal += 10;
                    
                    console.log(`You just won $10 and you now have $${wallet}`);
                } else if (slots[0] === 'DoubleBar') {
                    wallet += 30;
                    winningTotal += 30;
                    console.log(`You just won $30 and you now have $${wallet}`);
                } else if (slots[0] === 'TripleBar') {
                    wallet += 50;
                    winningTotal += 50;
                    console.log(`You just won $50 and you now have $${wallet}`);
                } else if (slots[0] === '7') {
                    wallet += 150;
                    winningTotal += 150;
                    console.log(`You just won $150 and you now have $${wallet}`);
                } else if (slots[0] === "WildCherry" && slots[1] === "WildCherry" && slots[2] === "WildCherry") {
                    wallet += 300;
                    winningTotal += 300;
                    console.log(`You won the JACKPOT!! You won $300 and you now have $${wallet}`)
                }
                
            }
            else if (slots[0] === "WildCherry" || slots[1] === "WildCherry" || slots[2] === "WildCherry") {
                wallet += 5;
                winningTotal += 5;
                console.log(`You won $5, bringing your total to $${wallet}`);

            }  else {
                console.log(`Sorry, not a win. Your total is now $${wallet}`);
            }


            spinAnswer = prompt("Spin again?\n");

        }
    } else {
        console.log("Thank you for playing! Please stop by our amazing gift shop on your way out!!!");
    }
    console.log(`You made a profit of $${winningTotal}\nYou lost $${losingTotal}\nYour wallet total is now $${wallet}`);
    
}

wildCherrySlotMachine();
