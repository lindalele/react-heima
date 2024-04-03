// {
//   type Point2D = {
//     x: number
//     y: number
//   }

//   type Point3D = {
//     x: number
//     y: number
//     z: number
//   }

//   const point: Point2D = {
//     x: 100,
//     y: 100
//   }
// }
{
  interface IPoint2D {
    x: number
    y: number
  }
  // 继承IPoint2D的几口，复用IPoint2D的方法
  interface IPoint3D extends IPoint2D {
    z: number
    // 注意不能覆盖x:string是错的
  }

  const point: IPoint3D = {
    x: 100,
    z: 100,
    y: 100,
  }
}
