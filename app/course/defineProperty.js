// defineProperty怎么实现vue的响应式

function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(newVal) {
      if (newVal === val) return
      observe(newVal)
      val = newVal
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return
  new Observer(obj)
}

class Observer {
  constructor(obj) {
    this.walk(obj)
  }

  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key])
    })
  }
}

let obj = {
  name: 'lerte',
  age: 18,
  address: {
    city: '深圳'
  }
}

observe(obj)
console.log(obj.name)
obj.age = 30
console.log(obj.age)
