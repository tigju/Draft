$(document).ready(function(){
        $("#fullpage").fullpage({
            // sectionsColor: ["#ededed", '#ededed', '#ededed'],
            anchors: ['firstPage', 'secondPage', '3rdPage'],
            menu: "#menu",
            scrollOverflow: true,
            navigation: true,
            navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide'],
            showActiveTooltip: true,
            slidesNavigation: true,
            loopTop: false,
            loopBottom: true,
            loopHorizontal: true,
            verticalCentered: true,
            scrollBar: true,
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
                var loadedSlide = $(this);


                //first slide of the first section
                if(anchorLink == 'firstPage' && slideIndex == 0) {
                    loadedSlide.find(".name").animate({"fontSize":"40px"}, 2500);
                }
                //second slide of the first section
                if(anchorLink == 'firstPage' && slideIndex == 1) {
                  loadedSlide.find(".name").animate({"fontSize":"40px"}, 2500);
                }
                //third slide of the first section
                if(anchorLink == 'firstPage' && slideIndex == 2) {
                  loadedSlide.find(".name").animate({"fontSize":"40px"}, 2500);
                }

                if(anchorLink == "3rdPage" && slideIndex == 0) {
                    loadedSlide.find(".name").animate({"fontSize":"40px"}, 2500);
                }

                if(anchorLink == "3rdPage" && slideIndex == 1) {
                    loadedSlide.find(".name").animate({"fontSize":"40px"}, 2500);
                }

                if(anchorLink == "3rdPage" && slideIndex == 2) {
                    loadedSlide.find(".name").animate({"fontSize":"40px"}, 2500);
                }
                
            },

            afterLoad: function(link, index) {
                var loadedSection = $(this);
                //section1
                if(index == 1) {
                        $(".name").animate({"fontSize":"40px"}, 2500);
                }

                //section2
                if(index == 2) {
                    
                }

                //section3
                if(index == 3) {
                        $(".name").animate({"fontSize":"40px"}, 2500);
                }
            },
    
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
               $(".name").css("font-size", "30px");

               // var leavingSlide = $(this);
                //first slide of the first section
                // if(index == 1 && slideIndex == 0 && direction == "right" && nextSlideIndex == 1) {
                //     $("#section0 h1").fadeIn(function(){
                //         $("#section0 .intro .name").css({"display":"inline", "position":"absolute", "margin-top":"-2em"}).animate({"fontSize":"30px"}, 500);
                //     });
                // }

                // //second slide of the first section 
                // if(index == 1 && slideIndex == 1 && direction == "right" && nextSlideIndex == 2) {
                //     $("#section0 h1").fadeIn(function(){
                //         $("#section0 .intro .name").css({"display":"inline", "position":"absolute", "margin-top":"-2em"}).animate({"fontSize":"30px"}, 500);
                //     });
                // }

                // if(index == 1 && slideIndex == 2 && direction == "right" && nextSlideIndex == 0) {
                //     $("#section0 h1").fadeIn(function(){
                //         $("#section0 .intro .name").css({"display":"inline", "position":"absolute", "margin-top":"-2em"}).animate({"fontSize":"30px"}, 500);
                //     });
                // }
           }
    });
    $(window).stellar({
        horizontalScroll: false,
        horizontalOffset: 0
    });
});
