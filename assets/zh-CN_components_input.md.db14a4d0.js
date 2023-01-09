import{_ as p,o as c,c as r,e as s,f as e,a,b as n,r as l}from"./app.384dcd20.js";const v=JSON.parse('{"title":"按钮组件 Input","description":"","frontmatter":{},"headers":[{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[{"level":3,"title":"header 插槽","slug":"header-插槽","link":"#header-插槽","children":[]},{"level":3,"title":"footer 插槽","slug":"footer-插槽","link":"#footer-插槽","children":[]}]},{"level":2,"title":"组合式 API","slug":"组合式-api","link":"#组合式-api","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}]},{"level":2,"title":"根元素 class","slug":"根元素-class","link":"#根元素-class","children":[]},{"level":2,"title":"input class","slug":"input-class","link":"#input-class","children":[]},{"level":2,"title":"header class","slug":"header-class","link":"#header-class","children":[]},{"level":2,"title":"footer class","slug":"footer-class","link":"#footer-class","children":[]}],"relativePath":"zh-CN/components/input.md","lastUpdated":1673285717000}'),d={name:"zh-CN/components/input.md"},i=e('<h1 id="按钮组件-input" tabindex="-1">按钮组件 Input <a class="header-anchor" href="#按钮组件-input" aria-hidden="true">#</a></h1><p>多数组件库的最初都是从一个组件开始。</p><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h2><p>开发者可以使用通过 <code>useCsssInput</code> 来初始化一个 <code>Input</code> 组件。（<a href="#%E7%BB%84%E5%90%88%E5%BC%8F-api">组合式 API</a>）</p><p>但多数情况下可以直接使用它。</p>',5),h=e(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCsssInput</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csss-ui/csss-ui.es.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">COMP</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Input</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCsssInput</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I dreamed be a writer.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">active</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">⭐</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">c-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h2><p><code>csss-ui</code> 基于插槽实现了多数组件，这也是其中之一。</p><h3 id="header-插槽" tabindex="-1">header 插槽 <a class="header-anchor" href="#header-插槽" aria-hidden="true">#</a></h3><p><code>header 插槽</code> 用来在 input 之前展示一些内容。</p>`,5),y=a("h3",{id:"footer-插槽",tabindex:"-1"},[n("footer 插槽 "),a("a",{class:"header-anchor",href:"#footer-插槽","aria-hidden":"true"},"#")],-1),D=a("p",null,[a("code",null,"footer 插槽"),n(" 用来在 input 之后展示一些内容。")],-1),F=e(`<h2 id="组合式-api" tabindex="-1">组合式 API <a class="header-anchor" href="#组合式-api" aria-hidden="true">#</a></h2><p>开发者可以使用通过 <code>useCsssInput</code> 来初始化一个 <code>Input</code> 组件。</p><p>一般情况下，<code>csss—ui</code> 都建议开发者使用这种方法。</p><div class="tip custom-block"><p class="custom-block-title">使用示例</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">返回值 </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCsssInput</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 组件初始化样式</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h3><p>函数初始化时接受一个包含 <code>state</code> 、 <code>style</code> 的对象作为参数。</p><h4 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h4><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>model</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">model 默认值</td></tr><tr><td>active</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">选中状态</td></tr></tbody></table><h4 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h4><p>style 除了一些基础状态，还包括两个子对象，分别是代表 class 设置的 <code>classList</code> 和 定义 css 变量的 <code>property</code>。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td><code>classList</code></td><td style="text-align:left;">/</td><td style="text-align:left;"><a href="#classlist">classList</a></td></tr><tr><td><code>property</code></td><td style="text-align:left;">/</td><td style="text-align:left;"><a href="#property">property</a></td></tr></tbody></table><h5 id="classlist" tabindex="-1">classList <a class="header-anchor" href="#classlist" aria-hidden="true">#</a></h5><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>input</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置<a href="#%E6%A0%B9%E5%85%83%E7%B4%A0-class">根元素 class</a></td></tr><tr><td>inputMain</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置<a href="#input-class">input class</a></td></tr><tr><td>header</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置<a href="#header-class">header class</a></td></tr><tr><td>footer</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置<a href="#footer-class">footer class</a></td></tr></tbody></table><h5 id="property" tabindex="-1">property <a class="header-anchor" href="#property" aria-hidden="true">#</a></h5><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td><code>--border-color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">边框颜色</td></tr><tr><td><code>--border-radius</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">边框弧度</td></tr></tbody></table><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h3><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>COMP</code></td><td>组件实例，需要与 template 中的组件绑定</td></tr><tr><td><code>read</code></td><td><a href="#read-%E7%BB%84%E4%BB%B6%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">组件只读属性</a></td></tr><tr><td><code>state</code></td><td><a href="#state-%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81">组件状态</a></td></tr><tr><td><code>style</code></td><td><a href="#read-%E7%BB%84%E4%BB%B6%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">组件只读属性</a></td></tr></tbody></table><h4 id="read-组件只读属性" tabindex="-1">read 组件只读属性 <a class="header-anchor" href="#read-组件只读属性" aria-hidden="true">#</a></h4><p>提供一些只读但无法修改的属性。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>/</td><td style="text-align:left;">/</td><td style="text-align:left;">/</td></tr></tbody></table><h4 id="state-组件状态" tabindex="-1">state 组件状态 <a class="header-anchor" href="#state-组件状态" aria-hidden="true">#</a></h4><p>开发者可根据实际需要随时修改组件状态。</p><p>同<a href="#state">state</a></p><h4 id="style-样式" tabindex="-1">style 样式 <a class="header-anchor" href="#style-样式" aria-hidden="true">#</a></h4><p>开发者可根据实际需要随时修改组件样式。</p><p>同<a href="#style">style</a></p><h2 id="根元素-class" tabindex="-1">根元素 class <a class="header-anchor" href="#根元素-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置根元素的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，根元素保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，根元素会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，根元素会失去所有默认 class，样式将由开发者进行完成。</p>`,31),u=e('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>所有 css 变量都存放于根元素当中，当默认根元素 class 失效后，将失去组件下所有 css 变量。</p></div><h2 id="input-class" tabindex="-1">input class <a class="header-anchor" href="#input-class" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>input class 指的是 input 元素本体。</p></div><p>通过一个 <code>string[]</code> 来设置 input 的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，input 保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，input 会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，input 会失去所有默认 class，样式将由开发者进行完成。</p>',7),A=e('<h2 id="header-class" tabindex="-1">header class <a class="header-anchor" href="#header-class" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>header class 指的是 <code>header 插槽</code> 元素本体。</p></div><p>通过一个 <code>string[]</code> 来设置 header 的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，header 保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，header 会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，header 会失去所有默认 class，样式将由开发者进行完成。</p>',6),C=e('<h2 id="footer-class" tabindex="-1">footer class <a class="header-anchor" href="#footer-class" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>footer class 指的是 <code>footer 插槽</code> 元素本体。</p></div><p>通过一个 <code>string[]</code> 来设置 footer 的 class。</p><p>当第一个元素值为 <code>&quot;&quot;</code> 时，footer 保留组件 class。</p><p>当有且只有一个元素值为 <code>_</code> 时，footer 会失去所有 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，footer 会失去所有默认 class，样式将由开发者进行完成。</p>',6);function _(f,g,b,m,x,E){const o=l("input-demo"),t=l("demo");return c(),r("div",null,[i,s(o),h,s(t,{src:"/demos/input/Header.vue",title:"",desc:""}),y,D,s(t,{src:"/demos/input/Footer.vue",title:"",desc:""}),F,s(t,{src:"/demos/input/RootClass.vue",title:"",desc:""}),u,s(t,{src:"/demos/input/InputClass.vue",title:"",desc:""}),A,s(t,{src:"/demos/input/HeaderClass.vue",title:"",desc:""}),C,s(t,{src:"/demos/input/FooterClass.vue",title:"",desc:""})])}const I=p(d,[["render",_]]);export{v as __pageData,I as default};
