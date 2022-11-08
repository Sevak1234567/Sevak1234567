function generateMatrix(len, gr, grEat, pred, fire, aqua) {
    let matrix = [];
    for (let i = 0; i < len; i++) {
        matrix.push([])
        for (let j = 0; j < len; j++) { 
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < fire; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] <= 3) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < aqua; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}



let matrix = generateMatrix(34, 10, 10, 15, 15, 25)

var side = 20;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let fireArr = [];
let aquaArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat);
            }else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred);
            }else if (matrix[y][x] == 4) {
                let fire = new Fire(x, y);
                fireArr.push(fire);
            }else if (matrix[y][x] == 5) {
                let aqua = new Aqua(x, y);
                aquaArr.push(aqua);
            }                 
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            }else if (matrix[y][x] == 4) {
                fill("red");
            }else if (matrix[y][x] == 5) {
                fill("aqua");
            }
            
            rect(x * side, y * side, side, side);

        }
    }




    for (let i in grassArr) {
        grassArr[i].mul();
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (let i in predatorArr) {
        predatorArr[i].eat();
    }
    
    for (let i in fireArr) {
        fireArr[i].eat();
    }

    for (let i in aquaArr) {
        aquaArr[i].mul();
    }
}