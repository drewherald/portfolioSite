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

// description animations

const description = document.querySelectorAll('.animate-via-scroll')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animated-via-scroll')
        }
    })
}, {
    threshold: 0.5
})

for(let i =0; i<description.length; i++){
    const el = description[i]

    observer.observe(el)
}