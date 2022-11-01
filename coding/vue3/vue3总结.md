## VUE3新特性

* 向后兼容
* 新特性
* breaking change
* 性能提升
* 41% 55% 133% 54%  
* typescript

## 组合API
## 为什么
* 难以维护

## API
* Refs(0)
* toRefs
* reactive({})

## 深入响应式对象
1、保存effect
2、**检测值的改变**
3、执行trigger effect

## 纯函数 pure function
* 相同的输入，永远得到相同的输出
* 没有副作用


## 副作用 -函数外部环境发生的交互 （外部无法脱离副作用）
*  网络请求
*  DOM操作
*  订阅数据来源
*  写入文件系统
*  获取用户输入 


## 深入watchEffect
#### 自动收集依赖并且触发
#### 自动销毁effect
#### 使副作用失效（onInvalidate）
#### 副作用执行顺序（优先于DOM前执行，但是可以改变执行顺序 flush:post）
* React 的执行顺序不可调整，都只在组件updated之后触发


## watch 精确控制effect
### watch的基本用法
### watch ractive的单个值
* 使用torefs
* 使用getter函数
### watch多个值
### react的做法
### 和watchEffect 对比
* 懒执行副作用
* 什么状态应该触发watcher重新运行
* 访问数据变化前后的值



## 自定义函数 -hooks
* 将相关的feature组合在一起
* 非常易于重用

## 界面的需求-转化数据的描述

## 自定义函数的优点2
* 函数的形式调用，清楚的了解参数和返回的类型
* 避免命名冲突
* 代码逻辑脱离组件

