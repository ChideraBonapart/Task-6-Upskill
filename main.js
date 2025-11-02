const interns = [
    { 
        name: "Ogonna Okoro", 
        scores: [90, 95, 91, 86, 80]
    },
    { 
        name: "Blessing Blair", 
        scores: [85, 80, 78, 83, 82]
    },
    { 
        name: "Adamu Abdul", 
        scores: [75, 90, 83, 71, 80]
    },
    { 
        name: "Ikenna Dike", 
        scores: [85, 87, 90, 82, 91]
    },
    { 
        name: "Ola Onabisi", 
        scores: [95, 91, 93, 85, 87]
    }
];

function calcAverage(scores) {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

console.log("=== GRADEBOOK RESULTS ===");
console.log("Intern Average Scores:");
console.log("------------------------");

interns.forEach(intern => {
    const average = calcAverage(intern.scores);
    console.log(`Intern: ${intern.name} - Average Score: ${average.toFixed(1)}`);
});

console.log("------------------------");
console.log("Total Interns: " + interns.length);
