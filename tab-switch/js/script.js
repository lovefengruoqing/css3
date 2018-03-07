function $(id) {
  return typeof id === 'string' ? document.getElementById(id) : id;
}


window.onload = function () {
  //获取鼠标划过或点击标签和要切换内容的元素
  let titles = $('notice-tit').getElementsByTagName('li'),
    divs = $('notice-con').getElementsByTagName('div');

  if (titles.length != divs.length) return;

  //遍历li
  for (let i = 0; i < titles.length; i++) {
    titles[i].id = i;
    titles[i].onmouseover = function () {
      // 清除所有li上面的class
      for (let j = 0; j < titles.length; j++) {
        titles[j].className = '';
        divs[j].style.display = 'none';
      }
      // 设置当前划过的li的class
      this.className = 'select';
      divs[this.id].style.display = 'block';
    }
  }
}