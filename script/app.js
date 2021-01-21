const ajax = async request => await fetch(request).then(response => response.json());

async function identificate () {
    ajax("https://api.ipify.org/?format=json").then(({ip}) => {
        ajax(`http://ip-api.com/json/${ip}`).then((json) => {
            alert(`${json.continent} ${json.country} ${json.regionName} ${json.city} ${json.district}`)
        })
    })
}

document.getElementById("button").addEventListener("click", identificate);