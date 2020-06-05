let chance = require('chance').Chance();

function wildCherrySlotMachine() {
    let i = 0;
    let slots = new Array;
    const items = ['SingleBar', 'DoubleBar', 'TripleBar', 'blank', '7', 'WildCherry'];
    const weights = [5, 4, 3, 6, 2, 1];
    while(i < 3) {
        let slot = chance.weighted(items, weights);
        // console.log(slot);
        slots.push(slot);
        i++;
    } 
    console.log(slots);
    
}

wildCherrySlotMachine();