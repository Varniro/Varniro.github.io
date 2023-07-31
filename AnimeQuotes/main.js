const url = "https://waifu.it/api/quote";
const key = "MzE5NDYxNjc2Mjg4MDQ5MTU0.MTY5MDgyMTA1OQ--.cf25fa6769e6"
axios.get(url,{headers:{
    Authorization: key
}}).then((res) =>{
    console.log(res)
    document.querySelector("#quote").innerHTML = res.data.quote
    document.querySelector("#author").innerHTML = `-${res.data.author} (${res.data.anime})`
})

