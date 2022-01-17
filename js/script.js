$(document).ready(function(){

    $('.top_carousel ').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});
$('.owl-value').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2.7,
            margin:-10,
            nav:true
        },
        993:{
            items:3.2,
            margin:40,
            nav:true,
            loop:true
        },
        1100:{
            items:3.8,
            margin:40,
            nav:true,
            loop:true
        }
    }
})
// $('.owl-value').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })