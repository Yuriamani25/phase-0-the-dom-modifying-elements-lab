// Write your code here!
const mainId = document.getElementById('main')
mainId.remove()

const newHeader = document.createElement('h1')
//document.body.append(newHeader)

newHeader.id = "victory";
newHeader.textContent = "Yuri is the champion";