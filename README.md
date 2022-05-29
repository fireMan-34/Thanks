<!-- 问题 -->
# 问题
1.json序列化处理竟然忘了。[ok]
2.react18-cra安装craco修改配置有警告提示。[ok]:暂时cra没有对应的croco，如果不行就reject或者自己webpack构建
3.redux和router两个月就快忘了，哭笑。[]语法也变了一部分。
4.刷新次数为2，盲猜组件严格模式下刷两次,据说打包模式下不会存在问题[ok]

<!-- 优化 -->
# 优化
//嵌入字符串处理，防攻击
//命名语义化
//接口降级、异常、缓存处理 、预处理、auth
//函数泛化
//阅读舒适度
//性能优化

//发现盲点，阅读理解堪忧。
//类似lodah mapKey功能，弱很多，那个泛化才叫ok。
//正则匹配器+处理器，瞎写的，按正规写法我猜测处理也是多样化的，不像我的就一个简简单单处理功能，匹配规则，匹配规则的匹配器+处理规则+处理规则的处理器

//git保存[ok]
//git版本[加入cz，勉强也算提交规范点，(lll￢ω￢)]
//git上传[ok]



<!-- 感受 -->
# 感受
    好困
    两个月就快忘了
    太久没有写项目连跑项目都不知道
    困惑？return Propmise被包装后识别不出来
    低级错误，promise没有惰性执行
    脑瓜子疼，想不出
    语文表达缺失，前言不搭后语。流泪。
    oh,my god,why are you branchs chaos.
    代码阅读性很差
    如果字段处理api的字段不多，自己使用笨重的库或者函数或者流程引擎，有意思吗？

    “忘记你已经学到的。” — Yoda,嘿嘿，我也喜欢忘记自己所学，这样就没有已知障碍。

    又提高心智模型，是不是要深入，但我现在其实最重要的是熟练度啊

    文章好长啊，就不要折磨自己，用翻译插件吧。

    陌生的
        useReducer
    算术怎么也不过关，好歹小学也是数学一霸，哭

<!-- bug -->
# bug
    q.为什么参数双层嵌套[ok]
    a.使用对象解构参数解决，<Com {...props}>

    q,聚集性模块输出不了[ok]
    a.文件位置错误

    q.403错误，难道又是我触发无限请求，在递归请求？？？请求频率问题

    q.与预设字段不一致
    a.加了个简单对象转换和字段规则匹配。[ok]
        不足之处：没有对应的处理器，或者说我不知道处理器和匹配器应该是解耦状态好，还是统一状态。
        我认为匹配器主要在特征识别功能上，而处理器主要功能在特征处理上。
        我认为复杂数据，可能会有快速识别特征。
        我也认为两者之间的工作是存在一个公有流程。


    q.github推不上去，[ok]
    a.->过了很久，返回连接超时->连不上去,我有代理呀啊，那可能是代理没有使用进程模式或者说代理只有一种代理处理，导3致其他网络还是本地请求。->链接上去，新电脑尝试登陆验证设备，选择浏览器端。

    q.hook保存的状态更新后还是原来状态，更加奇怪的是接收的源映射，尽可以响应，一直是初始状态。[ok]
    a.原来是useCallback缓存函数问题，因为我设置的是组件创建后的依赖项，所以它的函数一直没有变化，
    但有趣的是useState仍然可以工作，但是它的副作用去无法去发现变化（可能记忆有误）。

    q.Math.floor(listenArray.length/loadingCount)-isNeedLess?1:0
    a.表达式会把前面的结果全覆盖掉,真的是这样的。
# 灵感
# 探索
    by
        search goolge and to find ` React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array. If 'dispatch' changes too often, find the parent component that defines it and wrap that definition in useCallback` 
        in Stack Overflow
     to find https://overreacted.io/a-complete-guide-to-useeffect/ and he is new blog
     ->https://www.robinwieruch.de/react-hooks-fetch-data/ 大佬推荐的函数式请求处理
     另一位大佬说数据请求在hook未来不被允许，他说react未来会推荐Suspense作为处理方式
     反复反复转圈，老实看错误报道就可以解决了，eslint认为我有在useEffect里调用dispatch，所以加入dispatch作为依赖项就可以。  
     输入，搜索分离，减轻http请求频率，状态锁降低频率，至于什么防抖节流，这些看情况，都是差不多原理，核心都是降低执行频次。
     async/awit异常处理tryCatch其实俺会。
     使用表单+阻止默认事件也是可以的。
     用自定义钩子获取数据，减少重复代码。
     深度：A Reducer Hook returns us a state object and a function to alter the state object. The function -- called dispatch function -- takes an action which has a type and an optional payload. All this information is used in the actual reducer function to distill a new state from the previous state, the action's optional payload and type. Let's see how this works in code:
     依赖项可以多入参[v1,v2,v3,....]
     github评论系统感想，文本效果应该就是匹配器+样式替换自动处理器，多的可能加个规则引擎。
     看到nodejs指北，配置化表单实践
        作为认为是一份协议，但我更多的喜欢解释为规则。
        配置化+模板生成器+渲染器->虚拟dom->真实dom

# Verson
语义化
提交规范
    添加git cz
# Repo[仓库]
1.问题很简单，但是解决过程，过度使用一些复杂的东西。
2.没必要使用redux，能以简单的方式实现就用简单的方式实现。
3.如果使用了 redux，那么数据处理都放在 reducer 里实现。
4.如果有独立组件，可以使用单文件形式
5.如apiShowItem这个命名不合适。
6.代码中尽量不要有中文。
7.使用README而不是myReadme这个会展示repo
8.另外，可以直接给 github 链接，不必要是 .git 地址