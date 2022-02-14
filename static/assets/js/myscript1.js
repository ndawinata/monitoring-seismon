let state = {
    foto:null,
    jenistamu:null
}

let kategoriTamu = {
    a1:{
        title:"Kunjungan / Koordinasi",
        audio:"a1.mp3"
    },
    a2:{
        title:"Meeting / Rapat",
        audio:"a2.mp3"
    },
    b1:{
        title:"Tamu Kepala Stasiun Meteorologi",
        audio:"b1.mp3"
    },
    b2:{
        title:"Tamu Kepala Stasiun Geofisika",
        audio:"b2.mp3"
    },
    c1:{
        title:"Tamu TU Stasiun Meteorologi",
        audio:"c1.mp3"
    },
    c2:{
        title:"Tamu TU Stasiun Geofisika",
        audio:"c2.mp3"
    },
    d1:{
        title:"Permintaan Data Meteorologi",
        audio:"d1.mp3"
    },
    d2:{
        title:"Permintaan Data Meteorologi Maritim",
        audio:"d2.mp3"
    },
    d3:{
        title:"Permintaan Data Klimatologi",
        audio:"d3.mp3"
    },
    d4:{
        title:"Permintaan Data Geofisika",
        audio:"d4.mp3"
    },
    e:{
        title:"Tamu Stasiun Geofisika Kupang",
        audio:"e.mp3"
    },
    f:{
        title:"Tamu Lain-lain",
        audio:"f.mp3"
    }
}

navigator.getUserMedia({ video: true}, function (stream) {
    if (stream.getVideoTracks().length > 0 ) {
        //code for when none of the devices are available                       
    } else {
       // code for when both devices are available
    }
}, function (error) { 
  // code for when there is an error
});
Webcam.set({
    width: 360,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach( '#my_camera' );

function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
        // display results in page
        state.foto = data_uri
        $('#foto').val(data_uri.split(",")[1])
        document.getElementById('my_camera').innerHTML = 
            '<img class="w3-animate-opacity" src="'+data_uri+'"/>';
    } );
}

$(document).ready(function () {
    $('#submit').click(()=>{
        take_snapshot()
    });

    var tabledata = [
        {id:1, pnbp:"Informasi Cuaca untuk Pelayaran", satuan:"per route \nper hari", tarif:"Rp. 250.000,00"},
        {id:2, pnbp:"Informasi Cuaca untuk Pelabuhan", satuan:"per route \nper hari", tarif:"Rp. 225.000,00"},
        {id:3, pnbp:"Informasi Cuaca untuk Pengeboran Lepas", satuan:"per route \nper hari", tarif:"Rp. 330.000,00"},
    ];

    var table = new Tabulator("#example-table", {
        data:tabledata, //assign data to table,
        height:500,
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
            {title:"Jenis Penerimaan Negara Bukan Pajak", field:"pnbp", width:300},
            {title:"Satuan", field:"satuan", width:150},
            {title:"Tarif", field:"tarif", width:150},
        ],
    });
    
    //trigger an alert message when the row is clicked
    table.on("rowClick", function(e, row){ 
        alert("Row " + row.getData().id + " Clicked!!!!");
    });
});

$("#keperluan").val(kategoriTamu["{{kode}}"].title)
$("#kode").val("{{kode}}")
state.jenistamu = kategoriTamu["{{kode}}"].title
console.log("{{kode}}")

const setJenis = (val) => {
    state.jenistamu = kategoriTamu[val].title
    $("#keperluan").val(kategoriTamu[val].title)
    $("#kode").val(val)
}