const cols = document.querySelectorAll(".col")

document.addEventListener('keydown' , (event) => {
        if (event.code.toLowerCase() === 'space') {
            setRandomColors()
        }
        
})

// function genererateRandomColors() {
//   // RGB цвета
//   // #FF0000 - red
//   // #00FF00 - green
//   // #0000FF - blue

//   const hexCodes = "0123456789ABCDEF"
//   let color = ""
//   for (let i = 0; i < 6; i++) {
//     color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//   }
//   return "#" + color
// } закоментировал так как добавил библиотеку цветов chroma и вывел метод chroma.random , что равно моей функции

function setRandomColors() {
  cols.forEach((col) => {
    const text = col.querySelector("h2")
    const button = col.querySelector("button")
    const color = chroma.random()

    text.textContent = color
    col.style.background = color

    setTextcolor(text, color)
    setTextcolor(button, color)
  })
}
// text - дом элемент (h2)
function setTextcolor(text, color) {
    const luminance = chroma(color).luminance() // const luminance измеряется от 0 до 1
    text.style.color = luminance > 0.5 ? 'black' : 'white' // тернапный оператор
}

setRandomColors()
