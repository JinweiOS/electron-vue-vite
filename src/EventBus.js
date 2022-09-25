// key 事件类型
// value 事件监听的callback[]
const eventFnSet = {}

const TypeSet = {
  resize: 'resize'
}

function $emit(eventType, data) {
  const eventFnStack = eventFnSet[eventType] || []
  eventFnStack.forEach(fn => {
    fn(data)
  });
}

function $on(eventType, callback) {
  // 如果事件类型不在TypeSet中，就报错
  if (!eventFnSet[eventType]) {
    eventFnSet[eventType] = [callback]
    return;
  }
  eventFnSet[eventType].push(callback)
}

export { $emit, $on, TypeSet }
