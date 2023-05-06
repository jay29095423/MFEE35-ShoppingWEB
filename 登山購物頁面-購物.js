// 設定輪播左右按鍵

var carousel_btn_right = document.querySelector("#carousel_btn_right");
var carousel_btn_left = document.querySelector("#carousel_btn_left");
var click_count = 0;

var difference;




// 設定輪播圖片自動撥放樣式
var auto_carousel = 0;

var auto_carousel_interval = setInterval(() => {
    auto_carousel++;
    switch ((auto_carousel) % 6) {
        case 3:                        //中


            carousel_img_1.style.transform = "translatex(-200%)";
            carousel_img_2.style.transform = "translatex(-200%)";
            carousel_img_3.style.transform = "translatex(-200%)";
            carousel_img_4.style.transform = "translatex(-200%)";
            carousel_img_5.style.transform = "translatex(-200%)";

            click_count = 0;

            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"

            break;
        case 4:                        //右一


            carousel_img_1.style.transform = "translatex(-300%)";
            carousel_img_2.style.transform = "translatex(-300%)";
            carousel_img_3.style.transform = "translatex(-300%)";
            carousel_img_4.style.transform = "translatex(-300%)";
            carousel_img_5.style.transform = "translatex(-300%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            break;
        case 5:                        //右二


            carousel_img_1.style.transform = "translatex(-400%)";
            carousel_img_2.style.transform = "translatex(-400%)";
            carousel_img_3.style.transform = "translatex(-400%)";
            carousel_img_4.style.transform = "translatex(-400%)";
            carousel_img_5.style.transform = "translatex(-400%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(50, 50, 50, 0.7)"

            break;


        case 2:                        //左一


            carousel_img_1.style.transform = "translatex(-100%)";
            carousel_img_2.style.transform = "translatex(-100%)";
            carousel_img_3.style.transform = "translatex(-100%)";
            carousel_img_4.style.transform = "translatex(-100%)";
            carousel_img_5.style.transform = "translatex(-100%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            break;
        case 1:                        //左二


            carousel_img_1.style.transform = "translatex(000%)";
            carousel_img_2.style.transform = "translatex(000%)";
            carousel_img_3.style.transform = "translatex(000%)";
            carousel_img_4.style.transform = "translatex(000%)";
            carousel_img_5.style.transform = "translatex(000%)";

            dot_img_1.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"

            break;

    }

}, 3000);





//設定輪播圖片點擊時的樣式



carousel_btn_right.addEventListener("click", () => {


    clearInterval(auto_carousel_interval);

    auto_carousel = 0;

    click_count++

    // console.log(click_count)
    switch ((click_count) % 3) {
        case 0:                        //中


            carousel_img_1.style.transform = "translatex(-200%)";
            carousel_img_2.style.transform = "translatex(-200%)";
            carousel_img_3.style.transform = "translatex(-200%)";
            carousel_img_4.style.transform = "translatex(-200%)";
            carousel_img_5.style.transform = "translatex(-200%)";

            click_count = 0;

            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"

            break;
        case 1:                        //右一


            carousel_img_1.style.transform = "translatex(-300%)";
            carousel_img_2.style.transform = "translatex(-300%)";
            carousel_img_3.style.transform = "translatex(-300%)";
            carousel_img_4.style.transform = "translatex(-300%)";
            carousel_img_5.style.transform = "translatex(-300%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            break;
        case 2:                        //右二


            carousel_img_1.style.transform = "translatex(-400%)";
            carousel_img_2.style.transform = "translatex(-400%)";
            carousel_img_3.style.transform = "translatex(-400%)";
            carousel_img_4.style.transform = "translatex(-400%)";
            carousel_img_5.style.transform = "translatex(-400%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(50, 50, 50, 0.7)"

            break;
        case -1:

            carousel_img_1.style.transform = "translatex(-100%)"
            carousel_img_2.style.transform = "translatex(-100%)"
            carousel_img_3.style.transform = "translatex(-100%)"
            carousel_img_4.style.transform = "translatex(-100%)"
            carousel_img_5.style.transform = "translatex(-100%)"

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            break;



    }
})


