{
  // 枚举定义一组常量
  // 定义枚举类型
  // type D = 'left' | 'up' | 'down' | 'right'
  // // 枚举类型和ts中其他的类型不一样，枚举类型不仅仅是类型，还是一个值
  //  type a=string; 是一个类型，编译完以后，就没有了
  // 而枚举是会被编译进代码的，type的性能更好，因为枚举还需要编译js

  enum Direction {
    Up = 'a',
    Down = 'b',
    Left = 'c',
    Right = 'd',
  }
  // function changeDirection(direction: Direction) {
  //   console.log(direction)
  // }

  // changeDirection(Direction.Up)
  // console.log(Direction.Up)
  // console.log(Direction.Down)
  // console.log(Direction.Left)
  // console.log(Direction.Right)

  enum Gender {
    Woman, //枚举没有值，默认就是按照下标0
    Man, //1
  }

  type User = {
    name: string
    age: number
    gender: Gender
  }

  const user: User = {
    name: '张三',
    age: 18,
    gender: Gender.Woman, //注意拿到的值是0
  }
  // 拿到后台，就给他的值是0，是后端想要的值，前台也可以已看出值是什么
  console.log(user)
}
