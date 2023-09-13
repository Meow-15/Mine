let box = document.querySelectorAll(".box")
let text = document.querySelectorAll(".text")

const arr = [
    `url("assests/IMG-20210428-WA0004.jpg")`,
    `url("assests/IMG_20211103_142049_158.jpg")`,
    `url("assests/IMG_20220128_103649_726.jpg")`,
    `url("assests/IMG_20220303_211119_854.jpg")`,
    `url("assests/IMG_20220612_110741_023.jpg")`,
    `url("assests/IMG_20220612_110742_647.jpg")`
]

let state = {
    box1:true,
    box2:true,
    box3:true,
    box4:true,
    box5:true,
    box6:true,
    box7:true,
    box8:true
}

for (let i = 0; i<box.length; i++){
    box[i].addEventListener("click",(e)=>{
        if (state[e.target.id]){
            text[i].style.display = "flex"
            box[i].style.backgroundImage = "none"
        }else{
            text[i].style.display = "none"
            box[i].style.backgroundImage = `${arr[i]}`
        }
    })
}