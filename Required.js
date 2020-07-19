let elem = document.body.appendChild(document.createElement('h3'))
let time = 5
const clock = setInterval(() => {
  if (time >= 0) {
    let date = new Date()
    elem.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    time--
  } else clearInterval(time) 
},1000)