{
  // function mySlice(begin?: number, end?: number): void {}
  // mySlice()
  // mySlice(1)
  // mySlice(1, 2)

  // js本身支持 默认值 加了默认值以后就不能和可选参数一起，因为有了默认值，不存在可选可传可以不传的情况
  function mySlice(begin: number = 0, end: number = 10) {}
}
