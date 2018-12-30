var CategorySlide = function() {

}

CategorySlide.prototype = {
    categoryLeft: function() {
        // 1. 初始化左侧
        var swiper1 = new Swiper('#categoryLeft', {
            direction: 'vertical',
            //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
            slidesPerView: 'auto',
            //开启回弹效果
            freeMode: true,
            mousewheel: true,
        });
    },
    categoryRight: function() {
        // 2. 初始化右侧滑动
        var swiper2 = new Swiper('#categoryRight', {
            direction: 'vertical',
            //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
            slidesPerView: 'auto',
            //开启回弹效果
            freeMode: true,
            //初始化滚动条  必须子元素的高度超过父元素
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },
    //分类左侧点击
    categoryLeftClick: function() {
        var categorys = document.querySelectorAll('.category-left ul li a');

        for (var i = 0; i < categorys.length; i++) {
            categorys[i].index = i;
        }
        // 1. 给分类左侧的div注册点击事件
        var categoryLeft = document.querySelector('.category-left');
        categoryLeft.addEventListener('click', function(e) {
        		var categoryLeftHeight = categoryLeft.offsetHeight;
        		var ulHeight = document.querySelector('.category-left ul').offsetHeight;
        		var maxTranslateY = categoryLeftHeight-ulHeight;        		
            var translateY = -e.target.index * 46;
            if(translateY < maxTranslateY){
            	translateY = maxTranslateY;
            }
            console.log(translateY);
            var swiperWrapper = document.querySelector('.swiper-wrapper');
            swiperWrapper.style.transform = 'translate3d(0px, ' + translateY + 'px, 0px)';
            swiperWrapper.style.transition = 'all 0.3s';

            for (var i = 0; i < categorys.length; i++) {
                categorys[i].parentNode.classList.remove('active');                
            }
            e.target.parentNode.classList.add('active');
        });
    }
}


window.addEventListener('load', function() {
    //创建分类滑动对象的实例
    var categorySlide = new CategorySlide();
    //分别调用左侧右侧滑动方法
    categorySlide.categoryLeft();
    categorySlide.categoryRight();
    categorySlide.categoryLeftClick();
});
