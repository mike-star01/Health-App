// Add Exercise functionality
document.querySelector('.add-btn').addEventListener('click', () => {
    const workoutArea = document.querySelector('#workout-area');
    const newSection = document.createElement('section');
    newSection.classList.add('exercise-section');
    
    const exerciseName = prompt("Enter Exercise Name:", "New Exercise");

    newSection.innerHTML = `
        <h2>
            <input type="text" value="${exerciseName}" class="exercise-name" />
            <span class="delete-checkmark">✔</span>
        </h2>
        <div class="exercise-table">
            <div class="row header">
                <div>Set</div>
                <div>Pounds</div>
                <div>Reps</div>
            </div>
            <div class="sets-container">
                <div class="row">
                    <div>1</div>
                    <div><input type="text" placeholder="45" class="kg-input"></div>
                    <div><input type="text" placeholder="12" class="reps-input"></div>
                    <div class="actions">
                        <button class="success-btn">✔</button>
                        <button class="remove-btn">✖</button>
                    </div>
                </div>
            </div>
            <button class="add-set">Add set</button>
        </div>
    `;
    workoutArea.appendChild(newSection);

    // Add exercise to the discard select dropdown
    const discardSelect = document.querySelector('.discard-select');
    const option = document.createElement('option');
    option.value = exerciseName;
    option.textContent = exerciseName;
    discardSelect.appendChild(option);

    // Attach delete event to new checkmark
    attachDeleteEvent(newSection);
});

// Attach functionality to delete checkmark on new exercise section
function attachDeleteEvent(exerciseSection) {
    const deleteCheckmark = exerciseSection.querySelector('.delete-checkmark');
    deleteCheckmark.addEventListener('click', () => {
        // Mark the exercise for deletion (visually)
        exerciseSection.classList.toggle('selected-for-deletion');
    });
}

// Discard Workout functionality (delete selected exercises from dropdown)
document.querySelector('.discard-btn').addEventListener('click', () => {
    const discardSelect = document.querySelector('.discard-select');
    const selectedExerciseName = discardSelect.value;

    if (selectedExerciseName) {
        const workoutArea = document.querySelector('#workout-area');
        const selectedExercise = Array.from(workoutArea.children).find(section => {
            return section.querySelector('input.exercise-name').value === selectedExerciseName;
        });

        if (selectedExercise) {
            // Remove selected exercise section
            selectedExercise.remove();

            // Also remove from the dropdown
            discardSelect.querySelector(`option[value="${selectedExerciseName}"]`).remove();
        }
    } else {
        alert('Please select an exercise to discard!');
    }
});

// Add Set functionality (restores previous set input method)
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-set')) {
        const exerciseSection = event.target.closest('.exercise-section');
        const setsContainer = exerciseSection.querySelector('.sets-container');
        const setCount = setsContainer.children.length + 1;  // Auto increment set number
        const newSetRow = document.createElement('div');
        newSetRow.classList.add('row');
        newSetRow.innerHTML = `
            <div>${setCount}</div>
            <div><input type="text" value="45" class="kg-input"></div>
            <div><input type="text" value="12" class="reps-input"></div>
            <div class="actions">
                <button class="success-btn">✔</button>
                <button class="remove-btn">✖</button>
            </div>
        `;
        setsContainer.appendChild(newSetRow);
    }

    // Remove Set functionality (remove the set row when "x" is clicked)
    if (event.target.classList.contains('remove-btn')) {
        const setRow = event.target.closest('.row');
        setRow.remove();
    }

    // Mark Set as completed when checkmark is clicked
    if (event.target.classList.contains('success-btn')) {
        const setRow = event.target.closest('.row');
        setRow.classList.toggle('completed');
    }
});

// Save Workout functionality
document.querySelector('.save-btn').addEventListener('click', () => {
    alert('Workout saved!'); // Placeholder - add your save logic here
});
