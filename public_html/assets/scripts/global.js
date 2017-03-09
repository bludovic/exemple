$("body").append($("<div>").attr("id","bouge"));
$("#bouge").css("position","fixed");
$("body").mousemove(function(event,ui){
    $("#bouge").css("top",event.pageY);
    $("#bouge").css("left",event.pageX+10);
    $("#bouge").html(event.pageX+" : "+event.pageY);
});


function execute(cb) {
    cb();
}

var truc = "coucou";

function callback() {
    var truc = "pas coucou";
    console.log(truc);
}

execute(callback);

console.log(truc);

