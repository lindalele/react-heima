{
  enum Direction { //枚举类型默认是有值的，默认值从下标开始算
    Up, //如果没有值，默认值就是0依次递增
    Down,
    Left,
    Right,
  }
  console.log(Direction.Up) //0
  //   枚举类型如果给了值，拿了后面依次递增，第一个=10,后面一次递增

  //   枚举如果给了一个值是字符串，那么其他几个值也必须要给
  enum DirectionS { //枚举类型默认是有值的，默认值从下标开始算
    Up = 'a',
    Down = 'b',
  }
}
