{
  // 断言：就是你比TS更明确值的类型，就用类型断言在使用dom的时候比较多
  // 根据id获取dom对象   div input img a
  // DOM
  // 图片
  let a = document.getElementById('id')
  // 此时鼠标移动上来是HTMLElement，是一个宽泛的类型，但如果我们知道这个元素就是a标签，所以就可以用类型断言

  // document.createElement('a') 鼠标一上来就可以看到:后面的是HTMLAnchorElement就是a标签的类型
  // 使用场景1：document.getElementById('id')TS不好判断，他会显示一个宽泛的类型，但我们知道想要的是具体哪一个元素，比如想要a标签，于是我们就可以断言
  // 断言语法：可以用1、<>或者2、as,其中<>写在元素前面，as写在元素后面
  const box = <HTMLAnchorElement>document.getElementById('id') //这种此恶法在react中容易不能用这汇总<>,因为react会把它当成组件，所以用as好

  // 使用场景2：发送请求获取数据 就是obj是后端传过来的，所以一开始obj就是空的{}，，不需要献给user:''之类的属性，但后我们还是可以确定这个值一定就是User类型，所以就可以用类型断言
  // 如果用类型注解:,我们就需要献给obj一个初始值，就不太好，此时我们可以用类型断言更方便
  type User = {
    name: string
    age: number
  }
  const obj = {} as User //断言语法：as后面+具体的类型
  // console.log(obj.name);
}
