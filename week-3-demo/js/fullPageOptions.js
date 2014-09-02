
$(document).ready(function(){
    var button = $("#nav-button");
    var width = $( window ).width();
    var menuItems;
    var listItems = $('nav li');
    var lightColor = "#ffffff !important";
    var darkColor = "#000000 !important";
    var darkColorHover = "#ffcc00";
    var lightColorHover = "#bada55";
    var menu = $("nav");
    var menuIsOut;
    var blackOut = $('#blackOut');
    var navText = $('nav li a');
    var navSVG = $('nav li path');
//check page color for navigation{



// Switch Mobile Menu
function menuDefault(){
    button.html('Menu');
    button.removeClass('activeButton');
    menu.removeClass('navOut');
    menuIsOut = true;
    blackOut.fadeOut();
  }
  
  function menuActive(){
    button.html('Close');
    button.addClass('activeButton');
    menu.addClass('navOut');
    menuIsOut = false;
    setTimeout(function(){
      blackOut.fadeIn('slow');
    },500);
    
  }

  function makeNavLight(){
    navText.css({
      'fill':lightColor,
      'color':lightColor
    });
    navSVG.addClass('svgWhite');
  }

  function makeNavDark(){
    navText.css({
      'fill': darkColor,
      'color': darkColor
    });

    navSVG.addClass('svgWhite');
  }

   


 
      if(width>600){
      $('#fullpage').fullpage({
        css3: true,
        navigation: false,
        resize: false,
        menu: '#navMenu',
        anchors: ['nav-1','nav-2','nav-3','nav-4','nav-5','nav-6','nav-7','nav-8', 'nav-9','nav-10'],
        scrollOverflow: true,
        // autoScrolling: false,
        //navigationPosition: 'right',
        // This is for chaning the navigation colors
        
        afterLoad: function (anchorLink, index) {
          menuItems = $('nav li path');
          listItems = $('nav li');
          lightColor = "#ffffff !important";
          darkColor = "#000000 !important";
          darkColorHover = "#bf5f00";
          lightColorHover = "#bf5f00";

          if(index == '1' || index == '3'|| index == '4'){
                makeNavLight();
            } else {
              makeNavDark();
            } 


          //checkPageColor(index);

      }
    
    });
} else if (width <= 2230 && (window.innerHeight < window.innerWidth)) {
    //fullpage.js object for: mobile and LANDSCAPE
    window.alert("Please use Landscape!");
      $('#fullpage').fullpage({
        css3: true,
        navigation: false,
        resize: false,
        anchors: ['nav-1','nav-2','nav-3','nav-4','nav-5','nav-6','nav-7','nav-8', 'nav-9','nav-10'],
        menu: '#navMenu',
        loopHorizontal: false,
        scrollOverflow: true,
        autoScrolling: false,
        // slidesNavigation: true,
        // normalScrollElements: '#testz',
        // touchSensitivity: 5,
         // normalScrollElementTouchThreshold: 1,
        afterLoad: function () {
          // window.alert('damn.');
          menuDefault();
        //   if(anchorLink === 'fourthSlide'){
        //     $.fn.fullpage.setAutoScrolling(false);
        // }
}



});
} else { 
  //fullpage.js object for: mobile and PORTRAIT (prefered layout)
  $('#fullpage').fullpage({
        css3: true,
        navigation: false,
        resize: false,
        anchors: ['nav-1','nav-2','nav-3','nav-4','nav-5','nav-6','nav-7','nav-8', 'nav-9','nav-10'],
        menu: '#navMenu',
        scrollOverflow: true,
        loopHorizontal: false,
        autoScrolling: true,
        // slidesNavigation: true,
        // normalScrollElements: '#testz',
        // touchSensitivity: 5,
         // normalScrollElementTouchThreshold: 1,
        afterLoad: function () {
          // window.alert('damn.');
          menuDefault();
          $.fn.fullpage.setAllowScrolling(true);
        //   if(anchorLink === 'fourthSlide'){
        //     $.fn.fullpage.setAutoScrolling(false);
        // }
}



});
}

 button.click(function(){
  
    if(menuIsOut === false){
      menuDefault();
      $.fn.fullpage.setAllowScrolling(true);
    }else{
      menuActive();
      $.fn.fullpage.setAllowScrolling(false);
      //$.fn.fullpage.setAutoScrolling(false);
      //window.alert('normal scroll');
    }

  });




}); //end onLoad() function


 


