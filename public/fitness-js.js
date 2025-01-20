
const API_KEY = "N5dWTX+Cx5yMpwC3tVR/Jw==E2Wzsqk4eJY7pwVQ";
const apiUrl = 'https://api.calorieninjas.com/v1/nutrition?query=';
//const query = 'half a cup of chicken fried rice';

//This script is to keep number inside circle-->

function resizeCircles(size) {
    const containers = document.querySelectorAll('.circular-progress-container');

    containers.forEach(container => {
    container.style.setProperty('--size', size + 'px');
    });
}

// Example usage:
// resizeCircles(100); // Uncomment and change the value to resize all circles

//This is to change percent inside circle
function updateProgress(circleId, progressValue, percentId) {
const circle = document.getElementById(circleId);
if (circle) {
    circle.style.setProperty('--target-progress', progressValue);
    document.getElementById(percentId).textContent=(progressValue + '%');
}


}

// Updating:
updateProgress('Protein', 75, 'p-percent');
updateProgress('Carbs', 95, 'c-percent');
updateProgress('Fat', 25, 'f-percent');
updateProgress('Sugar', 30, 's-percent');
updateProgress('Vitamins', 55, 'v-percent');


document.addEventListener("DOMContentLoaded", function() {
    // Function to add food item to the list
    function addFoodItem() {
        // Get the value of the food input
        const query = document.getElementById("fname");
        const foodItem = query.value.trim();  // Trim to remove any leading/trailing spaces

        if (foodItem) {
            // Get the list element where the food items will be added

            fetch(apiUrl + foodItem, {
                headers: { 'X-Api-Key': API_KEY }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const item = data.items[0];
                
                const name = item.name;
                const calories = item.calories;
                const servingSize = item.serving_size_g;
                const fat_total = item.fat_total_g;
                const fat_saturated = item.fat_saturated_g;
                const protein = item.protein_g;
                const sodium = item.sodium_mg;
                const potassium = item.potassium_mg;
                const cholesterol = item.cholesterol_mg;
                const carbs = item.carbohydrates_total_g;
                const fiber = item.fiber_g;
                const sugar = item.sugar_g;
            
                                
                updateProgress('Protein', protein, 'p-percent');
                updateProgress('Carbs', carbs, 'c-percent');
                updateProgress('Fat', fat_total, 'f-percent');
                updateProgress('Sugar', sugar, 's-percent');
                updateProgress('Vitamins', sodium, 'v-percent');



            })
            .catch(error => {
                console.error(error);
            });

        } else {
            alert("Please enter a food item.");
        }
    }

    // Attach the addFoodItem function to the "Add" button click event
    const addButton = document.getElementById("add-food-btn");
    addButton.addEventListener("click", addFoodItem);
});


//-------------------------------------------------------------------------

// Script for src cdnjs.cloudflare chart
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"

// Script for bar chart updating-->

const barValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const yValues = [55, 49, 44, 24, 45, 30, 40];
const barColors = ["orangered", "green","darkblue","orange","red","springgreen", "black"];

new Chart("barChart", {
type: "bar",
data: {
    labels: barValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Calorie Intake"
    }
}
});
          
//script for updating linchart

const lineValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("lineChart", {
type: "line",

data: {
    labels: lineValues,
    datasets: [{ 
    label: "Intake",
    data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
    borderColor: "mediumpurple",
    fill: false
    }, { 
    label: "Expenditure",
    data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
    borderColor: "lightsteelblue",
    fill: false
    }]
},

options: {
    legend: {display: true}
}

});


//-----------------------------


//script to add item to list

// JavaScript function to add an item to the list
function addItem() {
    // Get the value of the input field
    var newItem = document.getElementById("newItem").value;

    // Create a new list item element
    var li = document.createElement("li");

    // Set the text of the list item
    li.textContent = newItem;

    // Append the new item to the unordered list
    document.getElementById("itemList").appendChild(li);

    // Clear the input field
    document.getElementById("newItem").value = '';
}


