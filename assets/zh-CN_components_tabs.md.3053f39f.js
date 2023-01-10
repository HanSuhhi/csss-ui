import{_ as p,o as c,c as d,e as s,f as e,a,b as l,r as n}from"./app.43c8bb46.js";const I=JSON.parse('{"title":"标签页组件 Tabs","description":"","frontmatter":{},"headers":[{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[{"level":3,"title":"list 插槽","slug":"list-插槽","link":"#list-插槽","children":[]},{"level":3,"title":"panel-[*] 插槽","slug":"panel-插槽","link":"#panel-插槽","children":[]},{"level":3,"title":"default 插槽","slug":"default-插槽","link":"#default-插槽","children":[]}]},{"level":2,"title":"组合式 API","slug":"组合式-api","link":"#组合式-api","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}]},{"level":2,"title":"选中项","slug":"选中项","link":"#选中项","children":[]},{"level":2,"title":"切换动画","slug":"切换动画","link":"#切换动画","children":[]},{"level":2,"title":"根元素 class","slug":"根元素-class","link":"#根元素-class","children":[]},{"level":2,"title":"list 根元素 class","slug":"list-根元素-class","link":"#list-根元素-class","children":[]},{"level":2,"title":"panel 根元素 class","slug":"panel-根元素-class","link":"#panel-根元素-class","children":[]},{"level":2,"title":"list 子元素 class","slug":"list-子元素-class","link":"#list-子元素-class","children":[]},{"level":2,"title":"panel 子元素 class","slug":"panel-子元素-class","link":"#panel-子元素-class","children":[]}],"relativePath":"zh-CN/components/tabs.md","lastUpdated":1673368566000}'),r={name:"zh-CN/components/tabs.md"},i=e('<h1 id="标签页组件-tabs" tabindex="-1">标签页组件 Tabs <a class="header-anchor" href="#标签页组件-tabs" aria-hidden="true">#</a></h1><p>通过有层级的开放能力，让开发者使用更加不被拘束的 Tabs 标签页</p><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h2><p>开发者可以使用通过 <code>useCsssTabs</code> 来初始化一个 <code>Tabs</code> 组件。（<a href="#%E7%BB%84%E5%90%88%E5%BC%8F-api">组合式 API</a>）</p>',4),y=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCsssTabs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csss-ui/csss-ui.es.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">COMP</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Tabs</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> read </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCsssTabs</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CTabs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Tabs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">tab 1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">tab 2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">disabled</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">tab 4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">panel</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">) in </span><span style="color:#A6ACCD;">read</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">panels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">panel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> #[</span><span style="color:#C792EA;">panel</span><span style="color:#89DDFF;">]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">CTabs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h2><p><code>csss-ui</code> 基于插槽实现了多数组件，这也是其中之一。</p><h3 id="list-插槽" tabindex="-1">list 插槽 <a class="header-anchor" href="#list-插槽" aria-hidden="true">#</a></h3><p><code>list 插槽</code> 会根据插槽内子元素的数量，自动生成相对应的标题以及 <a href="#panel-%E6%8F%92%E6%A7%BD"><code>panel 插槽</code></a>。</p><p>插槽是自由的，你可以随意生成插槽内容，以及生成不同的样式。</p><p>例如：</p>`,7),D=a("p",null,[l("当你想禁用某个选项时，只需要在对应的元素加上 "),a("code",null,"data-disabled"),l(" 标签即可。")],-1),h=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>data-disabled</code> 符合 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*" target="_blank" rel="noreferrer">data-*</a> 规范。</p></div><h3 id="panel-插槽" tabindex="-1">panel-[*] 插槽 <a class="header-anchor" href="#panel-插槽" aria-hidden="true">#</a></h3><p><code>panel 插槽</code>会根据 <a href="#list-%E6%8F%92%E6%A7%BD"><code>list 插槽</code></a>生成，默认的插槽名称为&quot;panel-index&quot;。</p><p>例如 list 插槽有 3 个子元素,那么对应的 3 个 panel 插槽分别为: <code>panel-0</code>, <code>panel-1</code>, <code>panel-2</code>。</p>',4),F=a("p",null,[l("vue 插槽支持"),a("a",{href:"https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names",target:"_blank",rel:"noreferrer"},"动态插槽名"),l("，因此组件也提供了相关的动态名称数组。")],-1),A=a("p",null,"这在 panels 是统一的样式内容时很有用。",-1),_=e(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用 <a href="#%E7%BB%84%E5%90%88%E5%BC%8F-api">组合式 API</a> 需要将 <code>COMP</code> 与 组件实例进行绑定。</p></div><h3 id="default-插槽" tabindex="-1">default 插槽 <a class="header-anchor" href="#default-插槽" aria-hidden="true">#</a></h3><p>考虑到特殊场景下会有更多的元素参与到 tabs 布局，因此 tabs 布局也会显示 <code>default 插槽内容</code>。</p><h2 id="组合式-api" tabindex="-1">组合式 API <a class="header-anchor" href="#组合式-api" aria-hidden="true">#</a></h2><p>开发者可以使用通过 <code>useCsssTabs</code> 来初始化一个 <code>Tabs</code> 组件。</p><p>一般情况下，<code>csss—ui</code> 都建议开发者使用这种方法。</p><div class="tip custom-block"><p class="custom-block-title">使用示例</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">返回值 </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCsssTabs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 组件初始化状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 组件初始化样式</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h3><p>函数初始化时接受一个包含 <code>state</code> 、 <code>style</code> 的对象作为参数。</p><h4 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h4><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>active</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><a href="#%E9%80%89%E4%B8%AD%E9%A1%B9">选中项</a></td></tr></tbody></table><h4 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h4><p>style 除了一些基础状态，还包括两个子对象，分别是代表 class 设置的 <code>classList</code> 和 定义 css 变量的 <code>property</code>。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>needTransition</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><a href="#%E5%88%87%E6%8D%A2%E5%8A%A8%E7%94%BB">是否需要切换动画</a></td></tr><tr><td><code>classList</code></td><td style="text-align:left;">/</td><td style="text-align:left;"><a href="#classlist">classList</a></td></tr><tr><td><code>property</code></td><td style="text-align:left;">/</td><td style="text-align:left;"><a href="#property">property</a></td></tr></tbody></table><h5 id="classlist" tabindex="-1">classList <a class="header-anchor" href="#classlist" aria-hidden="true">#</a></h5><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>tabs</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置<a href="#%E6%A0%B9%E5%85%83%E7%B4%A0-class">根元素 class</a></td></tr><tr><td>list</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#list-%E6%A0%B9%E5%85%83%E7%B4%A0-class">list 根元素 class</a></td></tr><tr><td>panel</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#panel-%E6%A0%B9%E5%85%83%E7%B4%A0-class">panels 根元素 class</a></td></tr><tr><td>listItem</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#list-%E5%AD%90%E5%85%83%E7%B4%A0-class">list 子元素的 class</a></td></tr><tr><td>panelItem</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#panel-%E5%AD%90%E5%85%83%E7%B4%A0-class">panel 子元素的 class</a></td></tr></tbody></table><h5 id="property" tabindex="-1">property <a class="header-anchor" href="#property" aria-hidden="true">#</a></h5><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td><code>--list-item-x</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 水平方向 padding</td></tr><tr><td><code>--list-item-y</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 竖直方向 padding</td></tr><tr><td><code>--list-item-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 的文字颜色</td></tr><tr><td><code>--list-item-bg-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 的背景颜色</td></tr><tr><td><code>--list-item-tag-width</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 装饰符的宽度</td></tr><tr><td><code>--list-item-tag-bg-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 装饰符的背景颜色</td></tr><tr><td><code>--list-item-hover-bg-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item hover 时的背景颜色</td></tr><tr><td><code>--list-item-active-bg-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 激活时的背景颜色</td></tr><tr><td><code>--list-item-active-x</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 激活时水平方向 padding</td></tr><tr><td><code>--list-item-active-y</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 激活时竖直方向 padding</td></tr><tr><td><code>--list-item-active-tag-bg-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">list item 激活时装饰符的背景颜色</td></tr></tbody></table><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h3><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>COMP</code></td><td>组件实例，需要与 template 中的组件绑定</td></tr><tr><td><code>read</code></td><td><a href="#read-%E7%BB%84%E4%BB%B6%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">组件只读属性</a></td></tr><tr><td><code>state</code></td><td><a href="#state-%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81">组件状态</a></td></tr><tr><td><code>style</code></td><td><a href="#read-%E7%BB%84%E4%BB%B6%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">组件只读属性</a></td></tr></tbody></table><h4 id="read-组件只读属性" tabindex="-1">read 组件只读属性 <a class="header-anchor" href="#read-组件只读属性" aria-hidden="true">#</a></h4><p>提供一些只读但无法修改的属性。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>total</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">当前项目数</td></tr><tr><td>panels</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">panels 插槽名数组</td></tr></tbody></table><h4 id="state-组件状态" tabindex="-1">state 组件状态 <a class="header-anchor" href="#state-组件状态" aria-hidden="true">#</a></h4><p>开发者可根据实际需要随时修改组件状态。</p><p>同<a href="#state">state</a></p><h4 id="style-样式" tabindex="-1">style 样式 <a class="header-anchor" href="#style-样式" aria-hidden="true">#</a></h4><p>开发者可根据实际需要随时修改组件样式。</p><p>同<a href="#style">style</a></p><h2 id="选中项" tabindex="-1">选中项 <a class="header-anchor" href="#选中项" aria-hidden="true">#</a></h2><p>组件支持提供默认的选中值。以及提供修改的 state。</p>`,31),C=a("h2",{id:"切换动画",tabindex:"-1"},[l("切换动画 "),a("a",{class:"header-anchor",href:"#切换动画","aria-hidden":"true"},"#")],-1),g=a("p",null,"如果你不需要切换动画，你可以手动关闭它。",-1),u=e('<h2 id="根元素-class" tabindex="-1">根元素 class <a class="header-anchor" href="#根元素-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置根元素的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，根元素保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，根元素会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，根元素会失去所有默认 class，样式将由开发者进行完成。</p>',5),f=e('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>所有 css 变量都存放于根元素当中，当默认根元素 class 失效后，将失去组件下所有 css 变量。</p></div><h2 id="list-根元素-class" tabindex="-1">list 根元素 class <a class="header-anchor" href="#list-根元素-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 list 根元素的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，list 根元素保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，list 根元素会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，list 根元素会失去所有默认 class，样式将由开发者进行完成。</p>',6),b=e('<h2 id="panel-根元素-class" tabindex="-1">panel 根元素 class <a class="header-anchor" href="#panel-根元素-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 panel 根元素的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，panel 根元素保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，panel 根元素会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，panel 根元素会失去所有默认 class，样式将由开发者进行完成。</p>',5),m=e('<h2 id="list-子元素-class" tabindex="-1">list 子元素 class <a class="header-anchor" href="#list-子元素-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 list 子元素的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，list 子元素保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，list 子元素会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，list 子元素会失去所有默认 class，样式将由开发者进行完成。</p>',5),x=e('<h2 id="panel-子元素-class" tabindex="-1">panel 子元素 class <a class="header-anchor" href="#panel-子元素-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 panel 子元素的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，panel 子元素保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，panel 子元素会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，panel 子元素会失去所有默认 class，样式将由开发者进行完成。</p>',5);function E(T,v,B,S,q,P){const o=n("tabs-demo"),t=n("demo");return c(),d("div",null,[i,s(o),y,s(t,{src:"/demos/tabs/ListSlot.vue",title:"",desc:""}),D,s(t,{src:"/demos/tabs/ListSlotDisabled.vue",title:"",desc:""}),h,s(t,{src:"/demos/tabs/PanelSlot.vue",title:"",desc:""}),F,A,s(t,{src:"/demos/tabs/PanelSlotDynamic.vue",title:"",desc:""}),_,s(t,{src:"/demos/tabs/DefaultActive.vue",title:"",desc:""}),C,g,s(t,{src:"/demos/tabs/Transition.vue",title:"",desc:""}),u,s(t,{src:"/demos/tabs/RootClass.vue",title:"",desc:""}),f,s(t,{src:"/demos/tabs/ListClass.vue",title:"",desc:""}),b,s(t,{src:"/demos/tabs/PanelClass.vue",title:"",desc:""}),m,s(t,{src:"/demos/tabs/ListItemClass.vue",title:"",desc:""}),x,s(t,{src:"/demos/tabs/PanelItemClass.vue",title:"",desc:""})])}const V=p(r,[["render",E]]);export{I as __pageData,V as default};