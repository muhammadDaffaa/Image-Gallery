const thumbs = document.querySelectorAll(".thumb")
const jumbo = document.querySelector(".jumbo")

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener('click', (e) => {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade')
    setTimeout(() => {
      jumbo.classList.remove('fade')
    }, 500)

    // thumbs[i].className = 'thumb'
    // e.target.classList.add('active')
    // console.log(e.target);
  })

}