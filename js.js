// 在页面上显示当前时间
let root = document.getElementById("root");
function clock(){
  let time = new Date().toUTCString();
  root.innerHTML = "Now the time is: "+time;
}
setInterval(clock,1000);