carousel_btn_left.addEventListener("click", () => {


    click_count--

    // console.log(click_count)

    switch ((click_count) % 3) {
        case 0:                        //中


            carousel_img_1.style.transform = "translatex(-200%)";
            carousel_img_2.style.transform = "translatex(-200%)";
            carousel_img_3.style.transform = "translatex(-200%)";
            carousel_img_4.style.transform = "translatex(-200%)";
            carousel_img_5.style.transform = "translatex(-200%)";

            click_count = 0;

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"

            break;
        case -1:                        //左一


            carousel_img_1.style.transform = "translatex(-100%)";
            carousel_img_2.style.transform = "translatex(-100%)";
            carousel_img_3.style.transform = "translatex(-100%)";
            carousel_img_4.style.transform = "translatex(-100%)";
            carousel_img_5.style.transform = "translatex(-100%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            break;
        case -2:                        //左二


            carousel_img_1.style.transform = "translatex(000%)";
            carousel_img_2.style.transform = "translatex(000%)";
            carousel_img_3.style.transform = "translatex(000%)";
            carousel_img_4.style.transform = "translatex(000%)";
            carousel_img_5.style.transform = "translatex(000%)";

            dot_img_1.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"

            break;
        case 1:

            carousel_img_1.style.transform = "translatex(-300%)";
            carousel_img_2.style.transform = "translatex(-300%)";
            carousel_img_3.style.transform = "translatex(-300%)";
            carousel_img_4.style.transform = "translatex(-300%)";
            carousel_img_5.style.transform = "translatex(-300%)";

            dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            dot_img_4.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
            dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
            break;

    }

})


//設定輪播下的點


dot_img_1.addEventListener("click", () => {
    carousel_img_1.style.transform = "translatex(000%)";
    carousel_img_2.style.transform = "translatex(000%)";
    carousel_img_3.style.transform = "translatex(000%)";
    carousel_img_4.style.transform = "translatex(000%)";
    carousel_img_5.style.transform = "translatex(000%)";


    click_count = -2


    dot_img_1.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
    dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
});

dot_img_2.addEventListener("click", () => {


    carousel_img_1.style.transform = "translatex(-100%)";
    carousel_img_2.style.transform = "translatex(-100%)";
    carousel_img_3.style.transform = "translatex(-100%)";
    carousel_img_4.style.transform = "translatex(-100%)";
    carousel_img_5.style.transform = "translatex(-100%)";


    click_count = -1

    dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_2.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
    dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
});

dot_img_3.addEventListener("click", () => {


    carousel_img_1.style.transform = "translatex(-200%)";
    carousel_img_2.style.transform = "translatex(-200%)";
    carousel_img_3.style.transform = "translatex(-200%)";
    carousel_img_4.style.transform = "translatex(-200%)";
    carousel_img_5.style.transform = "translatex(-200%)";


    click_count = 0;

    dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_3.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
    dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
});

dot_img_4.addEventListener("click", () => {


    carousel_img_1.style.transform = "translatex(-300%)";
    carousel_img_2.style.transform = "translatex(-300%)";
    carousel_img_3.style.transform = "translatex(-300%)";
    carousel_img_4.style.transform = "translatex(-300%)";
    carousel_img_5.style.transform = "translatex(-300%)";


    click_count = 1

    dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_4.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
    dot_img_5.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
});

dot_img_5.addEventListener("click", () => {


    carousel_img_1.style.transform = "translatex(-400%)";
    carousel_img_2.style.transform = "translatex(-400%)";
    carousel_img_3.style.transform = "translatex(-400%)";
    carousel_img_4.style.transform = "translatex(-400%)";
    carousel_img_5.style.transform = "translatex(-400%)";


    click_count = 2;

    dot_img_1.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_2.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_3.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_4.style.backgroundColor = "rgba(116, 116, 116, 0.407)"
    dot_img_5.style.backgroundColor = "rgba(50, 50, 50, 0.7)"
});







// 設定漢堡動畫


var burger = document.getElementById("burger");
var burger_links = document.querySelector('#burger_links')
var burger_click = 0;



burger.addEventListener('click', () => {


    if (burger_click % 2 == 0) {

        burger_links.style.transform = "translate(0)";
    } else {

        burger_links.style.transform = "translate(-100%)";

    }

    burger_click++;

})








// 設定商品左拉的按鈕





var icon_btn = document.querySelectorAll(".icon_btn");
var goods_utility = document.querySelectorAll(".goods_utility");
var goods_content = document.querySelectorAll(".goods_content");
var goods_utility = document.querySelectorAll(".goods_utility");
var goods_item = document.querySelectorAll(".goods_item");
var goods_title = document.querySelectorAll(".goods_title");
var goods_input_price = document.querySelectorAll(".goods_input_price");
var function_btn_cart = document.querySelectorAll(".function_btn_cart");
var goods_input_number = document.querySelectorAll(".goods_input_number");
var color_btn = document.querySelectorAll(".color_btn");
var shopping_cart = document.getElementById("shopping_cart");
var cart_item_place = document.getElementById("cart_item_place");
var every_price = [];
var cart_total = document.querySelector(".cart_total");
var order = 0;
var cart_icon = document.querySelectorAll(".cart_icon")
var heart_icon = document.getElementsByClassName("heart_icons")
var heart_btn = document.querySelectorAll(".heart_btn")

// var price_temp = 0;






// 每個商品的設定

