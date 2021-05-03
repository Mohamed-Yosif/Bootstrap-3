/* Sub Menue */
let sub = document.querySelector('.sub');
sub.onclick = function() {
    $('ul.menu').slideToggle();
    $('.sub span').toggleClass('active')
};
/* Button In Extra Small */
$('nav button').on('click',function(e) {
    $('.navigation').toggleClass('open')
})
/* Add Class Active To Links On Click */
$('.navigation ul li').click(function() {
    if($(this).hasClass('sub')){
        $(this).siblings().removeClass('active')
    } else {
        $(this).addClass('active').siblings().removeClass('active')
    };
});
/* Padding Body Top Depends On Height Of Navigation */
$('body').css('padding-top',$('nav').innerHeight());
/* Create Thems Color */
let color = ['#c0392b','#2980b9','#8e44ad','#16a085','#F79F1F'];
color.forEach(items => {
    let li = document.createElement('li');
    li.setAttribute('data-color',items);
    li.style.backgroundColor = items;
    let ul = document.querySelector('.tools ul');
    ul.append(li);
});
/* Show Tools Window */
$('.tools .icons').on('click',function() {
    $(this).parent().toggleClass('hidee');
});
/* Change Thems Color Depends On Css Variables */
let ulli = document.querySelectorAll('.tools ul li');
ulli.forEach(i => {
    i.addEventListener('click' , function() {
        document.body.style.setProperty('--mainColor', this.getAttribute('data-color'))
    });
});
/* Fade Out Landing Page On Load Window */
window.onload = function() {
    $('body').css('overflow','auto');
    $('.landing .pall').fadeOut(1000);
    $('.landing').fadeOut(1000);
};
/* Prevent The Default from a In Navigation */
let a = document.querySelectorAll('nav a');
/* show About When We Scroll To it */
let content = document.querySelectorAll('.feat .container .col-lg-3');
/*Fill The Skils Part */
let part = document.querySelectorAll('.skil .content > div');
let array = Array.from(part);
let colors = ['#c0392b','#2980b9','#8e44ad','#16a085'];
window.onscroll = function() {
    if (window.pageYOffset > $('.about').offset().top -500 ){
        $('.about').addClass('scale');
    };
    for( i=0 ; i< content.length ; i++) {
        if(window.pageYOffset > content[i].offsetTop - 500) {
            content[i].firstElementChild.style.visibility = 'visible';
            if(! content[i].classList.contains('leftdiv')) {
                content[i].classList.add('leftdiv')
            };
        };
    };
    if (window.pageYOffset > $('.say').offset().top -300) {
        $('.say .container').addClass('traverse')
    };
    if (window.pageYOffset > $('.skil').offset().top - 300) {
        array.forEach((item,index) => {
            $(item).find('.progress').css({
                backgroundColor: `${colors[index]}`,
                width: `${item.getAttribute('data-percent')}%`
            });
        });
    };
    if(window.pageYOffset > 1000) {
        $('.goup').fadeIn()
    } else{
        $('.goup').fadeOut()
    };
};
/*Go Up Button */
$('.goup').on('click',function() {
    $('html').animate({
        scrollTop: '0'
    });
});
/*Shote Carousel */
$('#carousel-say').carousel({
    interval: 0
});
/*Prevent Defalt for all anchor href */
let alla = document.querySelectorAll('a');
a.forEach(item => {
    item.addEventListener('click' , function(e) {
        e.preventDefault();
    });
});
/*Init Wow Js */
