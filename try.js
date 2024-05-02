const parentElement = document.querySelector('.faqbox__accordion')

parentElement.addEventListener('click', function(e) {
    const ele = e.target.closest('.faqbox__accordion--ele')
    const image = ele.querySelector('.faqbox__accordion--ele-title--img')
    const content = ele.querySelector('.faqbox__accordion--ele-content')

    if (ele) {
        content.classList.toggle('hidden')
        content.classList.contains('hidden') ?
            image.src = '/images/icon-plus.svg' :
            image.src = '/images/icon-minus.svg'
    }
})


// Smooth scrolling for navigation links
document.querySelectorAll('.slide a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// to open tg GTC from logo
function openGTC() {
    window.location.href = '';
}

function openMains() {
    window.location.href = '';
}

function openAdv() {
    window.location.href = '';
}

function openCsab() {
    window.location.href = '';
}

function openOth() {
    window.location.href = '';
}




document.addEventListener("DOMContentLoaded", function() {
    const coffeeButton = document.getElementById("coffee-button");

    // Expand the button after 20 seconds
    setTimeout(function() {
        coffeeButton.classList.add("expanded");
    }, 8000);

    // Contract the button after 30 seconds
    setTimeout(function() {
        coffeeButton.classList.remove("expanded");
    }, 20000);
});