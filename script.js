var range = document.querySelector('.range')
var process = document.querySelector('.process')
var body = document.querySelector('body')
function updateProcess(percent) {
    process.style.width = `${percent}%`
    process.innerHTML = `<span>${percent}%</span>`
    body.style.background = `rgba(0, 0, 0, ${percent/100})`
}

range.addEventListener('mousemove',function(e){
    var processWidth = e.pageX - this.offsetLeft
    var percent = Math.round(processWidth * 100/this.offsetWidth )
    updateProcess(percent)
})
updateProcess(30)