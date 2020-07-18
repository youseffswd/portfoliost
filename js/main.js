
let menuIcon  = document.querySelector(".menuIcon")
let lists = document.querySelector(".lists")
menuIcon.onclick = () => {
    lists.style.display = "flex"
    gsap.to(lists, {duration:.3,opacity:1})
    gsap.from(".lists .ulLists li", {delay:.3,duration:.3,opacity:0, y:100,stagger:.1})
}
let navX = document.querySelector(".navX")
navX.onclick = () => {
    gsap.to(lists, {duration:.3,opacity:0})
    gsap.to(lists,{delay:.3,display:"none"})
}
let jobs = ["front end", "freelancer"]
let job = document.getElementById("job")
let x = 0
let y = 0

let writing = () => {
    let addingLetters = setInterval(() => {
        job.textContent +=  jobs[x][y] 
        if(y < jobs[x].length - 1){
            y++
        }else{
            
            clearInterval(addingLetters)
            setTimeout(() => {
                clearWords()
            },2000)
        }
    },100)
}
writing()
function clearWords(){
    let deletingLetters = setInterval(() => {
        job.textContent = job.textContent.slice(0,y)
        if(y > 0){
            y--
        }else{
            if(x < jobs.length - 1){
                x++
            }else{
                x = 0
            }
            clearInterval(deletingLetters)
            writing()
        }
    },70)
}
let main = document.getElementById("main")
let lis = document.querySelectorAll(".lists li")
let closes = document.querySelectorAll(".closeMod")
// let bodyHeight = window.innerHeight + "px"
// main.style.height = bodyHeight
// main.style.bottom = "-" + bodyHeight
lis.forEach(li => {
    li.onclick = function(){
        animation(main,"scaling1 .4s linear  forwards")
        setTimeout(() => {
            main.style.bottom = 0;
            animation(main,"none")
            animation(main,"scaling2 .4s linear  forwards")
        },500)
    }
})
closes.forEach(close => {
    close.onclick = function(){
        animation(main,"scaling3 .4s linear   forwards")
        setTimeout(() => {
            main.style.bottom = 0;
            animation(main,"none")
            animation(main,"scaling4 .4s linear  forwards")
        },500)
    }
})

function animation(element,value){
    element.style.animation = value
}
document.getElementById("about").style.animationDelay = ".4s"
$(".about").animatedModal({
    color:"#101010",
    animatedIn:"bounceInUp",
    animatedOut:"bounceOutDown",
    animationDuration:".1s"
});


if(window.innerWidth < 992){
    document.querySelector("#about .img-container img").style.height = document.querySelector("#about .img-container img").offsetWidth + "px"
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
        
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
document.getElementById("resume").style.animationDelay = ".4s"
$(".resume").animatedModal({
    color:"#101010",
    animatedIn:"bounceInUp",
    animatedOut:"bounceOutDown",
    animationDuration:".1s"
});