/* header toogle */
$(document).ready(function(){
    $('#menubtn').click(function(){
        $('ul').toggleClass('show');
        this.classList.toggle('fa-xmark')
    });
});
