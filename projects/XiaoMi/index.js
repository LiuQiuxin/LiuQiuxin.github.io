/*轮播图动画的实现*/

window.onload = function(){
    //创建一个数组，将轮播图用到的图片路径存入数组中
    const imgArr = ["./img/banner/1.jpg","./img/banner/2.webp","./img/banner/3.webp","./img/banner/4.webp"];

    //创建轮播图当前显示的图片的索引
    let index = 0;
    //获取轮播图容器对象
    const banner = document.querySelector(".banner-wrapper .banner .banner-imgs li img");

    //获取操作轮播图的按钮DOM对象
    const next = document.querySelector(".banner-wrapper .banner .prev-next .next");
    const prev = document.querySelector(".banner-wrapper .banner .prev-next .prev");
    const pointers = document.querySelectorAll(".banner-wrapper .banner .banner-circle li a");

    //点击点按钮，切换轮播图
    for(let i=0; i<pointers.length; i++){
        pointers[i].onclick = function(){
            index = i;
            for(let j=0; j<pointers.length; j++){
                pointers[j].style.backgroundColor = "#FFFFFF66";
                pointers[j].style.border = "2px solid #00000066";
            }

            pointers[i].style.backgroundColor = "#00000066";
            pointers[i].style.border = "2px solid #FFFFFF66";
            banner.src = imgArr[index];

        }
    }

    //点击prev按钮，切换上一张图片
    prev.onclick = function(){
        if(index>0){
            banner.src = imgArr[--index];
        }else{
            index = imgArr.length-1;
            banner.src = imgArr[index];
        }

        for(let j=0; j<pointers.length; j++){
            pointers[j].style.backgroundColor = "#FFFFFF66";
            pointers[j].style.border = "2px solid #00000066";
        }
        pointers[index].style.backgroundColor = "#00000066";
        pointers[index].style.border = "2px solid #FFFFFF66";
    }

    //点击next按钮，切换下一张图片
    next.onclick = function(){
        if(index<imgArr.length-1){
            banner.src = imgArr[++index];
        }else{
            index = 0;
            banner.src = imgArr[index];
        }

        for(let j=0; j<pointers.length; j++){
            pointers[j].style.backgroundColor = "#FFFFFF66";
            pointers[j].style.border = "2px solid #00000066";
        }
        pointers[index].style.backgroundColor = "#00000066";
        pointers[index].style.border = "2px solid #FFFFFF66";
    }

    //设置定时器，定时切换图片
    setInterval(function(){
        if(index<imgArr.length-1){
            banner.src = imgArr[++index];
        }else{
            index = 0;
            banner.src = imgArr[index];
        }

        for(let j=0; j<pointers.length; j++){
            pointers[j].style.backgroundColor = "#FFFFFF66";
            pointers[j].style.border = "2px solid #00000066";
        }
        pointers[index].style.backgroundColor = "#00000066";
        pointers[index].style.border = "2px solid #FFFFFF66";
    },2000);

}