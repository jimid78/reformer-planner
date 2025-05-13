// Exercise Database
const exerciseDatabase = [
    {
        name: "Leg Press",
        targetArea: "Legs",
        muscleGroup: "Quads",
        difficulty: "Beginner",
        videoUrl: "https://example.com/leg-press-video",
        springLevel: "2-4"
    },
    {
        name: "Plank",
        targetArea: "Core",
        muscleGroup: "Abs",
        difficulty: "Intermediate",
        videoUrl: "https://example.com/plank-video",
        springLevel: "1-3"
    },
    {
        name: "Push-up",
        targetArea: "Arms",
        muscleGroup: "Chest",
        difficulty: "Beginner",
        videoUrl: "https://example.com/pushup-video",
        springLevel: "2-4"
    },
    {
        name: "Squat",
        targetArea: "Legs",
        muscleGroup: "Glutes",
        difficulty: "Expert",
        videoUrl: "https://example.com/squat-video",
        springLevel: "3-5"
    }
    // Add more exercises as needed
];

// Function to generate and display selected filters
function generateClass() {
    let selectedItems = [];
    
    // Get selected filters (checkboxes)
    const checkboxes = document.querySelectorAll('.filter');
    
    // Loop through checkboxes and capture selected items
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    // Display selected filters in the summary section
    const selectionSummary = document.getElementById('selection-summary');
    if (selectedItems.length > 0) {
        selectionSummary.textContent = "You selected: " + selectedItems.join(', ');
    } else {
        selectionSummary.textContent = "No filters selected.";
    }

    // Filter exercises based on selected filters
    const filteredExercises = filterExercises(selectedItems);

    // Display filtered exercises
    displayExercises(filteredExercises);
}

// Function to filter exercises based on selected filters
function filterExercises(selectedFilters) {
    return exerciseDatabase.filter((exercise) => {
        return selectedFilters.every((filter) => 
            exercise.targetArea.includes(filter) || exercise.muscleGroup.includes(filter)
        );
    });
}

// Function to display filtered exercises
function displayExercises(exercises) {
    const exerciseSummary = document.getElementById('exercise-summary');
    exerciseSummary.innerHTML = ''; // Clear previous results

    if (exercises.length > 0) {
        exercises.forEach(exercise => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${exercise.name}</strong><br>
                                  Target Area: ${exercise.targetArea}<br>
                                  Muscle Group: ${exercise.muscleGroup}<br>
                                  Difficulty: ${exercise.difficulty}<br>
                                  Spring Level: ${exercise.springLevel}<br>
                                  <a href="${exercise.videoUrl}" target="_blank">Watch Video</a><br><br>`;
            exerciseSummary.appendChild(listItem);
        });
    } else {
        exerciseSummary.innerHTML = 'No exercises match the selected filters.';
    }
}

// Function to clear selections
function clearSelections() {
    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('.filter');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Clear selected filters and exercises
    const selectionSummary = document.getElementById('selection-summary');
    selectionSummary.textContent = "No filters selected.";

    const exerciseSummary = document.getElementById('exercise-summary');
    exerciseSummary.innerHTML = '';
}
