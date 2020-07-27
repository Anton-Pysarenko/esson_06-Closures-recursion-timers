let elem = document.body.appendChild(document.createElement('h3'))
function clock (time) {
  setTimeout(
    function() {
      let date = new Date()
      elem.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      return time === 0 ? elem : clock(-- time)
    },1000
  )
}

clock(5)



/*et elem = document.body.appendChild(document.createElement('h3'))
let time = 5
const clock = setInterval(() => {
  if (time >= 0) {
    let date = new Date()
    elem.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    time--
  } else clearInterval(time) 
},1000)*/