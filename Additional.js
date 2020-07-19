var typeMessage = ( function ( velocity ) {
    const container = document.body.appendChild (document.createElement ( "h4" ))
    var index = 0
    return function ( message ) {
      let num = index
      let text = ''
      let interval = setInterval (
        () => {
          if (text.length === (message.length - 1)) clearInterval(interval) 
          text += message [ num ]
          container.innerText = text
          num++
        },1000)
    }
  })( 1 )
  
  typeMessage ( `Welcome to the hell` )