console.log("Main.js connected")

$(document).ready(function(){
    // $(".dropbtn").hover(
    // function(){
    //     console.log("function in");
    //     $(".navbar").css({'background-color': '#ded2aa', 'height': '200px'});
    //     $(".navbar-container").css('background-color', '#ded2aa');
    //     $("#brand").css('background-color', '#ded2aa');
    //     $(" .dropdown .dropbtn").css('background-color', '#ded2aa');
    // })

    $(".navbar").hover(
        function(){
            $(".navbar").css('background-color', '#ffffff');
            $(".navbar-container").css('background-color', '#ffffff');
            $("#brand").css('background-color', '#ffffff');
            $("#brand").css('color', '#fbe609');
            $(" .dropdown .dropbtn").css('background-color', '#ffffff');
            $(".dropdown-content a").css('color', '#67b983');
            $(".dropdown-content a").css('background-color', '#ffffff');
            $("a").css('color', '#67b983');
            $("button").css('background-color', '#fbe609');
            $("#donate").css('color', '#67b983');
        },

        function(){
            $(".navbar").css('background-color', '#67b983');
            $(".navbar-container").css('background-color', '#67b983');
            $("#brand").css('background-color', '#67b983');
            $("#brand").css('color', '#fbe609');
            $(" .dropdown .dropbtn").css('background-color', '#67b983');
            $(".dropdown-content a").css('color', '#ffffff');
            $(".dropdown-content a").css('background-color', '#67b983');
            $("a").css('color', '#ffffff');
            $("button").css('background-color', '#fbe609');
            $("#donate").css('color', '#67b983');
        }
    )
})