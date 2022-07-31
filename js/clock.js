/** @format */

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//interval - 연속적으로 일정간격으로 이벤트 발생
// setInterval(sayHello, 5000);

//setTimeout - 일정 시간 후 이벤트 실행됨
// setTimeout(sayHello, 5000);
