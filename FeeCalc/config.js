document.getElementById("input").addEventListener("change",(e) =>{
    var prec = 100-document.getElementById("prec").value
    var num = (e.target.value*prec)/100
    var num2 = (e.target.value*100)/prec
    num2 = Math.round((num2 + Number.EPSILON) * 100) / 100
   document.getElementById("inp").innerHTML = `If you charge the client <span class = "mun">$${e.target.value}</span>, you will recieve <span class = "mun">$${num}</span>.<br>To recieve <span class = "mun">$${e.target.value}</span> you should charge <span class = "mun">$${num2}</span>`;
})