$(document).ready(function() {
    // On doc ready hide body to load at once
    $('body').hide();

    // Make request
    $.getJSON('https://api.jsonbin.io/b/60d2807d5ed58625fd170ad9/latest', function(JSON) {

        // Append data
        for (var key in JSON) // utilizing one-liners because JSON keys = target elem's ID
            document.getElementById(key).innerHTML += JSON[key];

        // Setting up dynamic nonconsecutive repeating text link colors

        // all color options for our text links
        let colors = ["yellow",
            "red",
            "green",
            "magenta",
            "orange",
            "coral",
            "crimson",
            "fuchsia",
            "pink",
            "lightseagreen",
            "lightskyblue",
            "salmon",
            "indianred"
        ];
        let links = document.getElementsByClassName("l"); // getting all text links
        let previousColor = null; // we haven't chosen our first color yet
        var elementColor; // declare elementColor

        // Looping through the text links
        for (var i = 0; i < links.length; i++) {

            let element = links[i]; // shorthand for current text link
            while ((elementColor === previousColor)) // avoiding repeats
                elementColor = colors[Math.floor(Math.random() * colors.length)]; // random color selection
            previousColor = elementColor; // recording current selection for next loop

            // setting current text link style attrs
            element.style.color = elementColor;
            element.style.textDecoration = "none";
            element.style.fontWeight = "500";
        }

        // Show body on finish
        $('body').show();
    })
})