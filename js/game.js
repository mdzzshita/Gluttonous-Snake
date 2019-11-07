(function () {
    // 记录游戏对象
    var that;
    function Game(map) {
        this.food = new window.Food();
        this.snake = new window.Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function () {
        // 把蛇食物渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);

        this.snake.move();
        this.snake.render(this.map);

        // 开始游戏逻辑
        // 1.让蛇移动起来
        RunSnake();


        // 3.通过键盘控制蛇的移动
        // 4.当蛇遇到食物作相应的处理



    }

    function RunSnake() {
        var timerId = setInterval(function () {
             // 让蛇走一格
            // 在定时器的function中this是指向Window对象的
            // this.snake
            // 要获取游戏对象中的蛇属性
            that.snake.move();
            that.snake.render(that.map);

            // 2.当蛇遇到边界游戏结束
            // 获取蛇头坐标
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            var headX = that.snake.body[0].x;
            var headY = that.snake.body[0].y;

            if (headX < 0 || headX >= maxX) {
                alert('Game Over');
                clearInterval(timerId);
            }
            if (headY < 0 || headY >= maxY) {
                alert('Game Over');
                clearInterval(timerId);
            }

        }, 150)

    }

    window.Game = Game;
})()


// 测试
var map = document.getElementById('map');
var game = new Game(map);
game.start();