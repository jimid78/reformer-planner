// Exercise Database
const exerciseDatabase = [
  {
      {
    "name": "Footwork - Toes",
    "description": "Press through the toes on the footbar to work quads and calves.",
    "targetAreas": ["Legs"],
    "muscleGroups": ["Quads", "Calves"],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Arches",
    "description": "Position feet over the footbar arches to activate the inner thighs.",
    "targetAreas": ["Legs"],
    "muscleGroups": ["Adductors", "Quads"],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels",
    "description": "Feet on heels pressing out through the reformer to target hamstrings.",
    "targetAreas": ["Legs"],
    "muscleGroups": ["Hamstrings", "Glutes"],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves.",
    "targetAreas": ["Legs"],
    "muscleGroups": ["Calves", "Ankles"],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred",
    "description": "Core stabilization exercise with pumping arms and controlled breathing.",
    "targetAreas": ["Core"],
    "muscleGroups": ["Abs", "Obliques"],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles",
    "description": "Circles with straps to strengthen hip mobility and core control.",
    "targetAreas": ["Legs", "Core"],
    "muscleGroups": ["Hip Flexors", "Abs"],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": ["Straps"],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Frog",
    "description": "Knees bent to straight position using straps, targeting inner thighs.",
    "targetAreas": ["Glutes", "Core"],
    "muscleGroups": ["Adductors", "Abs"],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": ["Straps"],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Coordination",
    "description": "Full body movement with arms and legs coordinated using straps.",
    "targetAreas": ["Core", "Arms"],
    "muscleGroups": ["Abs", "Shoulders"],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": ["Straps"],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage",
    "description": "Articulated spinal roll using straps to massage and mobilize spine.",
    "targetAreas": ["Back", "Core"],
    "muscleGroups": ["Spinal Erectors", "Abs"],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": ["Straps"],
    "level": "Intermediate",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Long Spine Massage",
    "description": "Spinal articulation with long leg extension and control.",
    "targetAreas": ["Core", "Legs"],
    "muscleGroups": ["Spinal Erectors", "Glutes"],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": ["Straps"],
    "level": "Advanced",
    "springSetting": "2 Red Springs"
  }
]
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
                                  `;
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
