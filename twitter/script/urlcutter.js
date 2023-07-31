const urls = document.querySelectorAll('.account__links-info-url');
const bodyWidth = document.body.clientWidth;
urls.forEach(item => {
    if (bodyWidth < 992 || bodyWidth > 992) {
        if (item.innerHTML.trim().length > 50 ) {
            item.innerHTML = item.innerHTML.trim().slice(0,50) + "...";
        }
    }
    if (bodyWidth < 576) {
        if (item.innerHTML.trim().length > 40 ) {
            item.innerHTML = item.innerHTML.trim().slice(0,40) + "...";
        }
    }
    if (bodyWidth < 500) {
        if (item.innerHTML.trim().length > 22 ) {
            item.innerHTML = item.innerHTML.trim().slice(0,22) + "...";
        }
    }
})
