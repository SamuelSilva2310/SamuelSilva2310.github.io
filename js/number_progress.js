 



function getScroll(){
    return((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);
}

function updateScroll(){
    if(getScroll() > 0.1){
        document.getElementById("progress_num").innerHTML = "0" + String(Math.ceil(getScroll()  / 25));
    }
 requestAnimationFrame(updateScroll);
 }


updateScroll();