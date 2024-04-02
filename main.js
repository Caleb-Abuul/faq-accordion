let titles = document.getElementsByClassName('title');

let tileTitles = [...titles];
tileTitles.forEach(title => {
    title.addEventListener('click', (e)=>{
        if (document.getElementById(title.id + '-hide').classList.contains('hide')){
            document.getElementById(title.id + '-hide').classList.toggle('hide');
        }
        for (let i = 1; i <= 4; i++){
            let hideContent = document.getElementById(i + '-hide');
            hideContent.classList.add('hide');
        }
        let tile = document.getElementById(title.id + '-hide');
        tile.classList.toggle('hide');
        for (let r = 1; r <=4; r++){
            let changeIcon = document.getElementById(r + '-img');
            changeIcon.setAttribute('src', 'assets/images/icon-plus.svg');
        }
        document.getElementById(title.id + '-img').setAttribute('src', 'assets/images/icon-minus.svg');
        
    })
});
