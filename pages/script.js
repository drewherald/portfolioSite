// header animations

setTimeout(() =>{
    document.getElementById("animatedName").classList.remove('typeAnimation')
    document.getElementById('unAnimated').classList.add('occupationType')
    document.getElementById('blurb').classList.add('blurb')
    document.getElementById('blurb').removeAttribute('id')
}, 2300)

setTimeout(() =>{
    document.getElementById('unAnimated').removeAttribute('id')
}, 6000)