const showMoreBtn = document.querySelector('.showMoreButton');
const hobbyContainer = document.querySelector('.hobbyContainer');

showMoreBtn.addEventListener('click',(e)=>{

    hobbyContainer.classList.toggle('showMoreImages');
    if(showMoreBtn.innerText === 'Show More') {
        showMoreBtn.innerText = 'Show Less';
    }else{
        showMoreBtn.innerText = 'Show More';
    }
})

// alert("hi");