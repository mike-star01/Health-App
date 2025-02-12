document.addEventListener('DOMContentLoaded', function () {
    const addExerciseBtn = document.getElementById('add-exercise-btn');
    const mainContent = document.getElementById('main-content');

    function createExerciseSection(exerciseName) {
        const exerciseSection = document.createElement('div');
        exerciseSection.classList.add('exercise-section');

        exerciseSection.innerHTML = `
            <div class="exercise-header">
                <input type="text" value="${exerciseName}" class="exercise-title" readonly>
                <button class="delete-btn">✖</button>
            </div>
            <div class="exercise-table">
                <div class="row header">
                    <div>Set</div>
                    <div>Weight (kg)</div>
                    <div>Reps</div>
                    <div>Actions</div>
                </div>
                <div class="sets-container"></div>
            </div>
            <button class="add-set">Add Set</button>
        `;

        const deleteBtn = exerciseSection.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            exerciseSection.remove();
        });

        const addSetBtn = exerciseSection.querySelector('.add-set');
        const setsContainer = exerciseSection.querySelector('.sets-container');

        addSetBtn.addEventListener('click', function () {
            addSet(setsContainer);
        });

        setsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('remove-btn')) {
                event.target.closest('.row').remove();
                updateSetNumbers(setsContainer);
            }
        });

        mainContent.appendChild(exerciseSection);
    }

    function addSet(setsContainer) {
        const setNumber = setsContainer.children.length + 1;
        const setRow = document.createElement('div');
        setRow.classList.add('row');

        setRow.innerHTML = `
            <div>${setNumber}</div>
            <input type="number" placeholder="Weight">
            <input type="number" placeholder="Reps">
            <div class="actions">
                <button class="success-btn">✔</button>
                <button class="remove-btn">✖</button>
            </div>
        `;

        setsContainer.appendChild(setRow);
        updateSetNumbers(setsContainer);
    }

    function updateSetNumbers(setsContainer) {
        const rows = setsContainer.querySelectorAll('.row');
        rows.forEach((row, index) => {
            row.querySelector('div:first-child').textContent = index + 1;
        });
    }

    addExerciseBtn.addEventListener('click', function () {
        // Prompt user for exercise name after clicking "Add Exercise"
        const exerciseName = prompt("Enter the exercise name:");

        if (exerciseName && exerciseName.trim() !== "") {
            createExerciseSection(exerciseName);
        }
    });
});

// Event delegation for dynamically added elements
document.addEventListener('click', (event) => {
    // Mark Set as completed
    if (event.target.classList.contains('success-btn')) {
        const setRow = event.target.closest('.row');
        setRow.classList.toggle('completed');
    }
});
