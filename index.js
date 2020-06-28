// cuando la pagina cargue, este codigo empieza a correr
window.addEventListener('load',  () => {
    const sounds = document.querySelectorAll('.sound'); //Esto almacena todos los sonidos del html
    const pads = document.querySelectorAll('.pads div'); //Esto hace clickeable los pads 
    const visual = document.querySelector('.visual');
    const colors = [
        "#5FC6D9",
        "#5FD978",
        "#C7A2DB",
        "#8D5FD9",
        "#DE3863",
        "#3F5AA6"
    ];

    console.log(sounds);

 //Empiezan los bifes
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBalls(index);
        });
    });
    //Crear una funcion que haga pelotas
    const createBalls = (index) => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = "jump 1s ease";
        ball.addEventListener('animationend', function(){
            visual.removeChild(this)
        });
    };
});