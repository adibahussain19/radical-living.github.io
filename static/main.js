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
            $(".navbar").css('background-color', '#febe41');
            $(".navbar-container").css('background-color', '#febe41');
            $("#brand").css('background-color', '#febe41');
            $("#brand").css('color', '#09542d');
            $(" .dropdown .dropbtn").css('background-color', '#febe41');
            $(".dropdown-content a").css('color', '#09542d');
            $(".dropdown-content a").css('background-color', '#febe41');
            $("a").css('color', '#09542d');
            $("button").css('background-color', '#09542d');
            $("#donate").css('color', '#febe41');
        },

        function(){
            $(".navbar").css('background-color', '#09542d');
            $(".navbar-container").css('background-color', '#09542d');
            $("#brand").css('background-color', '#09542d');
            $("#brand").css('color', '#febe41');
            $(" .dropdown .dropbtn").css('background-color', '#09542d');
            $(".dropdown-content a").css('color', '#febe41');
            $(".dropdown-content a").css('background-color', '#09542d');
            $("a").css('color', '#febe41');
            $("button").css('background-color', '#febe41');
            $("#donate").css('color', '#09542d');
        }
    )
})