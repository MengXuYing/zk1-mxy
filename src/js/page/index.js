/*
 * @Author: mengxuying 
 * @Date: 2018-12-03 09:32:24 
 * @Last Modified by: mengxuying
 * @Last Modified time: 2018-12-03 10:08:21
 */
//初始化
init()

function init() {
    //点击事件
    addEvent();
    //swiper
    initSwiper();
    //scroll
    initscroll();
}

function addEvent() {
    //头部点击
    $('header').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
}

//实例化swiper
function initSwiper() {
    var mySwiper = new Swiper('.swiper-container');


}

function initscroll() {
    var myScroll = new BScroll('.box');

    $.ajax({
        url: '/api/user',
        dataType: 'json',
        success: function(res) {
            render(res.data);
        }
    })
}

function render(data) {
    var str = '';

    data.forEach(function(file) {
        str += `  <dl>
                    <dt>
                    <img src="img/${file.img}" alt="">
                </dt>
                    <dd>
                        <h4>${file.title}</h4>
                        <div class="con">
                            <p>币<span>${file.price}</span> </p>
                            <p>${file.type}</p>
                            <p><i class="iconfont icon-wode"></i>${file.pep}</p>
                        </div>
                    </dd>
                </dl>`
    });

    $('.menuList').html(str);
}