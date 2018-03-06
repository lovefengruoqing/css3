//添加随机分布，随机排列层叠顺序的功能

window.onload = function(){
  const pics = document.getElementsByTagName("img");
  let container = this.document.getElementsByClassName('container')[0];
  let cWidth = container.offsetWidth;
  let cHeight = container.offsetHeight;
  let temp;
  
  for(let i=0;i<pics.length;i++){
    temp = Math.ceil(Math.random()*cHeight);
    pics[i].style.top = temp>(0.8*cHeight)?(0.5*cHeight):temp+'px';
    temp = Math.ceil(Math.random()*cWidth);
    pics[i].style.left = temp>(0.8*cWidth)?(0.55*cWidth):temp+'px';
    pics[i].style.transform = 'rotate(' + Math.ceil(Math.random()*250) + 'deg)';
    pics[i].style.zIndex = Math.ceil(Math.random()*10);
  }
}