  const singUpBtn = document.getElementById('singUp')
  const logInBtn = document.getElementById('logIn')
  const SigContainer = document.querySelector('.sign-up-container')
  const overlayRight = document.querySelector(".overlay-right")
  const signIn = document.querySelector('.sign-in-container')
  const overlayLeft = document.querySelector('.overlay-left')
  const boxContainer = document.querySelector('.box-container')


  logInBtn.addEventListener("click", () => {
     SigContainer.style.transform = ' translateX(-100%)'
     SigContainer.style.zIndex = '0'
     overlayRight.style.transform = ' translateX(0)'
     overlayLeft.style.transform = ' translateX(-200%)'
     signIn.style.transform = ' translateX(0%)'
     signIn.style.zIndex = '12'


  })

  singUpBtn.addEventListener("click", () => {

     overlayLeft.style.transform = ' translateX(0)'
     signIn.style.zIndex = '0'
     signIn.style.transform = ' translateX(-200%)'
     SigContainer.style.transform = ' translateX(0%)'
     SigContainer.style.zIndex = '11'
     overlayRight.style.transform = ' translateX(200%)'

  })