class Aqua{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 0;
        this.energy = 5;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.life++;
        var newCell = random(this.chooseCell(0).concat(this.chooseCell(1)));

        if (newCell && this.life > 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var aqua = new Aqua(newX, newY);
            aquaArr.push(aqua);
            this.life = 0
        }
    }

    move() {
        this.energy--
        var newCell = random(this.chooseCell(0).concat(this.chooseCell(1)));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            for(var i  in grassArr){
                if(grassArr[i].x == x && grassArr[i].y == y){
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
        }
    }
}