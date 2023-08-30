$(document).ready(function(){
    $(".list").click(function(){
      const dataValue = $(this).attr("data-filter")
      if(dataValue == "all-items"){
        $(".item").parent().show()
      }else{
        $(".item").not("." + dataValue).parent().hide()
        $(".item").filter("." + dataValue).parent().show()
        
        
      }
    }) 
  })
  $(".list").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
  })  