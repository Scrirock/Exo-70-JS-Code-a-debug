let main = document.getElementById("main");

main.id = "main2";

main.style.display = "hidden";

document.getElementById('main2').innerHTML = "Mon nouveau texte !";

let html = document.getElementById('main2').innerHTML;

alert(html);

if(html) {
    console.log(html);
}
else {
    let test = document.getElementById('test');
    if(test) {
        alert(test);
    }
}

main.style.display = "block";


