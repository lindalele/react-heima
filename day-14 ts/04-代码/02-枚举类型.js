{
  // 枚举定义一组常量
  // 枚举类型和ts中其他的类型***不一样，枚举类型不仅仅是类型，还是一个值
  //  type a=string; 是一个类型，编译完以后，就没有了

  var Direction = void 0 //undefined
  ;(function (Direction) {
    Direction['Up'] = 'a'
    Direction['Down'] = 'b'
    Direction['Left'] = 'c'
    Direction['Right'] = 'd'
    console.log(Direction)
  })(Direction || (Direction = {}))
  function changeDirection(direction) {
    console.log(direction)
  }
  changeDirection(Direction.Up)
  console.log(Direction.Up)
  console.log(Direction.Down)
  console.log(Direction.Left)
  console.log(Direction.Right)
}
