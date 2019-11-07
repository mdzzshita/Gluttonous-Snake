(function () {

    var position = 'absolute';
    // 用来记录蛇
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

    // 蛇渲染方法
    Snake.prototype.render = function (map) {

        // 删除蛇之前创建的蛇
        remove();

        // 把每一个蛇节宣染到地图上
        // for (var i = 0; i < this.body.length; i++) {
        // }
        for (var i = 0, len = this.body.length; i < len; i++) {
            // 蛇节
            var object = this.body[i];
            // 动态创建div
            var div = document.createElement('div');
            map.appendChild(div);


            // 记录当前蛇
            elements.push(div);

            // 设置div样式
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    }


    // 蛇移动方法
    Snake.prototype.move = function () {
        // 控制蛇的身体移动，（当前蛇节移到上一个蛇节的位置）
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        // 控制蛇头的移动
        // 判断蛇头移动的方向
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
    }

    // 蛇删除方法
    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            // 删div
            // 调用父元素移除当前子元素
            elements[i].parentNode.removeChild(elements[i]);

            // 删数组中的元素
            // 删除数组元素
            // 第一个参数，从哪个元素开始删
            // 第二个参数，删多少个
            elements.splice(i, 1);

        }
    }



    window.Snake = Snake;
})()



// //测试
// var map = document.getElementById('map');
// var snake =new Snake();
// snake.render(map);