var votes = 10;

window.onload = function(){
    document.getElementById("input-votos").addEventListener('change', UpdateInput);
    add(0);
}

function Update(){
    var container = document.getElementsByClassName("esa-card")[0]

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    var maxQY = 0;
    var maxQX = 1;
    var maxY = 1;
    var maxX = 1;

    if(votes > 0)
        maxQY++;

    maxX = votes/2;
    
    for (var qy = 1; qy <= maxQY; qy++){
        for (var qx = 1; qx <= maxQX; qx++){
            for(var y = 1; y <= maxY; y++){
                var x = 1
                for(x; x <= maxX; x++){
                    var xMark = document.createElement("span");
                    document.getElementsByClassName("esa-card")[0].appendChild(xMark);
                    xMark.classList.add("x-mark");
                    var posLeft = (141 * (qx -1)) + 7 * x + 6 * (x -1);
                    var posTop = (80.4 * (qy -1)) + 86 + 12.5 * (y - 1);
                    xMark.setAttribute("style", "left: " + posLeft + "px; top: " + posTop + "px;");

                    if(x == 10){
                        x = 0;
                        maxX -= 10;
                        if(y < 5){
                            y++;
                            maxY++;
                        } else {
                            y = 1;
                            maxY = 1;
                            if(qx < 3){
                                qx++;
                                maxQX++;
                            } else {
                                qx = 1;
                                maxQX = 1;
                                qy++;
                                maxQY++;
                            }
                        }
                    }
                }

            }
        }
    }
};

function add(value) {
    votes += value;
    document.getElementById("input-votos").value = votes;
    Update();
}


function UpdateInput(){
    votes = parseInt(this.value);
    Update();
}

// left: 7px;
//top: 86px;