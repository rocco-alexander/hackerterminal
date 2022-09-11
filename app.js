let typespace = document.querySelector(".type-space")
let lineCount = 0
let lines = [] 
prevContent = []
document.querySelector('.input').addEventListener('keydown', function onEvent(event){   
    let typespace = document.querySelector(".type-space")
    let currentLine = document.querySelector(".typer")
    let input = document.querySelector(".input")

    // When the enters a carriage return
    if(event.keyCode === 13){
        prevContent.push(currentLine.textContent)
        currentLine.className="old" // ads an 'old' class so stop the cursor from appearing
        let oldLine = currentLine
        lines.push(oldLine)
        let newLine = document.createElement("h1")
        newLine.className='typer'
        typespace.appendChild(newLine)
        input.value = ""
        lineCount++
    }

    if(event.keyCode === 8 && currentLine.textContent.length === 1){
        if(lineCount == 0){
            return  
        }
        
        currentLine.remove()
        lines.pop().className='typer'
        input.value = prevContent.pop() + " "
        lineCount--
    }
    if(event.keyCode === 9){
        console.log("yeah")
        input.value += "    "
    }
})
document.querySelector('.type-space').addEventListener('click', function onEvent(event){   
    document.querySelector(".input").focus()
})

const printLetter = (event)=>{
    letter = (event.target.value)
    document.querySelector(".typer").textContent = letter 
}

window.setTimeout(function (){
    document.querySelector('.typer').focus()
},0)