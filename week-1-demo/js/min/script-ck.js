$("nav").hover(function(){$("nav").addClass("moveOut"),$("nav li span").css("margin-left","15px")},function(){$("nav").removeClass("moveOut"),$("nav li span").css("margin-left","55px")}),$("nav li").each(function(){var n=$(this).find("path");$(this).hover(function(){$(this).css({color:"#fff"}),$(n).attr({fill:"#fff"})},function(){$(this).css({color:"#848484"}),$(n).attr({fill:"#848484"})})});