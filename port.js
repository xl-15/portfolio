const workPage = document.querySelector('.screenWork')
const bioPage = document.querySelector('.screenBio')




function showWorkPage(){
    bioPage.style.display = 'none'
    workPage.style.display= 'flex'
}

function showBioPage(){
   
    bioPage.style.display='flex'
    workPage.style.display= 'none'
   
  
    bioPage.style.display = 'grid'
    workPage.style.display= 'none'
   
   
   
}

// if window is > than 660, display bioPage.style.display='grid'
