
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
let lis = document.querySelectorAll(".lists li a")
let closes = document.querySelectorAll(".closeMod")
// let bodyHeight = window.innerHeight + "px"
// main.style.height = bodyHeight
// main.style.bottom = "-" + bodyHeight
lis.forEach(li => {
    li.onclick = function(){
        animation(main,"scaling1 .3s linear  forwards")
        setTimeout(() => {
            main.style.bottom = 0;
            animation(main,"none")
            animation(main,"scaling2 .3s linear  forwards")
        },700)
    }
})
closes.forEach(close => {
    close.onclick = function(){
        animation(main,"scaling3 .3s linear   forwards")
        setTimeout(() => {
            main.style.bottom = 0;
            animation(main,"none")
            animation(main,"scaling4 .3s linear  forwards")
        },700)
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
    animationDuration:".01s"
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

let overlay = document.getElementById("overlay")
document.querySelector(".video img").onclick = () => overLayBlack(`<iframe  src="https://www.youtube.com/embed/doteMqP6eSc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
document.querySelector(".video div").onclick = () => overLayBlack(`<iframe  src="https://www.youtube.com/embed/doteMqP6eSc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)




document.getElementById("portfolio").style.animationDelay = ".4s"
$(".portfolio").animatedModal({
    color:"#101010",
    animatedIn:"bounceInUp",
    animatedOut:"bounceOutDown",
    animationDuration:".1s"
});

let filterBtns = document.querySelectorAll("#portfolio .buttons li")
let filteredImgs = document.querySelectorAll("#portfolio .row .col-6 .img")
let links = document.querySelectorAll("#portfolio .row .col-6 .img a")

document.querySelectorAll(".web").forEach(img => {
    img.firstElementChild.style.height = parseInt(img.clientWidth) * 163.5 / 153 + "px"
    
})
filterBtns.forEach(btn => {
    btn.onclick = function(){
        filterBtns.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active")
        
        for (let i = 0; i< filteredImgs.length;i++){
            
            if(this.dataset.filt == "all"){
                filteredImgs[i].parentElement.style.display = "block"
                gsap.to(filteredImgs[i],{duration:.4,scale:1})
                
            }else if(this.dataset.filt === filteredImgs[i].firstElementChild.dataset.filt){
                filteredImgs[i].parentElement.style.display = "block"
                gsap.to(filteredImgs[i],{duration:.4,scale:1})
                
                
            }else{
                    console.log("hi4");
                    gsap.to(filteredImgs[i],{duration:.4,scale:0})
                    setTimeout(() => {
                        filteredImgs[i].parentElement.style.display = "none"
                    },400)
                }
            
        }
    }
})
links.forEach(link => {
    link.onclick = () => link.dataset.img !== "web" ? overLayBlack(`<img src="${link.dataset.img}" />`) : ""
})

function overLayBlack(element){
    overlay.querySelector(".middle").innerHTML = element  
    overlay.style.display = "flex"
    gsap.to(overlay,{duration:.4,opacity:1})
    
}
overlay.querySelector(".closeIt").onclick = () => {
    gsap.to(overlay,{duration:.4,opacity:0})
    gsap.to(overlay,{delay:.4,display:"none"})
}
document.getElementById("blog").style.animationDelay = ".4s"
$(".blog").animatedModal({
    color:"#101010",
    animatedIn:"bounceInUp",
    animatedOut:"bounceOutDown",
    animationDuration:".1s"
});
document.getElementById("contact").style.animationDelay = ".4s"
$(".contact").animatedModal({
    color:"#101010",
    animatedIn:"bounceInUp",
    animatedOut:"bounceOutDown",
    animationDuration:".1s"
});


let loader = document.getElementById("loader")
let balls = document.querySelectorAll("#loader span")

let tl = gsap.timeline({repeat: -1});

tl.to(balls,{duration:.4,ease: "power1.inOut",scale:0,opacity:0, stagger:.2})
tl.to(balls,{duration:.4,ease: "power1.inOut",scale:1,opacity:1,stagger:.2})

window.onload = () => {
    setTimeout(() =>{
        gsap.to(loader,{duration:.3,opacity:0})
        gsap.to(loader,{delay:.3,display:"none"})
    },500)
}