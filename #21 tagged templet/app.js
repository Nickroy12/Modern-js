function modifier(strings, ...values) {
    // Use reduce to process the strings and values together
    const result = strings.reduce((prev, current) => {
        // Append the current string and a value (if available)
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return result; // Return the processed string
}

// Players
var player1 = "Sakib";
var player2 = "Tamim";

// Use the function with template literals
console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);
