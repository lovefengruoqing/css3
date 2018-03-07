function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {
  let index = 0,
    timer = null;

  //获取鼠标划过或点击标签和要切换内容的元素
  let titles = $('notice-tit').getElementsByTagName('li'),
    divs = $('notice-con').getElementsByTagName('div');

  if (titles.length != divs.length) return;

  //遍历li
  for (let i = 0; i < titles.length; i++) {
    titles[i].id = i;
    titles[i].onmouseover = function () {
      //如果存在准备执行的定时器，立刻清除,重新计时，防止出现冲突
      clearTime(timer);
      // 要用变量来接收暂存，否则会出现问题
      index = this.id;

      // 延迟半秒执行
      // setTimeout是window对象的方法
      timer = setTimeout(changeOption, 500);
    }
    titles[i].onmouseout = function () {
      clearTime(timer);
      timer = setInterval(autoPlay, 2000);
    }
  }

  clearTime(timer);
  timer = setInterval(autoPlay, 2000);

  function changeOption() {
    for (let j = 0; j < titles.length; j++) {
      titles[j].className = '';
      divs[j].style.display = 'none';
    }
    titles[index].className = 'select';
    divs[index].style.display = 'block';
  }

  function autoPlay() {
    for (let j = 0; j < titles.length; j++) {
      if (titles[j].className == 'select') {
        index = j == (titles.length - 1) ? 0 : j + 1;
      }
    }
    changeOption();
  }
  
  function clearTime(timer){
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
}