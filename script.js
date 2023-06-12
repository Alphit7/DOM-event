let action = document.querySelectorAll(".actionsquare");
let display = document.querySelector(".displayedsquare-wrapper");
let log = document.querySelector("ul");
action.forEach(element => {
        element.addEventListener('click', () => {
            let div = document.createElement("div");
            display.appendChild(div);
            div.setAttribute("class", "displayedsquare" + " " + element.classList[1]);
            div.addEventListener('click', () => {
                alert(div.classList[1]);
            })
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let li = document.createElement("li");
            let text = document.createTextNode("[" + time + "]" + "Created a new " + div.classList[1]+" square");
            li.appendChild(text);
            log.appendChild(li);
        });
    });
document.addEventListener('keypress', pushedkey => {
    if (pushedkey.code === 'Space'){
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let li = document.createElement("li");
            let text = document.createTextNode("[" + time + "]"+"Spacebar has been pressed");
            li.appendChild(text);
            log.appendChild(li);
        }
});
document.addEventListener('keypress', pushedkey => {
    if (pushedkey.code === 'KeyL'){
        let ul = document.querySelector('ul');
        let li = ul.querySelectorAll('li');
        let x = li.length;
        console.log(x);
        while(x > 0){
            let li = document.querySelectorAll('li');
            li[li.length - 1].remove();
        }
    }
});
document.addEventListener('keypress', pushedkey => {
    if (pushedkey.code === 'KeyS'){
        let squareWrap = document.querySelector('.displayedsquare-wrapper');
        let square = squareWrap.querySelectorAll('div');
        let x = square.length;
        console.log(x);
        while(x > 0){
            let square = squareWrap.querySelectorAll('div');
            square[square.length - 1].remove();
        }
    }
});