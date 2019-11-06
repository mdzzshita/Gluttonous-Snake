// 自调用函数
(function () {
    var position = 'absolute';
    // 记录上次创建的食物，为删除作准备
    var elements = [];
    // 食物构造函数
    function Food(options) {
        options = options || {};
        // 食物坐标
        this.x = options.x || 0;
        this.y = options.y || 0;

        // 食物大小
        this.width = options.width || 20;
        this.height = options.height || 20;

        this.color = options.color || 'green';
    }


    // 食物渲染方法
    Food.prototype.render = function (map) {
        // 删除之前创建的食物
        remove();

        // 随机设置食物x，y的值
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

        // 动态创建div 显示出食物
        var div = document.createElement('div');
        map.appendChild(div);

        // 记录食物
        elements.push(div);

        // 设置div样式
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    }


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

    // 把Food构造函数，让外部访问
    window.Food=Food;

})()





// 测试
var map = document.getElementById('map');
var food=new Food();
food.render(map);
