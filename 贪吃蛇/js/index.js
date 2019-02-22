/**
 * author GFY
 * time 2019-01-30
 * theme Gluttonous sanke
 */
// 1 表示 蛇  2 表示 蛋 0 表示 啥也没有
const backData = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
const backDom = document.getElementById('wrap')
const scoreDom = document.getElementById('score')
const Over = document.getElementById('over')
let backDoms = []       // 用于存储游戏版面的所有的div dom对象
// 蛇数据的数组
let snake = []

let timer = null, setTime = null
let dir = ''            // 蛇移动的方向 
let score = 0           // 得分
let time = '00:00'      // 用时
let isOver = false


/**
 * 初始化 游戏背景
 */
function initBack() {
        for (i = 0; i < backData.length; i++) {
                backDoms[i] = []
                for (let j = 0; j < backData[i].length; j++) {
                        let div = document.createElement('div')
                        div.className = 'back'
                        div.style.top = i * 10 + 'px'
                        div.style.left = j * 10 + 'px'
                        backDom.appendChild(div)
                        backDoms[i][j] = div
                }
        }
}
/**
 * 随机产生一个点
 */
function RamdomDot() {
        let row = Math.round(Math.random()*29)
        let col = Math.round(Math.random()*49)

        return {
                row,
                col
        }
}

/**
 * 初始化蛇头
 */
function initSnake () {
        let row = Math.floor(backData.length/2)
        let col = Math.floor(backData[0].length/2)
        snake.unshift({
                row,
                col
        })
        backData[row][col] = 1
}

/**
 * 随机生成一个豆
 */
function createFood () {
        let dot = RamdomDot()
        if (backData[dot.row][dot.col] !== 0) {
                createFood()
        }
        backData[dot.row][dot.col] = 2
}

/**
 * 重绘页面样式
 */
function resetDom() {
        for (i = 0; i < backData.length; i++) {
                for (let j = 0; j < backData[i].length; j++) {
                        switch(backData[i][j]) {
                                case 0 :
                                        backDoms[i][j].className = 'back'
                                        break
                                case 1 :
                                        backDoms[i][j].className = 'snake'
                                        break
                                case 2 : 
                                        backDoms[i][j].className = 'dot'
                                        break
                                default:
                                        break
                        }
                }
        }
}

/**
 * 对应蛇的数据赋值给游戏版面
 */
function snakeToBack() {
        for (i = 0; i < backData.length; i++) {
                for (let j = 0; j < backData[i].length; j++) {
                      if (backData[i][j] === 1) {
                              backData[i][j] = 0
                      }
                }
        }
        for (let i = 0; i < snake.length; i++) {
                backData[snake[i].row][snake[i].col] = 1 
        }
        resetDom()
}

/**
 * 蛇移动
 * @param {Number} row 纵向移动的方向（-1 上  1下 ）
 * @param {Number} col 横向移动的方向（-1 左 1 右）
 */
function snakeMove(row, col) {
        let head = snake[0]
        let next = {
                row: head.row + row,
                col: head.col + col
        } 
        isOver = next.row === -1 || next.row === 30 || next.col === -1 || next.col === 50 || backData[next.row][next.col] === 1
        if (isOver) {
                Over.className = 'over'
                timer = null
                return
        }
        snake.unshift(next)
        if (backData[next.row][next.col] === 0) {
                snake.pop()
        } else {
                score++
                scoreDom.innerText = score
                createFood()
        }
        snakeToBack()
}

/**
 * 控制蛇移动以及解决键位的冲突
 * @param {Number} key 按键的键位 
 */
function controllMove(key) {
        if (key === 38 && dir === 40) return
        if (key === 39 && dir === 37) return
        dir = key
        clearInterval(timer)
        switch(key) {
                case 38:        //up
                        timer = setInterval(() => {
                                snakeMove(-1, 0)
                        }, 100)                
                        break
                case 40:        //down
                        timer = setInterval(() => {
                                snakeMove(1, 0)   
                        }, 100)  
                        break
                case 37:        //left
                        timer = setInterval(() => {
                                snakeMove(0, -1)   
                        }, 100)  
                        break
                case 39:        //right
                        clearInterval(timer)
                        timer = setInterval(() => {
                                snakeMove(0, 1)   
                        }, 100)  
                        break
                default:
                        break
        }
        return
}

/**
 * 键盘事件
 */
document.onkeyup = function(e) {
        if (isOver) return
        let key = e.keyCode
        controllMove(key)
}

initBack()
initSnake()
createFood()
resetDom()