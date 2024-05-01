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