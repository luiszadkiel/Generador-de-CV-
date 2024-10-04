const sidebar = document.getElementById('sidebar');

document.addEventListener('mousemove', (event) => {
    if (event.clientX < 110) {
        sidebar.classList.add('show');
    } else {
        sidebar.classList.remove('show');
    }
});

document.getElementById("add-skill-btn").addEventListener("click", function() {
    var container = document.getElementById("skills-container");
    var newRow = document.createElement("div");
    newRow.classList.add("row", "d-flex", "mt-4");
    var newColInput = document.createElement("div");
    newColInput.classList.add("col");
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.classList.add("form-control");
    newInput.placeholder = "Nombre del Skill";
    newColInput.appendChild(newInput);
    var newColStars = document.createElement("div");
    newColStars.classList.add("col");
    var ratingContainer = document.createElement("p");
    ratingContainer.classList.add("clasificacion");
    var uniqueName = "estrellas" + Date.now();
    
    for (var i = 5; i >= 1; i--) {
        var inputStar = document.createElement("input");
        inputStar.type = "radio";
        inputStar.name = uniqueName;
        inputStar.id = "radio" + i + uniqueName;
        inputStar.value = i;
        var labelStar = document.createElement("label");
        labelStar.setAttribute("for", inputStar.id);
        labelStar.innerHTML = "&#9733;";
        ratingContainer.appendChild(inputStar);
        ratingContainer.appendChild(labelStar);
    }
    newColStars.appendChild(ratingContainer);
    newRow.appendChild(newColInput);
    newRow.appendChild(newColStars);
    container.appendChild(newRow);
});

document.getElementById("btn-diomas").addEventListener("click", function() {
    var container = document.getElementById("software-container");
    var newRow = document.createElement("div");
    newRow.classList.add("row", "d-flex", "mt-4");
    var newColInput = document.createElement("div");
    newColInput.classList.add("col");
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.classList.add("form-control");
    newInput.placeholder = "Sotfware";
    newColInput.appendChild(newInput);
    var newColStars = document.createElement("div");
    newColStars.classList.add("col");
    var ratingContainer = document.createElement("p");
    ratingContainer.classList.add("clasificacion");
    var uniqueName = "estrellas" + Date.now();
    
    for (var i = 5; i >= 1; i--) {
        var inputStar = document.createElement("input");
        inputStar.type = "radio";
        inputStar.name = uniqueName;
        inputStar.id = "radio" + i + uniqueName;
        inputStar.value = i;
        var labelStar = document.createElement("label");
        labelStar.setAttribute("for", inputStar.id);
        labelStar.innerHTML = "&#9733;";
        ratingContainer.appendChild(inputStar);
        ratingContainer.appendChild(labelStar);
    }
    newColStars.appendChild(ratingContainer);
    newRow.appendChild(newColInput);
    newRow.appendChild(newColStars);
    container.appendChild(newRow);
});

document.getElementById("idioo").addEventListener("click", function() {
    var container = document.getElementById("languages-container");
    var newRow = document.createElement("div");
    newRow.classList.add("row", "d-flex", "mt-4");
    var newColInput = document.createElement("div");
    newColInput.classList.add("col");
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.classList.add("form-control");
    newInput.placeholder = "Idoma";
    newColInput.appendChild(newInput);
    var newColStars = document.createElement("div");
    newColStars.classList.add("col");
    var ratingContainer = document.createElement("p");
    ratingContainer.classList.add("clasificacion");
    var uniqueName = "estrellas" + Date.now();
    
    for (var i = 5; i >= 1; i--) {
        var inputStar = document.createElement("input");
        inputStar.type = "radio";
        inputStar.name = uniqueName;
        inputStar.id = "radio" + i + uniqueName;
        inputStar.value = i;
        var labelStar = document.createElement("label");
        labelStar.setAttribute("for", inputStar.id);
        labelStar.innerHTML = "&#9733;";
        ratingContainer.appendChild(inputStar);
        ratingContainer.appendChild(labelStar);
    }
    newColStars.appendChild(ratingContainer);
    newRow.appendChild(newColInput);
    newRow.appendChild(newColStars);
    container.appendChild(newRow);
});

document.getElementById("add-experience-btn").addEventListener("click", function() {
    var container = document.getElementById("experience-container");
    var newRow = document.createElement("div");
    newRow.classList.add("row", "d-flex", "mt-4");
    var newColExperience = document.createElement("div");
    newColExperience.classList.add("col", "mt-4");
    var newInputExperience = document.createElement("input");
    newInputExperience.type = "text";
    newInputExperience.classList.add("form-control");
    newInputExperience.placeholder = "Experiencia Laboral";
    newColExperience.appendChild(newInputExperience);
    var newColStartDate = document.createElement("div");
    newColStartDate.classList.add("col");
    var startDateLabel = document.createElement("p");
    startDateLabel.classList.add("mb-0", "text-center");
    startDateLabel.innerText = "Fecha de inicio";
    var newStartDateInput = document.createElement("input");
    newStartDateInput.type = "date";
    newStartDateInput.classList.add("form-control");
    newColStartDate.appendChild(startDateLabel);
    newColStartDate.appendChild(newStartDateInput);
    var newColEndDate = document.createElement("div");
    newColEndDate.classList.add("col");
    var endDateLabel = document.createElement("p");
    endDateLabel.classList.add("mb-0", "text-center");
    endDateLabel.innerText = "Fecha de Finalización";
    var newEndDateInput = document.createElement("input");
    newEndDateInput.type = "date";
    newEndDateInput.classList.add("form-control");
    newColEndDate.appendChild(endDateLabel);
    newColEndDate.appendChild(newEndDateInput);
    newRow.appendChild(newColExperience);
    newRow.appendChild(newColStartDate);
    newRow.appendChild(newColEndDate);
    container.appendChild(newRow);
});

document.getElementById("add-education-btn").addEventListener("click", function() {
    var container = document.getElementById("education-container");
    var newRow = document.createElement("div");
    newRow.classList.add("row", "d-flex", "mt-4");
    var newColExperience = document.createElement("div");
    newColExperience.classList.add("col", "mt-4");
    var newInputExperience = document.createElement("input");
    newInputExperience.type = "text";
    newInputExperience.classList.add("form-control");
    newInputExperience.placeholder = "Experiencia Laboral";
    newColExperience.appendChild(newInputExperience);
    var newColStartDate = document.createElement("div");
    newColStartDate.classList.add("col");
    var startDateLabel = document.createElement("p");
    startDateLabel.classList.add("mb-0", "text-center");
    startDateLabel.innerText = "Fecha de inicio";
    var newStartDateInput = document.createElement("input");
    newStartDateInput.type = "date";
    newStartDateInput.classList.add("form-control");
    newColStartDate.appendChild(startDateLabel);
    newColStartDate.appendChild(newStartDateInput);
    var newColEndDate = document.createElement("div");
    newColEndDate.classList.add("col");
    var endDateLabel = document.createElement("p");
    endDateLabel.classList.add("mb-0", "text-center");
    endDateLabel.innerText = "Fecha de Finalización";
    var newEndDateInput = document.createElement("input");
    newEndDateInput.type = "date";
    newEndDateInput.classList.add("form-control");
    newColEndDate.appendChild(endDateLabel);
    newColEndDate.appendChild(newEndDateInput);
});
