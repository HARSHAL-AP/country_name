


async function findecur(){
let query=document.getElementById("cur").value
try {
    let res=await fetch(`https://restcountries.com/v3.1/currency/${query}`)
    let data=await res.json()
    console.log(data)
    if(data.length===0){
        alert("No Data Found")
    }
    else{
        appenddata(data)
    }
} catch (error) {
  alert("No Data Found")
}


}


async function appenddata(data){

var container=document.getElementById("contener")
container.innerHTML=""
data.forEach (async(el) => {
    let box=document.createElement("div")

   
    let img=document.createElement("img")
    let imgurl=await geturl(el.name.common)
    console.log(imgurl)
    img.src=`https://flagsapi.com/${el.cca2}/flat/64.png`

    let name =document.createElement("h1")
    name.innerText="Name"+":"+el.name.common

    let cap=document.createElement("h1")
    cap.innerText="capital"+":"+el.capital

    box.append(img,name,cap)
    container.append(box)
});


}


async function geturl(el){
try {
    let res=await fetch(`https://flagcdn.com/en/codes.json`)
    let data=await res.json()
   
    for(let key in data){
        if(data[key]===el){
            return key
        }
    }
   

} catch (error) {
    return "ed"
}




}