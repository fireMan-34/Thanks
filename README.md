# 计划
    <p>1.使用markDown语法优化README.md</p>
    <p>2.对自己对不起的事物祈祷。</p>
    <p>3.使用逻辑化输出重构REAMDE.md</p>
    <p>4.对帮助我的事物祈祷。</p>
    <p>5.对我所热爱的事物祈祷</p>
    <p>6.对我祈祷</p>
# 问题
    <p>问题就是经验，不要怕慢，吸收了就可以成长。</p>

# 优化
    嵌入字符串处理，防攻击。（react基本预处理过）【ok】
    命名语义化（提高命名水准，总结规律，实践规律）
    接口降级、异常、缓存处理 、预处理、auth【】
    函数泛化（其实核心就是提高抽象性，但可能会写大量curry化代码，其实就是抽象->具象逻辑描述。）
    阅读舒适度（代码语义化，逻辑表达等式，）
    性能优化（降低非必要执行频次，算法优化（逻辑表达代价），使用底层代码，使用过程化表达）
    匹配器模式设计阅读（之前没有了解过，只是从自己的经验中提取出来的或者所从接触过的代码提取的概念）
    规范化Git（提交、分支）

# 感受->建议（角色：体验者、朋友和参谋）类泳道图
    好困，两个月就快忘了->身体素质和身体保养方面需要多多注重->注意眼睛脑部和脖颈供血，保护和提高心肺能力，
    保护腰部和脊椎，多锻炼腿部。按时作息，专注自己的事情，减少内耗。
    计划
    脑瓜子疼，想不出->思考方式欠妥，相信自己是个富有思考的人，只是方式欠佳。->建议刻意练习自己的思考模式
    语文表达缺失，前言不搭后语。->语义表达->讲话时先考虑需要表达什么内容，组织自己语言，尝试讲话，观察反应，适当调整。
    分支混乱->找机会学一下，多多刻意练习。plan A
    代码阅读性很差->代码处理方面过于随意，没有严格的将阅读性锻炼进入自己的意识内->找机会练一下plan A
    如果字段处理api的字段不多，自己使用笨重的库或者函数或者流程引擎->锻炼写代码量级预估能力。
    心智模型其实就是自己的思考模式->你不必感到担心，你独特的习惯也会成为社会上独特的人。->其实我觉得你能做到为自己的心智而自豪就已经超越了过去。
    文章好长啊，就不要折磨自己，用翻译插件吧。->我知道你很想要边学边思考，但是事情总是有轻重缓急之分。->我给的建议是，对于介词、语法之类学习为主，词汇的看空闲程度，摘1-3个慢慢积累，其实已经就很好了。
    陌生的useReducer->好好学就可以了
    算术怎么也不过关，好歹小学也是数学一霸，哭。->加油吧，把自己不足慢慢弥补回来。

    我这个人太敏感又容易固执忧容易疲惫，老哥的话说得很对，但是我内心还是被打击了一下。->成长就是需要改变自己的不足，知道不足才有可以改进的地方，这是好事。->我觉得你的思维缺少深层次的成长渴望，你只是在抱怨自己的不足造成的困扰，相信你能够清晰自我否定，其实也是一种自我超越的表达，追随你的感觉，加油。
    其实，我理智告诉要应该要好好感谢老哥，他替我讲出不足，我的内心还是有点固执。->努力提高自己吧，帮助的层度更好，但并非说站在低处就无法帮助别人。
    所以，我需要把自己喜欢改变的一面表现出来。
    我刚才又堕落，又浪费自己仅有的精神。->加油，其实这也算你独特放松方式，你要做的就是祈祷回馈。

# bug
    q.为什么参数双层嵌套[ok]<Com {props}>
    a.使用对象解构参数解决，<Com {...props}>
    虚拟dom的参数解析是props={}

    q,聚集性模块输出不了[ok]
    a.文件位置错误

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
        1.调与用的区别所在，灵感。
    在想如何做axios的请求缓存处理的时候，一直都是把思维定在如何寻找axios提供api处理上，（用）
    突然一个想到那为什么我不通过装饰器（当时想的是调axios的函数提供数据缓存的功能上）（调）。
    我现在想想，用就是去遵守它的规律，调就是提供自己规律，接入别人的功能。还有更多的区别吗？改装工具？
    呜呜呜？明明我会装饰器的，为什么脑瓜子却记不得它的好呢？
    灵感二突。
        假如你是库模块之类作者，你是希望使用者以什么的形式去调或用？
        好像总结的东西很没干货的感觉。
        辨析除了装饰器可以实现缓存，还有什么缓存的可能吗？
        从功能结合上来看axios的缓存功能就是请求->响应，我们如果想要加入功能就需要，在请求前做出处理，就行，
        至于走请求还是缓存就由调用者判断。
        我觉得除非接口做到纯化，就是不变性，不然缓存，数据一致性的要求下。
        数据一致性容易受到网络抖动，本地状态不一致，后台数据更新不一致
        但是restful Api指的是资源对象的不变性即可，而不是全不变性。
        那如何去描述那种不全变性，早上是你，晚上还是你，这就是restful，至于你是好是坏，是不管的。
        那有没有描述那种在某个境地的资源对象，这样是否会造成数据的压力，
        最重要的是什么规则如何在不同时空条件指向某个境地的资源对象。
        curry化具备灵活和封装性，惰性执行和活跃执行的结合。
        灵感三突
        某种说法，我现在说的其实就是memoize 处理。需要一个合理索引处理。
    从这次灵感看的出来，我的思路容易打岔，忘记自己所有的所学，也就是自己没有深入所学，看来思考代码最好多多想
    一下流程图，用流程图去思考之间的抽象，才是合理的思考方式。
    memoize function记忆化处理，其实就是复用复杂的计算结果。和算法中快速算法之类，它们之间都需要一种
    索引技术进行处理（特征），如何更好总结结构的特征是需要我去学习的。
    需要具备条件按纯函数+索引相关知识。
    看来要多多学习索引的知识。
    为什么我们需要get和setter还有纯函数呢？一部分原因就是见名知其一，这样的写出代码不会是过程化的产物，而是逻辑产物。
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
    知觉障碍、高敏感人格
    “忘记你已经学到的。” — Yoda。
# Verson
语义化
提交规范
    添加git cz
# Repo[仓库]
1.问题很简单，但是解决过程，过度使用一些复杂的东西。而且格式不太对。
2.没必要使用redux，能以简单的方式实现就用简单的方式实现。
3.如果使用了 redux，那么数据处理都放在 reducer 里实现。
4.如果有独立组件，可以使用单文件形式
5.如apiShowItem这个命名不合适。
6.代码中尽量不要有中文。【】
7.使用README而不是myReadme这个会展示repo
8.另外，可以直接给 github 链接，不必要是 .git 地址

# Work
    (1)复习Redux，Router，免得记忆被清空。
    (2)多模拟面试，避免讲话紧张。
    (3)我是时候该学习一下别人的匹配器模式，我想我的匹配器更多的是从正则里提取的思想。
    (4)看到一位优秀的博主：https://www.jianshu.com/p/59145689d266?from=groupmessage，语义模型
        在工程上，需要考虑哪种编程范式和语义模型之间的Gap最小，成本最低。现代编程语言基本都支持多范式，给程序员提供了灵活选择的自由。
    (5)盲猜：表示层主要是用来表示，就像翻译一样提供一个，在层级之间的处理识别支持