//주문영역 상품 이미지 view (작은 이미지 클릭 시 큰 이미지로 변경)
const big_img = document.querySelector('main .order .img_g .big img')
const mini_img = document.querySelectorAll('main .order .img_g .img_mini a')
console.log(big_img, mini_img)

mini_img.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 기능 막기
        console.log(index)
        big_img.src = `./images/product_0${index+1}.jpg`
    })
})

//주문영역 상품 옵션 선택
const brands = document.querySelector('#brand')
const galaxy = document.querySelector('#type_g')
const iphone = document.querySelector('#type_i')
console.log(brands, galaxy, iphone)

iphone.style.display = 'none' //아이폰 숨기기 (초기값)
galaxy.disabled = true //비활성화 (초기값)

brands.addEventListener('change',()=>{
    if(brand.options[2].selected == true){ //만약 브랜드 옵션의 3번째를 선택했다면 선택한 것이 참과 같을 때
        // console.log(true) 작동확인
        brand_dis(iphone, false)
    }else if(brand.options[1].selected == true){
        brand_dis(galaxy, false)
    }else {//필수옵션안내
        brand_dis(galaxy,true)
        galaxy.options[0].selected = true
    }
})

function brand_dis(target, boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

//기종 선택 시 주문영역에 기종명 출력하기
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#type_g option')
const iphone_op = document.querySelectorAll('#type_i option')
console.log(order_model, galaxy_op, iphone_op)

//갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])
})
//아이폰 기종 출력
iphone.addEventListener('click',()=>{
    let iphone_index = iphone.selectedIndex
    console.log(iphone_op[iphone_index])
})

//수량에 따른 가격변동
const num_input = document.querySelector('#order_num')
const total_price = document.querySelector('.order_product_num .btm_price span')
let price = 17000
let total
console.log(num_input, total_price, price)

num_input.addEventListener('change',()=>{
    if(num_input.value>0){
    console.log(num_input.value) //변경되는 값이 console에 뜨는지 확인하는 작업
    total = price*num_input.value
    console.log(total) //변경되는 수량에 따라 값도 변경되어 console에 나타나는지 확인
    total_price.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('최소 주문 수량입니다.')
        num_input.value = 1
    }
})

//reest 버튼 누르면 reset
const btn = document.querySelector('#cancle')
btn.addEventListener('click',()=>{
    // console.log(btn) 작동확인
    num_input.value = 1
    total_price.innerHTML = price.toLocaleString('ko-kr')
})