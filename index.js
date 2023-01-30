let next__btn = false;
let prev__btn = false;


function Submit(){
    if(next__btn){
        next__btn = false;
        return document.body.classList.remove("next__btn")
    }
    next__btn = true;
    document.body.classList += " next__btn";


}

Submit()