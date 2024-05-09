// SearchBar
let box = document.querySelector('.box');
let searchIconOne = document.querySelector('.searchIcon1');

    searchIconOne.addEventListener('click', ()=>{
        box.classList.add("open");
    })

let searchIconTwo = document.querySelector('.searchIcon2');
    searchIconTwo.addEventListener('click', ()=>{
        box.classList.remove("open")
    })

// SearchBar Ends

let mobileBox = document.querySelector('.smallbox');
let searchIconSm = document.querySelector('.searchIconSm');
    searchIconSm.addEventListener('click', ()=>{
        mobileBox.classList.add("smOpen");
    })

let searchIconMobile = document.querySelector('.searchIconMobile');
    searchIconMobile.addEventListener('click', ()=>{
        mobileBox.classList.remove("smOpen");
    })

// SearchBar Sm  ends

// Banner Section
$(function(){
    // home banner slider
    $(".bannerSlider").slick({
        arrows: false,
        dots: true,
        dotsClass: "bannerDots container",
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".bannerSliderSm").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".productSlider").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "#productLeftArrow",
        nextArrow: "#productRightArrow",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    })

    // Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Bootstrap tooltips Ends

    // Deal of the day
    $('.timer').countdown('2024/8/10', function(event) {
      $('.days').html(event.strftime('%D'));
      $('.hours').html(event.strftime('%H'));
      $('.min').html(event.strftime('%M'));
      $('.sec').html(event.strftime('%S'));
    });
    // Deal of the day Ends
    
})
// Banner Section Ends