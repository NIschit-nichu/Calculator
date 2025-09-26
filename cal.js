let ff=document.getElementById("ff")
let lf=document.getElementById("lf")
let btn=document.getElementById("btn")
let ans=document.getElementById("ans")
let a=document.getElementById("add")
let s=document.getElementById("sub")
let m=document.getElementById("mul")
let q=document.getElementById("quo")
let r=document.getElementById("rema")
let pow=document.getElementById("expo")
let clear=document.getElementById("clear")
clear.addEventListener("click",()=>{
let f=ff.value=""
let l=lf.value=""
})
a.addEventListener("click",()=>{
 let f=Number(ff.value)
 let l=Number(lf.value)
 document.body.appendChild(ans)
ans.textContent=f+l
})
s.addEventListener("click",()=>{
 let f=Number(ff.value)
 let l=Number(lf.value)
 document.body.appendChild(ans)
ans.textContent=f-l
})
m.addEventListener("click",()=>{
 let f=Number(ff.value)
 let l=Number(lf.value)
 document.body.appendChild(ans)
ans.textContent=f*l
})
q.addEventListener("click",()=>{
 let f=Number(ff.value)
 let l=Number(lf.value)
 document.body.appendChild(ans)
ans.textContent=f/l
})
r.addEventListener("click",()=>{
 let f=Number(ff.value)
 let l=Number(lf.value)
 document.body.appendChild(ans)
ans.textContent=f%l
})
pow.addEventListener("click",()=>{
 let f=Number(ff.value)
 let l=Number(lf.value)
 document.body.appendChild(ans)
ans.textContent=f**l
})

