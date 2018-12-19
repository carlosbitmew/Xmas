
function getT() {
    let date = new Date().getTime();
    let xmas = new Date("2018/12/24 00:00:00").getTime();
    let reTime = xmas - date;
    let day = Math.floor(reTime / 86400000);
    let hour = Math.floor(((reTime / 86400000) - day) * 24);
    let m = Math.floor((((reTime / 86400000) - day) * 24 - hour) * 60);
    let s = Math.floor((((((reTime / 86400000) - day) * 24 - hour) * 60) - m) * 60);

    $("#d").html(day);
    $("#h").html(hour);
    $("#m").html(m);
    $("#s").html(s);
}

setInterval("getT()", 1000);
