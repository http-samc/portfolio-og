$(document).ready(function() {
    // On doc ready hide body to load at once
    $('body').hide();

    // Make request
    $.getJSON('https://api.jsonbin.io/b/60d2807d5ed58625fd170ad9/latest', function(JSON) {

        // Append data
        let hello = document.getElementById('hello');
        hello.innerHTML += JSON.hello;

        let projects = document.getElementById('projects');
        projects.innerHTML += JSON.projects;

        let tech = document.getElementById('tech');
        tech.innerHTML += JSON.tech;

        // Once information is added, loop through all URIs and generate links
        let colors = ["yellow", "red", "green", "magenta", "orange"];
        let links = document.getElementsByClassName("l");
        let previousColor = "";
        var elementColor;
        for (var i = 0; i < links.length; i++) {
            let element = links[i];
            while ((elementColor === previousColor)) // avoiding repeats
                elementColor = colors[Math.floor(Math.random() * colors.length)];
            previousColor = elementColor;
            element.style.color = elementColor;
            element.style.textDecoration = "none";
            element.style.fontWeight = "500";
        }

        // Show body on finish
        $('body').show();
    })
})