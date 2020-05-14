/* 
1:用两个栈来实现一个队列，完成队列的Push和Pop操作
2:用两个队列来实现一个栈，完成栈的Push和Pop操作

push/pop的返回值问题
能用自己的话描述题目的要求即可，实现不难
*/
let stack1 = []
let stack2 = []
const push = () => {
  stack1.push()
}

const pop = () => {
  while(stack1.length > 0) {
    stack2.push(stack1.pop())
  }
  stack2.pop()
}

// 2
// 满足顺序交换，先入后出
let quene1 = []
let quene2 = []

const push = (x) => {
  if (quene1.length === 0) {
    quene1.push(x)
    while(quene2.length) {
      quene1.push(quene2.shift())
    }
  } else if (quene2.length === 0) {
    quene2.push(x)
    while(quene1.length) {
      quene2.push(quene1.shift())
    }
  }
}

const pop = () => {
  if (quene1.length > 0) {
    return quene1.shift()
  }
  if (quene2.length > 0) {
    return quene2.shift()
  }
}