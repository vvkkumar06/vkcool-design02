
$(document).ready(function(){
    $("#menu-icon").click(function(){
        $("nav ul").toggle();
    });

        // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }
    $("nav ul li a[href^='#']").on('click', function(e) {

        // This sets the hash
        var target;
        target = this.hash;
      
        // Prevent default anchor click behavior
        e.preventDefault();
      
        
        // Animate The Scroll
        if(target){
        $('html, body').animate({
        scrollTop: $(target).offset().top -80
        }, 1200, function(){
        
        // Adds hash to end of URL
        return window.history.pushState(null, null, target);
      
        });
        }
      
        });
});
