const d = document
// const chrome = d.querySelector("#chrome")
const safari = d.querySelector("#safari")
const firefox = d.querySelector("#firefox")
const opera = d.querySelector("#opera")
const edge = d.querySelector("#edge")
const chromee = d.querySelector("#chrome")
let p_info = d.querySelector(".p-info")
// funcionalidad github

let github = d.querySelector(".github")
d.addEventListener("click" , e => {
    if(e.target.matches(".github")){
        window.location.href = "https://github.com/darioguerraaragon"
    }
})


const BrowserDetection = () =>{
    if(window.navigator.userAgent.includes("Chrome")){
        chromee.classList.remove("opacity-50")
        p_info.innerHTML = `<b>Browser detected : The browser that you have rigth now is Chrome</b>`
    }else if (window.navigator.userAgent.includes("FireFox")){
        firefox.classList.remove("opacity-50")
        p_info.innerHTML = `<b>Browser detected : The browser that you have rigth now is FireFox</b>`
    }else if (window.navigator.userAgent.includes("Opera")){
        opera.classList.remove("opacity-50")
        p_info.innerHTML = `<b>Browser detected : The browser that you have rigth now is Opera</b>`
    }else if (window.navigator.userAgent.includes("Safari")){
        safari.classList.remove("opacity-50")    
        p_info.innerHTML = `<b>Browser detected : The browser that you have rigth now is Safari</b>`
    }else if (window.navigator.userAgent.includes("Edge")){
        edge.classList.remove("opacity-50")
        p_info.innerHTML = `<b>Browser detected : The browser that you have rigth now is Edge</b>`
    }

}

BrowserDetection()
// console.log(window.navigator.userAgent)