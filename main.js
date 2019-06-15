
$(document).ready(function() {

  
  $('.soundbtn').click(function() {
    $(this).addClass('actv').siblings().removeClass('actv')
    $('.live').fadeIn(500)
    $('.musicContent').fadeOut(500)
    $('.welcome').fadeOut(500)
    $('.man').fadeOut(500)

  })
  $('.placebtn').click(function() {
    $(this).addClass('actv').siblings().removeClass('actv')
    $('.man').fadeIn(500)
    $('.musicContent').fadeOut(500)
    $('.welcome').fadeOut(500)
    $('.live').fadeOut(500)
    

  })
  $('.songsbtn').click(function() {
    $(this).addClass('actv').siblings().removeClass('actv')
    $('.musicContent').fadeIn(500)
    $('.live').fadeOut(500)
    $('.welcome').fadeOut(500)
    $('.man').fadeOut(500)
    
  })

$('.songs').click(function(){
  $(this).addClass('actv').siblings().removeClass('actv')
 let newSrc= $(this).attr("data-value")

 console.log(newSrc)
  $('#audioSource').attr('src', newSrc)
  audio.load()
  audio.play()
})


$('carousel').carousel({
  keyboard:true
})


})
