$(document).ready(function() {
    hideSections();
    showSection("section-projects");
});

$("#button-projects").click(function() {
    showSection("section-projects");
});

$("#button-about").click(function() {
    showSection("section-about");
});

$("#button-contact").click(function() {
    showSection("section-contact");
});

function hideSections() {
    $("#section-projects").hide();
    $("#section-about").hide();
    $("#section-contact").hide();
}

function showSection(sectionName) {
    hideSections();
    
    switch (sectionName) {
        case "section-projects":
            $("#section-projects").show();
            break;
        case "section-about":
            $("#section-about").show();
            break;
        case "section-contact":
            $("#section-contact").show();
            break;
    }
}