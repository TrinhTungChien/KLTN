let productmodal = document.querySelector('.product-modal');
let productBox = productmodal.querySelectorAll ('.modall');

document.querySelectorAll('.product-container .productmenu').forEach(productmenu =>{
    productmenu.onclick =() =>{
        productmodal.style.display = 'flex';
        let name = productmenu.getAttribute('data-name');
        productBox.forEach(modall =>{
           let target = modall.getAttribute('data-target');
           if (name == target){
            modall.classList.add('active');
           }
        });
    };
});


productBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    productmodal.style.display = 'none';
    };
});