/*
    @elem  要运动的元素
    @targetObj  是一个对象 对象的key是运动的属性  对象的value是终点值
    @cb callback 是一个回调函数 动画结束的时候执行
*/
function move(elem, targetObj, cb){
    // 每一个运动的属性都要设置一个定时器
    const timerObj = {} // 用来存储定时器id 存储的方式 key对应运动的属性 value对应定时器id
    for(let attr in targetObj){
        timerObj[attr] = setInterval(()=>{
            // 具体运动的逻辑
            // 运动量 决定了运动的方向  剩下距离的十分之一
            // 剩下距离等于  终点值-当前值
            // 获取当前值
            let current = getStyle(elem, attr)
            let step = (targetObj[attr] - current) / 10
            // 判断方向  正数要向上取整 0.9  1 负数要向下取整  - 0.9  -1
            step>0 ? step= Math.ceil(step) : step = Math.floor(step)
            // 判断是否到达终点
            if(current === targetObj[attr]){
                clearInterval(timerObj[attr])
                // 删除对应的key
                delete timerObj[attr]
                // 判断动画是否结束了
                if(isEmptyObj(timerObj)){
                    // 代表动画执行结束
                    // 执行回调
                    // if(cb) cb()
                    cb && cb()
                }
            }else{
                elem.style[attr] = current + step + 'px'
            }
        }, 30)
    }
}
/*
    @elem 要获取样式的元素
    @attr 获取样式的css属性
    @return  返回的是对应的css值  不带px 是一个number类型
*/
function getStyle(elem, attr) {
    if (elem.style[attr]) {
        return parseInt(elem.style[attr])
    } else {
        return parseInt(getComputedStyle(elem)[attr])
    }
}
/*
    @obj 传入要判断的对象
    @return 如果对象为空 返回true 如果对象不为空 返回false
*/
function isEmptyObj(obj){
    // 如果是空对象返回true
    let flag = true  // flag代表对象是否为空对象，true为空对象  false为非空
    for(let key in obj){
        flag = false // 代表for..in进来  代表是有键值对 是一个非空的对象
    }
    return flag
}