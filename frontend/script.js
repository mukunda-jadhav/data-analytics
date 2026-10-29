const home = document.querySelector('.home')
let x = 0;
function namechange(){
    if(x==0){
        home.innerHTML='one'
        x++;
    }else if (x==1) {
        home.innerHTML='two'
        x++;
    } else {
        home.innerHTML='THREE'
        x=0;
    }
}