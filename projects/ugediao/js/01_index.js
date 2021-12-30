/*第一个断点前页面的动画 */
window.onload = function(){
    /*设置导航条动画开始 */
    
    //当滚轮移动，导航条变大变黑
    document.onscroll = function(){
        //获取导航栏容器的DOM对象
        const nav_wrapper = document.querySelector(".nav-wrapper");
        //获取导航栏对象
        const nav = document.querySelector(".nav-wrapper .nav");
        //设置动画的过渡
        nav_wrapper.style.transition = "all 0.6s";
        nav.style.transition = "all 0.6s";

        //根据滚轮滚动的距离做出不同的响应动画
        if(document.documentElement.scrollTop > 5){
            nav_wrapper.style.backgroundColor = "#282B34E6";
            
            if(document.body.clientWidth < 768){
                nav.style.padding = "0px 16px";
                nav_wrapper.style.height = "45px";     
            }else if(document.body.clientWidth > 768 && document.body.clientWidth < 902){
                nav.style.padding = "0px"; 
                nav_wrapper.style.height = "45px";
            }else if(document.body.clientWidth > 902 ){
                nav.style.padding = "8px 0px"; 
                nav_wrapper.style.height = "79px";
            }
            
            
            
        }else{

            if(document.body.clientWidth < 768){
                nav.style.padding = "0px 16px";     
            }else if(document.body.clientWidth > 768){
                nav.style.padding = "0px"; 
            }
            nav_wrapper.style.backgroundColor = "rgba(0,0,0,0)";
            nav_wrapper.style.height = "60px";

        }
    }
    /*设置导航条动画结束 */


    /*设置点击搜索图标，出现搜索菜单动画开始 */
    //获取搜索图标和菜单DOM对象
    const search = document.querySelector(".first-wrapper .nav-wrapper .nav .right-tools .search");
    search.onclick = function(){
        if(document.body.clientWidth < 768){
            document.body.style.overflow = "hidden";
        }
        const searchWrapper = document.querySelector(".search-wrapper");
        const cancel = document.querySelector(".search-wrapper .search .cancel");
        searchWrapper.style.height = "100%";
        searchWrapper.style.width = "100%";
        searchWrapper.style.transition = "all 0.5s";
        searchWrapper.onclick = function(){
            if(document.body.clientWidth > 768){
                searchWrapper.style.height = "0px";
                searchWrapper.style.width = "0px";
                document.body.style.overflow = "visible";
            }
        }
        cancel.onclick = function(){
           searchWrapper.style.height = "0px";
           searchWrapper.style.width = "0px";
           document.body.style.overflow = "visible";
        }
    }
    const searchTitle = document.querySelector(".first-wrapper .nav-wrapper .nav .right-tools .search .search-title");
    //鼠标移入搜索图标，出现搜索小标题
    search.onmouseover = function(){
        searchTitle.style.display = "block";
    }
    //鼠标移出搜索图标，搜索小标题消失
    search.onmouseout = function(){
        searchTitle.style.display = "none";
    }
    /*设置点击搜索按钮，出现搜索菜单动画结束 */


     /*设置点击菜单图标按钮，出现菜单页面动画开始 */
     //获取菜单图标按钮对象
     const menu = document.querySelector(".first-wrapper .nav-wrapper .nav .right-tools .menu");
     menu.onclick = function(){
        const menuWrapper = document.querySelector(".menu-wrapper");
        const mWrapper = document.querySelector(".menu-wrapper .wrapper");
        const cancelMenu = document.querySelector(".menu-wrapper .wrapper .cancel");
        const items = document.querySelectorAll(".menu-wrapper .wrapper .items");
        if(document.body.clientWidth < 768){
            //获取菜单页面对象
            document.body.style.overflow = "hidden";
            menuWrapper.style.width = "100%";
            menuWrapper.style.transition = "all 0.3s";
            for(let i=0; i<items.length; i++){
                items[i].style.width = "100%";
            }
            items[0].style.transition = "all 0.4s";
            items[1].style.transition = "all 0.5s";
            items[2].style.transition = "all 0.6s";
            
        }else{
             //获取菜单页面对象
             document.body.style.overflow = "hidden";
             mWrapper.style.width = "350px";
             menuWrapper.style.width = "100%";
             menuWrapper.style.transition = "all 0.1s";
             for(let i=0; i<items.length; i++){
                 items[i].style.width = "100%";
             }
             items[0].style.transition = "all 0.4s";
             items[1].style.transition = "all 0.5s";
             items[2].style.transition = "all 0.6s";
        }
        cancelMenu.onclick = function(){
            menuWrapper.style.width = "0px";
            for(let i=0; i<items.length; i++){
                items[i].style.width = "0px";
                document.body.style.overflow = "visible";
            }
        }
     }


}


