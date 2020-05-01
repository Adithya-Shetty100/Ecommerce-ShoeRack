$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
//ul exists before so when event triggered, it opens if li is clicked following happens
// in on use parent element as it is present, and trigger event in children elements


$("ul").on("click","span",function(event){
    event.stopPropagation();//to prevent event bubbling
    $(this).parent().fadeOut(500,function(){ 
        $(this).remove()
    });  // remove necessary as fade out only makes display none so memory wasted
}); // .parent() refers to parent element of selected element and look closely at this operator

$("input[type='text']").keypress(function(event){
   if( event.which===13) {
       var a=$(this).val();
       $(this).val(""); // text is used for changing content in website, but val takes value stored
       $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+a+"</li>");
   }
})

$(".fas").click(function(){
    //$("#task").toggleClass("clicked");
    $("#task").fadeToggle(500);
})
// i tag of font awesome doesnt work in  version 5 coz it is now svg not icon element