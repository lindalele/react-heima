{
  // let point: number[] = [111.11, 222.22, 333.33]
  // 元组类型：指定了具体的元素的个数和对应的类型，比如说经纬度中一个数组里面只能有两个元素，元组只当个数
  // let position: [number, number] = [1, 2]
  // let a: [number, string] = [100, 'abc']

  // useState
  function useState(num: number): [number, (number) => void] {
    const setNum = (num: number) => {
      // 修改number
    }
    return [num, setNum]
  }

  const [num, setNum] = useState(100)
  console.log(num)
  setNum(100)
}
