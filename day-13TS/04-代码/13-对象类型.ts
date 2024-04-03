{
  type Student = {
    name: string
    gender: string
    score: number
    height: number
    study(): void
    play(name: string): void
  }

  const stu: Student = {
    name: '张三',
    gender: '男',
    score: 100,
    height: 150,
    study() {
      console.log('学习')
    },
    play(name) {
      console.log('玩游戏', name)
    }
  }
}
