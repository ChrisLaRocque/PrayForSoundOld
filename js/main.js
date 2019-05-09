/* Loads Nav Onto Page */
$.get("nav.html", function(data){
    $("#navbar-frame").replaceWith(data);
});

/* Loads Footer Onto Page */
$.get("footer.html", function(data){
    $("#footer-frame").replaceWith(data);
});