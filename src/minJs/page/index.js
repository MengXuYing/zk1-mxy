"use strict";function init(){addEvent(),initSwiper(),initscroll()}function addEvent(){$("header").on("click","span",function(){$(this).addClass("active").siblings().removeClass("active")})}function initSwiper(){new Swiper(".swiper-container")}function initscroll(){new BScroll(".box");$.ajax({url:"/api/user",dataType:"json",success:function(n){render(n.data)}})}function render(n){var i="";n.forEach(function(n){i+='  <dl>\n                    <dt>\n                    <img src="img/'.concat(n.img,'" alt="">\n                </dt>\n                    <dd>\n                        <h4>').concat(n.title,'</h4>\n                        <div class="con">\n                            <p>币<span>').concat(n.price,"</span> </p>\n                            <p>").concat(n.type,'</p>\n                            <p><i class="iconfont icon-wode"></i>').concat(n.pep,"</p>\n                        </div>\n                    </dd>\n                </dl>")}),$(".menuList").html(i)}init();