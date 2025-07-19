vue的响应式是对数据的劫持、代理 。Proxy。vue3不支持ie11
react数据响应式原理：提供了this.setSate。如果想要dom更新是需要自己手动调用的。
setState({list:['新数组，不能改原来的数据，否则是不会更新的']})