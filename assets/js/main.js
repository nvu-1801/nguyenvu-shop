

const macBuyBtns = document.querySelectorAll('.js-mac-buy-product')
const modal = document.querySelector('.js-mac-modal')
const modalContainer = document.querySelector('.js-mac-container')
const modalClose = document.querySelector('.js-mac-close')


//Hàm hiển thị Modal mua Mac Product ( Thêm class Open và Close  vào Modal)

function showbuyProduct() {
    modal.classList.add('open')
}

// Hàm ẩn Modal mua Mac Product ( Gỡ class Open của Modal)

function hidebuyProduct() {
   modal.classList.remove('open')
}

// Lặp qua từng thẻ button và nghe hành vi click 

for (const macBuyBtn of macBuyBtns) {
    macBuyBtn.addEventListener('click', showbuyProduct)
}

// Nghe hành vi click vào button close 

modalClose.addEventListener('click', hidebuyProduct)

modal.addEventListener('click', hidebuyProduct)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})