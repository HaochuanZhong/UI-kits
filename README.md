语芯网络科技网站样式开发模板

该模板将样式分为：通用（Layout）, 组件（Components）, 页面（Pages）三大模块

    1. 通用（Layout）：通用样式文件包括：布局（Layout）, 字体（Fonts）, 颜色（Tone）, 间距（Spacing）
    2. 组件（Components）：组件样式文件包括了组件本身样式，以及一些基础组件样式例如：按钮（Buttons）, 顶部导航（Navbar）, 底部导航（Footer）, 卡片（Cards）
    3. 页面（Pages）：页面样式文件仅作为对于使用通用&组件的补充引入


使用规则：
    1. 通用（Layout）样式作为全局样式引入所有页面和组件，通过添加class的方式来启用具体样式
        例：<p class='running-text font-default-black'>这段文字表示内容为正文，采用的颜色是字体默认黑色</p>
    2. 组件（Components）在启用通用样式的基础上对可复用组件进行编辑，其中包括适配，动效以及其他排布
    3. 页面（Pages）仅作为在使用通用样式和组件样式后作为对于页面的补充，仅作用于页面，不覆写全局样式和组件样式
    4. 外部引入css需要单独注释


特别注意：
    1. 除字体或icon外个别元素，其他内容均尽量使用动态单位，例如：rem，%
    2. 对于文字的编辑尽量不使用行高

*index.html作为通用样式的演示Demo
*其他内容和规则详见各css文件