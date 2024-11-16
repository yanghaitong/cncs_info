// 获取所有标题
const titles = document.querySelectorAll('.server_one > .title')
const contents = document.querySelectorAll('.server_one> .server_one_box')
console.log(titles)
console.log(contents)
/* js的动画 */
/*  var flag = true
 // 给所有的标题绑定点击事件
 for (let i = 0; i < titles.length; i++) {
     titles[i].onclick = function () {
         if(!flag) return
         flag = false
         let height = getStyle(contents[i], 'height')
         if(height==0){
             // 让它显示
             move(contents[i], {height: 200}, ()=>{
                 flag = true
             })
         }else{
             // 让隐藏
             move(contents[i], {height: 0},()=>{
                 flag = true
             })
         }
     }
 } */
/* js+css */
// 给所有的标题绑定点击事件
/* for (let i = 0; i < titles.length; i++) {
    titles[i].onclick = function () {
        let height = getStyle(contents[i], 'height')
        if(height==0){
            // 让它显示
            contents[i].style.height = '200px'
        }else{
            // 让隐藏
            contents[i].style.height = 0
        }
    }
} */
/* 除了取下标对应关系   */
for (var i = 0; i < titles.length; i++) {
    titles[i].onclick = function () {
        let height = getStyle(this.nextElementSibling, 'height')
        if (height == 0) {
            // 先让所有内容区都隐藏
            for (let i = 0; i < contents.length; i++) {
                contents[i].style.height = 0
            }
            // 让它显示
            this.nextElementSibling.style.height = '100px'
        } else {
            // 让隐藏
            this.nextElementSibling.style.height = 0
        }
    }
}
// 判断对应的内容是否显示
// 有高度代表显示 让他隐藏  height 0  move(content,{height:0})
// 高度为0代表隐藏 让他显示 height 200px move(content,{height: 200})