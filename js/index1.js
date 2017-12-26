 

    $(function(){
      $('.navbutton').click(function(){
        $('.nvatop').toggle();
      })
   
    })
  

$(function(){
  $('.c1_m').click( function(){
    if(window.innerWidth < 769){
        $('.nvatop').hide();
        $('.navli').css('background-color','none')
      }
     })
})
