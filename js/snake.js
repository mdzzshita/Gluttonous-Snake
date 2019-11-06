(function () {
    var position = 'absolute';
    // 记录蛇
    var elements = [];
    // 蛇构造函数
    function Snake(options) {

        options = options || {};
        // 蛇节大小
        this.width = options.width || 20;
        this.height = options.height || 20;

        // 蛇移动方向
        this.direction = options.direction || 'right';

        // 蛇身体（蛇节）第一个是蛇头
        this.body = [
            { x: 3, y: 2, color: 'red' },
            { x: 2, y: 2, color: 'blue' },
            { x: 1, y: 2, color: 'blue' },
        ]

    }

    Snake.prototype.render = function (map) {
        // 把每一个蛇节宣染到地图上

        // for (var i = 0; i < this.body.length; i++) {

        // }
        for (var i = 0, len = this.body.length; i < len; i++) {
            // 蛇节
            var object = this.body[i];
            // 动态创建div
            var div = document.createElement('div');
            map.appendChild(div);


            // 记录蛇
            // elements.push(div);
            // 设置div样式
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }


    }



    window.Snake = Snake;
})()




var map = document.getElementById('map');
var snake =new Snake();
snake.render(map);