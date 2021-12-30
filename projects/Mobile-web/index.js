window.onload = function(){
    //创建一个数组，用于储存图片路径
    const imgArr = ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"];
    let index = 0;//用于储存当前轮播图中显示的图片索引
    //获取到轮播图的图片元素
    const img = document.querySelector(".banner img");
    img.src = imgArr[index];

    //设置定时器，定时切换图片
    setInterval(function(){
        if(index<imgArr.length-1){
            img.src = imgArr[++index];
        }else{
            index = 0;
        }
    },2000);
}