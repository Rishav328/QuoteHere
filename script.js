
const HEIGHT = window.innerHeight;
const WIDTH  = window.innerWidth;

$("#quo").hide()

if (WIDTH >= 850) {

    var app = document.getElementById('quo');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.pauseFor(2000)
        .typeString(`"Share your words 😎!"`)
        .pauseFor(2500)
        .deleteAll()
        .typeString(`"Get rewarded with Upvotes ❤️!"`)
        .start();

    setTimeout(()=>{$("#quo").show()},1800)

}

$('.nav').hide();
$('.nav').slideDown(1000);
$('#body-quo').hide();
setTimeout(()=>{$('#body-quo').fadeIn(1000)}, 900)


