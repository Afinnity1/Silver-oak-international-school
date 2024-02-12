 //Js function for changing content on the page
 function changeContent(){
    document.getElementById("headerr").innerHTML ="Online Access";
    document.getElementById("textt").innerHTML ="Empower through education: Silver Oak's mission <br> includes seamless online access for learning success";

    document.getElementById("headerrT").innerHTML ="Learning Assimilation"; 
    document.getElementById("texttT").innerHTML ="Mission: Ignite children's learning, fostering curiosity, <br> creativity, and lifelong passion for knowledge.";
}

function rechangeContent(){
    document.getElementById("headerr").innerHTML ="Full Day Session";
    document.getElementById("textt").innerHTML ="Discover Silver Oak's engaging full-day sessions, <br> fostering growth and learning opportunities for all.";

    document.getElementById("headerrT").innerHTML ="Varied classes";
    document.getElementById("texttT").innerHTML ="Silver Oak offers diverse classes, catering to <br> individual interests and fostering well-rounded education.";

}


//Js counter up function
$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});



//  Js function for switching inbetween pages    
document.getElementById("navbar-home").onclick = function(){
    window.location.href = 'index.html'
}

document.getElementById("navbar-about").onclick = function(){
    window.location.href = 'about.html'
}

document.getElementById("navbar-gallery").onclick = function(){
    window.location.href = 'gallery.html'
}

document.getElementById("navbar-contact").onclick = function(){
    window.location.href = 'contact.html'
}

document.getElementById("gallery-button").onclick = function(){
    window.location.href = 'gallery.html'
}

document.getElementById("enroll-me").onclick = function(){
    window.location.href = 'about.html'
}