for (let i = 0; i < icon_btn.length; i++) {

    icon_btn[i].addEventListener("click", () => {


        // goods_item[i].style.transform='scale(1.5)'
        // goods_content[i].style.transform="translatex(-80%)";
        goods_utility[i].style.transform = "translatex(-100%)";



    })

    goods_utility[i].addEventListener("mouseleave", () => {

        goods_utility[i].style.transform = "translatex(0)";


    })





    // 設定加入購物車

    function_btn_cart[i].addEventListener("click", () => {
        cart_icon[i].style.color = "rgb(69, 69, 243)"

        //    parseInt(goods_input_price[i].innerHTML) * parseInt(goods_input_number[i].value);

        cart_item_place.innerHTML = cart_item_place.innerHTML + ` 
    <div class="cart_container">

    <img class="cart_pic" src="登山鞋連結4.jpg">
    <div class="shopping_cart_item">
        <p class="cart_item_title">${goods_title[i].innerHTML}</p>
        <p>數量:<input type="number" value="${parseInt(goods_input_number[i].value)}" min="1" class="cart_number"></p>
        <p class="cart_color">藍</p>
        <p>價格:<span class="cart_price">${parseInt(goods_input_price[i].innerHTML) * parseInt(goods_input_number[i].value)}</span>$</p>
        <button class="item_delete" >
        <span class="material-symbols-outlined">
            remove
        </span>
        </button>
      </div>
    </div> 
    `

        //設定價格清單

        every_price[order] = parseInt(goods_input_price[i].innerHTML) * parseInt(goods_input_number[i].value);
        order++;
        // console.log(every_price)
    })


}
// 設定總計

function total_price() {

    cart_total.innerHTML = 0;
    var price_temp = 0;
    for (let a in every_price) {

        //  console.log(every_price)
        // console.log(every_price[a])
        //  console.log(a);
        price_temp = price_temp + every_price[a];


    }

    cart_total.innerHTML = price_temp;
}
//設定刪除按鈕
var item_delete = [];
var cart_container = [];

function check_btn() {
    item_delete = document.querySelectorAll(".item_delete");
    console.log(every_price)      //價格陣列
    console.log(`order:${order}`)
    // console.log("刪除按鈕:")
    console.log(item_delete)      //刪除按鈕



    // 設定每個刪除按鈕動作

    for (let a = 0; a < item_delete.length; a++) {

        item_delete[a].style.display = 'block'

        item_delete[a].addEventListener("click", () => {

            // 讓元素消失
            cart_container = document.querySelectorAll(".cart_container")

            cart_container[a].style.display = 'none'


            //修改按鈕陣列、價格陣列內數值

            every_price.splice(a, 1)

            // item_delete.splice(a, 1)


            order = 0;
            console.log(a)
        }
        )
    }
}

//陣列內數值消失一次就好





//設定購物車動畫按鈕
function cart_open() {

    shopping_cart.style.transform = 'scale(1)';
    shopping_cart.style.transition = '.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
}




function cart_close() {

    shopping_cart.style.transform = 'scale(0)'
    shopping_cart.style.transition = '.5s'
}

// console.log(heart_icon)

// 設定其他動畫的效果

for (let x = 0; x < heart_icon.length; x++) {
    heart_icon[x].addEventListener("click", () => {

        heart_btn[x].style.color = "rgb(155, 3, 48)"
    })

}




function card_move(event) {

    if (event.clientX < (document.body.clientWidth / 2) ) {
        // console.log("左上")
        credit_card.style.transform = 'rotatey(-20deg)'


    } else {
        // console.log("左下") 
        credit_card.style.transform = 'rotatey(20deg)'
    }
} 



window.addEventListener("mousemove", card_move)


//設定結帳頁



var valid_num = document.querySelector('#valid_num');
var credit_card = document.querySelector('#credit_card');
var card_back_num = document.querySelector('#card_back_num');

valid_num.addEventListener("focus", () => {

    credit_card.style.transform = "rotatey(180deg) rotatez(0deg)";
    card_back_num.style.animation = " headup .5s linear infinite"
})
valid_num.addEventListener("blur", () => {

    credit_card.style.transform = "rotatey(0)";
    card_back_num.style.animation = "none"
})

var payment_1 = document.getElementById("payment_1")

function check_send() {
    payment_1.style.transform = 'scale(1)'

}
function check_no() {
    payment_1.style.transform = 'scale(0)'

}



// var card_number = document.getElementById("card_number")
var card_number_input = document.querySelectorAll(".card_number_input")
var date_input = document.querySelectorAll(".date_input")

// console.log(card_number);

for (let y = 0; y < card_number_input.length; y++) {
    card_number_input[y].addEventListener("focus", () => {
        card_number.style.animation = " headup .5s linear infinite"

    })
    card_number_input[y].addEventListener("blur", () => {
        card_number.style.animation = "none"

    })

}




function number_ani() {
    card_date.style.animation = " headup .5s linear infinite"

}
function number_ani_close() {

    card_date.style.animation = "none"
}


