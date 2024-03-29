



    //var nav = $('nav');
    var menuItems;
    var listItems = $('nav li');
    var lightColor = "#ffffff";
    var darkColor = "#000000";
    var darkColorHover = "#ffcc00";
    var lightColorHover = "#bada55";
    var darkBG;

    $(document).ready(function(){

      $('#fullpage').fullpage({
        css3: true,
        navigation: true,
        resize: false,
        anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide'],
        menu: '#navMenu',

        // autoScrolling: false,
        //navigationPosition: 'right',


        // This is for chaning the navigation colors

        afterLoad: function (anchorLink, index) {
          menuItems = $('nav li path');
          listItems = $('nav li');
     lightColor = "#ffffff";
     darkColor = "#000000";
     darkColorHover = "#bf5f00";
     lightColorHover = "#bf5f00";
          
          

          switch (index) {
            case 1:
            //menu.addClass('removeNav');
            darkBG = true;
            menuItems.attr({"fill":lightColor});
            $('nav li').css("color",lightColor);
            
            break;
          case 2: //bright page
          darkBG = false;
          menuItems.attr({"fill":darkColor});
          listItems.css("color",darkColor);
          break;
          case 3: //dark page
          darkBG = true;
          menuItems.attr({"fill":lightColor});
          listItems.css("color",lightColor);

          break;
          case 4: //dark page
          darkBG = true;
          menuItems.attr({"fill":lightColor});
          listItems.css("color",lightColor);
          break;

        }
        if(darkBG){

        $("nav li").each(function() {

          var currentSVG = $(this).find("path");
          $(this).hover(
        function() {
        $(this).css({"color":lightColorHover}); // Hover State on Dark Page
        $(currentSVG).attr({"fill":lightColorHover}); // Hover State on Dark Page
      }, function() {
        $(this).css({"color":lightColor}); // Normal State on Dark Page
        $(currentSVG).attr({"fill":lightColor}); // Normal State on Dark Page
      });

        });
    


  }

  if(darkBG === false){



        $("nav li").each(function() {
          var currentSVG = $(this).find("path");
        $(this).hover(
          function() {
              
        $(this).css({"color":darkColorHover}); // Hover State on Dark Page
        $(currentSVG).attr({"fill":darkColorHover}); // Hover State on Dark Page
      }, function() {
        $(this).css({"color":darkColor}); // Normal State on Dark Page
        $(currentSVG).attr({"fill":darkColor}); // Normal State on Dark Page
      });

        });

      }
     

      }
    });







    


 // 
});
