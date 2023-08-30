var imgNum = 1;

// setInterval(0) -> right(); ), 5800);

function right(){
    if(imgNum != 3){
    imgNum += 1;
    changeImg (imgNum, -1);
    }
    else{
    imgNum = 1; 
    changeImg(imgNum, +2);
    }
}





function left(){

if(imgNum != 1) {

ImgNum --1; changeImg(imgNum, +1);

else{

imgNum = 3;

changeImg (imgNum, -2);

}

function changeImg(value, count){

document.getElementById("imgs (value + count}").style.opacity= '0'; document.getElementById(img${value}").style.opacity= '1';

document.getElementById('circles(value+ count)).style.background transparent document.getElementById(circles(value)').style.background 'white';