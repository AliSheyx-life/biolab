const productList = document.querySelectorAll('.lenses-list__menu_item');
const productDes = document.querySelectorAll('.lenses-content__item');
let num = 0;

for(let i = 0; i < productList.length; i++) {
    productList[i].addEventListener('click', ()=>{
        document.querySelector('.lenses-list__menu_item.active').classList.remove('active');
        productList[i].classList.add('active');
        const attr = productList[i].getAttribute('data-num');
        
        for( let j = 0; j < productList.length; j++) {
            productDes[j].classList.remove('active');
        }
        
        productDes[attr].classList.add('active');
        
    });
};
