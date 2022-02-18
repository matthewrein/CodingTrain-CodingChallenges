let blobs = [];

function Blob(id, x,y, r){
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = r;
}

let express = require('express');

let app = express();

let server = app.listen(process.env.PORT || 3000, listen);

function listen() {
    let host = server.address().address;
    let port = server.address().port;

    console.log('listening on ' + host + ':' + port);
}

app.use(express.static('public'));

let io = require('socket.io')(server);

setInterval(heartbeat, 33);

function heartbeat() {
    // console.log('heartbeat');
    io.sockets.emit('heartbeat',blobs);
}

io.sockets.on('connection', 
    function (socket) {
        console.log('New Client: ' + socket.id);

        socket.on('start', function(data){
            // console.log(socket.id + ":" + data.x + ":" + data.y + ":" + data.r);
            let blob = new Blob(socket.id, 0,0);
            blobs.push(blob);            
        });

        socket.on('update', function(data){
            // console.log(socket.id + ":" + data.x + ":" + data.y + ":" + data.r);
            // let blob = new Blob(socket.id, 0,0);
            // blobs.push(blob);
            let blob;
            for(let i = 0; i < blobs.length; i++){
                if(socket.id == blobs[i].id){
                    blob = blobs[i];
                }
            }

            blob.x = data.x;
            blob.y = data.y;
            blob.r = data.r;
        });


    }
)