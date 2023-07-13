const header = document.querySelector('header');
const gnb = document.querySelector('.gnb')
const gnbs = document.querySelectorAll('.gnb .menu');
gnbs.forEach((el) => {
  el.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    el.classList.add('on');
    el.querySelector('.depth').classList.add('on');
    header.classList.add('on');
  });
  el.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    el.classList.remove('on');
    el.querySelector('.depth').classList.remove('on');
    header.classList.remove('on');
  });
});


const start_btn = document.querySelector('.start');
const reset_btn = document.querySelector('.reset');
const wheel_box = document.querySelector('.wheel_boxs');
const true_point = [60, 120, 180, 240, 300, 360];
let enableClick = true;
start_btn.addEventListener('click', (e) => {
  const randomNumber = true_point[Math.floor(Math.random() * true_point.length)];
  if(enableClick){
    wheel_box.style.transform = `rotate(${1080 + randomNumber}deg)`
    wheel_box.style.transition = '3s'
    enableClick = false;
    if(randomNumber == 60 || randomNumber == 120 || randomNumber == 360 ){
      setTimeout(()=>{
        alert('정답')
      }, 3000)
    }else{
      setTimeout(()=>{
        alert('실패')
      }, 3000)
    }
  }
})
reset_btn.addEventListener('click', (e) => {
  wheel_box.style.transform = `rotate(0deg)`
  wheel_box.style.transition = '0.5s'
  enableClick = true;
})