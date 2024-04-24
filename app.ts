let guests = ["atif", "imran", "nasir", "waseem"];
guests.forEach(guest => {
    console.log(`dear ${guest},  would you like to join me for dinner?`);
});

// Changing Guest List

let unableToaAttend = "imran"

console.log(`dear, ${unableToaAttend}, can't make it to dinner.`)


// change guest list

let newGuest = "john";

guests[guests.indexOf(unableToaAttend)] = newGuest;

// new guest list

guests.forEach(guest => {
    console.log(`dear ${guest}, would you like to join me for dinner?`)
});