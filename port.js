const workPage = document.querySelector('.screenWork')
const bioPage = document.querySelector('.screenBio')




function showWorkPage(){
    bioPage.style.display = 'none'
    workPage.style.display= 'flex'
}

function showBioPage(){
   if(window.innerWidth < 660){
    bioPage.style.display='flex'
    workPage.style.display= 'none'
   }
   else{
    bioPage.style.display = 'grid'
    workPage.style.display= 'none'
   }
   
   
}

 