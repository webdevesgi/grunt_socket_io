var socket = io.connect('http://10.34.134.68:1337');

socket.on('goBallViaServer', function(params){
    $('.ball').animate({left: ($('.ball').position().left + params.distance) + 'px'}, 200);
});

$(document).ready(function(){
    $('.button').click(function(){
        socket.emit('goBall', { distance: 30 } );
    });
});