function restart(){
    axios.post('/command',{
        "command":"restart"
    })
        .then((c)=>{
            console.log(c.data)
        })
}

function stop(){
    axios.post('/command',{
        "command":"stop"
    })
        .then((c)=>{
            console.log(c.data)
        })
}

function start(){
    axios.post('/command',{
        "command":"start"
    })
        .then((c)=>{
            console.log(c.data)
        })
}

function status(){
    axios.post('/command',{
        "command":"status"
    })
        .then((c)=>{
            console.log(c.data)
        })
}

$(document).ready(function () {

    

   

    
});
