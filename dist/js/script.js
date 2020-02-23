const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('#header');
    const body = document.querySelector('#body');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        header.classList.toggle('header-fade');
        body.classList.toggle('scroll-hidden');



        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '' ;   
            } else {
                link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7}s`;
            }
        });

       

    });
};

navSlide();