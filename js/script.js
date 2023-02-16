if(navigator.userAgent.match(/(iPhone|iPod|Android)/)){
  /* スマホ用JS */
}else{
  /* PC用JS */
  /* tel属性があるa要素のみ、リンクを無効 */
  const telLink = document.querySelectorAll('a[href^="tel"]');
  for(let i = 0, count = telLink.length; i < count; i++){
    telLink[i].addEventListener('click', function(e){
      e.preventDefault();//デフォルトを無効化
    });
  }
}

// min-width:768px
window.addEventListener("resize", () => {
  const btnOpen = document.getElementById('btnOpen');
  const btnClose = document.getElementById('btnClose');
  const menu = document.getElementById('menu');
  if(window.innerWidth<768){
    btnOpen.classList.remove('cl');
    btnOpen.classList.add('op');
    btnClose.classList.add('cl');
    menu.classList.add('cl');
  }else{
    btnOpen.classList='icon cl';
    btnClose.classList='icon cl';
    menu.classList='';
  }
});

//開く
btnOpen.addEventListener('click',function(){
  // alert('OPEN');
  menu.classList.add('op');
  menu.classList.remove('cl');
  btnOpen.classList.remove('op');
  btnOpen.classList.add('cl');
  btnClose.classList.remove('cl');
  btnClose.classList.add('op');
  
})
btnClose.addEventListener('click',function(){
  // alert('close');
  menu.classList.add('cl');
  menu.classList.remove('op');
  btnOpen.classList.remove('cl');
  btnOpen.classList.add('op');
  btnClose.classList.remove('op');
  btnClose.classList.add('cl');
 
})
