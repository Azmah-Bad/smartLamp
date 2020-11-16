document.getElementById("lightOn").addEventListener("click", ()=>{
    const requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };

    fetch("http://192.168.2.5:3000/api/lamp/on", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})

document.getElementById("lightOff").addEventListener("click", ()=>{
    const requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };

    fetch("http://192.168.2.5:3000/api/lamp/off", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})
