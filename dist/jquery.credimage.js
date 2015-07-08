/*! credimage - v1.0.0 - 2015-07-07
* Copyright (c) 2015 Aymeric Bouchereau; Licensed CC BY-SA 4.0 */
(function( $ ){

  var text = "&copy;";
  var countID = 0;
  var timeouts = [];

  $.fn.credimage = function(options) {

    var settings = $.extend({
      margin:15,
    },options);
    
    function getImageRights(el){
      var res = "";
      var author = el.data("ci-author");
      var link = el.data("ci-link");
      var license = el.data("ci-license");

      if(author !== undefined || link !== undefined || license !== undefined){
        if(author !== undefined && link !== undefined){
          res = "by <a target='_blank' href='"+link+"'>"+author+"</a>";
        }
        else if(author !== undefined && link !== undefined){
          res = "by <a target='_blank' href='"+link+"'>"+author+"</a>";
        }
        else if(author === undefined){
          res = "<a target='_blank' href='"+link+"'>Source</a>";
        }
        else if(link === undefined){
          res = "by "+author;
        }
        else{
          res = 0;
        }

        if(license !== undefined){res += " / "+license;}
      }
      else{
        res = 0;
      }

      return res;
    }

    this.each(function(){
      var el = $(this);

      // Get image's copyrights
      var rights = getImageRights(el);

      if(rights !== 0){
        // Get width, length, X, Y
        var widthImage = el.width();
        var lengthImage = el.height();
        var positions = el.offset();
        el.addClass("ci_img_"+countID);
        el.addClass("ci_img");

        // Init credimage's box
        var box = "<div id='ci_b_"+countID+"' class='ci-box'>"+text+"<span>"+rights+"</span></div>";
        el.after(box);
        var posXBox = positions.left + widthImage - settings.margin - $("#ci_b_"+countID).width();
        var posYBox = positions.top + lengthImage - settings.margin - $("#ci_b_"+countID).height();
        $("#ci_b_"+countID).css({
          top:posYBox+"px",
          left:posXBox+"px"
        });

        countID++;
      }
    });

    // Events
    $(window).resize(function(){
      var elements = $(".ci-box");
      elements.each(function(){
        var id = $(this).attr("id").substr(5);
        var img = $(".ci_img_"+id);
        var posX = img.offset().left + img.width() - settings.margin - $(this).width();
        var posY = img.offset().top + img.height() - settings.margin - $(this).height();
        $(this).css({
          top:posY+"px",
          left:posX+"px"
        });
      });
    });
    $(".ci-box").click(function(){
      var el = $(this);
      if(el.children("span").css("opacity") === 0){
        el.stop().css("opacity",1);
        $(".ci_img:hover+.ci-box, .ci-box:hover").css("display","block");
        el.children("span").stop().addClass("ci-box-hover");
      }
      else{
        el.stop().css("opacity","");
        $(".ci_img:hover+.ci-box, .ci-box:hover").css("display","");
        el.children("span").stop().removeClass("ci-box-hover");
      }
    });
    $(".ci-box > span").mouseleave(function(){
      var el = $(this).parent();
      timeouts.push(setTimeout(function(){
        el.stop().css("opacity","");
        el.stop().css("display","");
        $(".ci_img:hover+.ci-box, .ci-box:hover").css("display","");
        el.children("span").stop().removeClass("ci-box-hover");
        clearTimeout();
      },2000));
    });
    $(".ci-box > span").mouseenter(function(){
      for(var i=0;i<timeouts.length;i++){
        clearTimeout(timeouts[i]);
      }
      timeouts = [];
    });

    $(".ci-box").mouseleave(function(){
      var el = $(this);
      timeouts.push(setTimeout(function(){
        el.stop().css("opacity","");
        el.stop().css("display","");
        $(".ci_img:hover+.ci-box, .ci-box:hover").css("display","");
        el.children("span").stop().removeClass("ci-box-hover");
        clearTimeout();
      },2000));
    });
    $(".ci-box").mouseenter(function(){
      var lastTimeouts = timeouts.length-1;
      clearTimeout(lastTimeouts);
    });


    return this;
  }; 
})( jQuery );
