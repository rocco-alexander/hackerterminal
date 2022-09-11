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
        // typespace.scrollTo(newLine)

        lineCount++
        console.log(lines)
    }
    if(event.keyCode === 8 && currentLine.textContent == ""){
        if(lineCount == 0){
            return  
        }
        console.log(lines)
        currentLine.remove()
        console.log(lines[0])
        lines.pop().className='typer'
        document.querySelector(".input").value = prevContent.pop()
        lineCount--
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