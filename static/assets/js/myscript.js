function restart(){
    axios.post('/command',{
        "command":"restart"
    })
        .then((c)=>{
            if(c.data.output==""){
                $('#output').append("Server Seismon telah dinyalakan ulang\n")
                $('#text').val("")
                var psconsole = $('#output');
                if(psconsole.length){
                    psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
                }
            }
        })
}

function pull(){
    axios.post('/command',{
        "command":"pull"
    })
        .then((c)=>{
            $('#output').append(c.data.output)
            $('#text').val("")
            var psconsole = $('#output');
            if(psconsole.length){
                psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
            }
        })
}

function stop(){
    axios.post('/command',{
        "command":"stop"
    })
        .then((c)=>{
            if(c.data.output==""){
                $('#output').append("Server Seismon Telah Berhenti\n")
                $('#text').val("")
                var psconsole = $('#output');
                if(psconsole.length){
                    psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
                }
            }
        })
}

function start(){
    axios.post('/command',{
        "command":"start"
    })
        .then((c)=>{
            if(c.data.output==""){
                $('#output').append("Server Seismon Telah Menyala\n")
                $('#text').val("")
                var psconsole = $('#output');
                if(psconsole.length){
                    psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
                }
            }
        })
}

function status(){
    axios.post('/command',{
        "command":"status"
    })
        .then((c)=>{
            $('#output').append(c.data.output)
                $('#text').val("")
                var psconsole = $('#output');
                if(psconsole.length){
                    psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
                }
        })
}

function manual(){
    let text = $('#text').val()
    if(text!=""){
        axios.post('/command',{
            "command":"manual",
            "text":text
        })
            .then((c)=>{
                $('#output').append(c.data.output)
                $('#text').val("")
                var psconsole = $('#output');
                if(psconsole.length){
                    psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
                }
            })
    }else{
        window.alert("Command Masih Kosong");
    }
}

$(document).ready(function () {
    
});
