
var position = 'absolute';
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

    // 随机设置x，y的值
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;



    // 动态创建div 显示出食物
    var div = document.createElement('div');
    map.appendChild(div);


    // 设置div样式
    div.style.position = position;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
}

var map = document.getElementById('map');

var food = new Food();
food.render(map);
