import{_ as c,o as p,c as d,e as a,f as l,a as s,b as e,r as o}from"./app.4233aa09.js";const W=JSON.parse('{"title":"布局组件 Layout","description":"","frontmatter":{},"headers":[{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[{"level":3,"title":"header 插槽","slug":"header-插槽","link":"#header-插槽","children":[]},{"level":3,"title":"aside 插槽","slug":"aside-插槽","link":"#aside-插槽","children":[]},{"level":3,"title":"footer 插槽","slug":"footer-插槽","link":"#footer-插槽","children":[]},{"level":3,"title":"default 插槽","slug":"default-插槽","link":"#default-插槽","children":[]}]},{"level":2,"title":"组合式 API","slug":"组合式-api","link":"#组合式-api","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}]},{"level":2,"title":"布局类型","slug":"布局类型","link":"#布局类型","children":[{"level":3,"title":"左右布局","slug":"左右布局","link":"#左右布局","children":[]},{"level":3,"title":"上下布局","slug":"上下布局","link":"#上下布局","children":[]},{"level":3,"title":"首尾布局","slug":"首尾布局","link":"#首尾布局","children":[]},{"level":3,"title":"首侧布局","slug":"首侧布局","link":"#首侧布局","children":[]},{"level":3,"title":"尾侧布局","slug":"尾侧布局","link":"#尾侧布局","children":[]},{"level":3,"title":"侧布局","slug":"侧布局","link":"#侧布局","children":[]}]},{"level":2,"title":"header 高度","slug":"header-高度","link":"#header-高度","children":[]},{"level":2,"title":"aside 宽度","slug":"aside-宽度","link":"#aside-宽度","children":[]},{"level":2,"title":"footer 高度","slug":"footer-高度","link":"#footer-高度","children":[]},{"level":2,"title":"根元素 class","slug":"根元素-class","link":"#根元素-class","children":[]},{"level":2,"title":"header class","slug":"header-class","link":"#header-class","children":[]},{"level":2,"title":"aside class","slug":"aside-class","link":"#aside-class","children":[]},{"level":2,"title":"footer class","slug":"footer-class","link":"#footer-class","children":[]},{"level":2,"title":"main class","slug":"main-class","link":"#main-class","children":[]}],"relativePath":"zh-CN/components/layout.md","lastUpdated":1671509014000}'),r={name:"zh-CN/components/layout.md"},i=l('<h1 id="布局组件-layout" tabindex="-1">布局组件 Layout <a class="header-anchor" href="#布局组件-layout" aria-hidden="true">#</a></h1><p>它可以快速帮你完成页面布局，基于<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noreferrer">CSS Grid Layout</a>实现。</p><p>它使用起来会很便捷的，如果你习惯使用<a href="https://cn.vuejs.org/guide/components/slots.html#slots" target="_blank" rel="noreferrer">插槽</a>的话。</p><p>页面布局时使用它多是一件美事。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>布局组件依赖于<code>display: grid</code>，即 grid 布局，请先确认浏览器功能对此是否兼容。</p></div><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h2><p>开发者可以使用通过 <code>useCsssLayout</code> 来初始化一个 <code>Layout</code> 组件。（<a href="#%E7%BB%84%E5%90%88%E5%BC%8F-api">组合式 API</a>）</p>',7),h=l(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useCsssLayout</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csss-ui/csss-ui.es.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">COMP</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Layout </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCsssLayout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">asideWidthSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">headerHeightSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">layoutType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">header-aside</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">--footer-height</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CLayout</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo-layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">header</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">aside</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">aside</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">main </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">CLayout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h2><p><code>csss-ui</code> 基于插槽实现了多数组件，这也是其中之一。</p><h3 id="header-插槽" tabindex="-1">header 插槽 <a class="header-anchor" href="#header-插槽" aria-hidden="true">#</a></h3><p><code>header 插槽</code> 用于定义布局的顶部区域。</p><p>开发者们仅需关注插槽内容，布局交给组件本身。</p><h3 id="aside-插槽" tabindex="-1">aside 插槽 <a class="header-anchor" href="#aside-插槽" aria-hidden="true">#</a></h3><p><code>aside 插槽</code> 用于定义布局的顶部区域。</p><p>开发者们仅需关注插槽内容，布局交给组件本身。</p><h3 id="footer-插槽" tabindex="-1">footer 插槽 <a class="header-anchor" href="#footer-插槽" aria-hidden="true">#</a></h3><p><code>footer 插槽</code> 用于定义布局的顶部区域。</p><p>开发者们仅需关注插槽内容，布局交给组件本身。</p><h3 id="default-插槽" tabindex="-1">default 插槽 <a class="header-anchor" href="#default-插槽" aria-hidden="true">#</a></h3><p>用于定义布局的核心区域。</p><p>开发者们仅需关注插槽内容，布局交给组件本身。</p><h2 id="组合式-api" tabindex="-1">组合式 API <a class="header-anchor" href="#组合式-api" aria-hidden="true">#</a></h2><p>开发者可以使用通过 <code>useCsssLayout</code> 来初始化一个 <code>Layout</code> 组件。</p><p>一般情况下，<code>csss—ui</code> 都建议开发者使用这种方法。</p><div class="tip custom-block"><p class="custom-block-title">使用示例</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">返回值 </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCsssLayout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 组件初始化状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 组件初始化样式</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h3><p>函数初始化时接受一个包含 <code>state</code> 、 <code>style</code> 的对象作为参数。</p><h4 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h4><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>/</td><td style="text-align:left;">/</td><td style="text-align:left;">/</td></tr></tbody></table><h4 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h4><p>style 除了一些基础状态，还包括两个子对象，分别是代表 class 设置的 <code>classList</code> 和 定义 css 变量的 <code>property</code>。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td><code>headerHeightSize</code></td><td style="text-align:left;"><code>&quot;small&quot;</code> | <code>&quot;normal&quot;</code> | <code>&quot;large&quot;</code> | <code>number</code></td><td style="text-align:left;">设置 <a href="#header-%E9%AB%98%E5%BA%A6">header 高度</a></td></tr><tr><td><code>asideWidthSize</code></td><td style="text-align:left;"><code>&quot;small&quot;</code> | <code>&quot;normal&quot;</code> | <code>&quot;large&quot;</code> | <code>number</code></td><td style="text-align:left;">设置 <a href="#aside-%E5%AE%BD%E5%BA%A6">aside 宽度</a></td></tr><tr><td><code>footerHeightSize</code></td><td style="text-align:left;"><code>&quot;small&quot;</code> | <code>&quot;normal&quot;</code> | <code>&quot;large&quot;</code> | <code>number</code></td><td style="text-align:left;">设置 <a href="#footer-%E9%AB%98%E5%BA%A6">footer 高度</a></td></tr><tr><td><code>layoutType</code></td><td style="text-align:left;"><code>&quot;header-footer&quot;</code> | <code>&quot;header-aside&quot;</code> | <code>&quot;footer-aside&quot;</code> | <code>&quot;aside&quot;</code></td><td style="text-align:left;">设置<a href="#%E5%B8%83%E5%B1%80%E7%B1%BB%E5%9E%8B">布局类型</a></td></tr><tr><td><code>classList</code></td><td style="text-align:left;">/</td><td style="text-align:left;"><a href="#classlist">classList</a></td></tr><tr><td><code>property</code></td><td style="text-align:left;">/</td><td style="text-align:left;"><a href="#property">property</a></td></tr></tbody></table><h5 id="classlist" tabindex="-1">classList <a class="header-anchor" href="#classlist" aria-hidden="true">#</a></h5><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>layout</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置<a href="#%E6%A0%B9%E5%85%83%E7%B4%A0-class">根元素 class</a></td></tr><tr><td>header</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#header-class">header class</a></td></tr><tr><td>aside</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#aside-class">aside class</a></td></tr><tr><td>footer</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#footer-class">footer class</a></td></tr><tr><td>main</td><td style="text-align:left;"><code>string[]</code></td><td style="text-align:left;">设置 <a href="#main-class">main class</a></td></tr></tbody></table><h5 id="property" tabindex="-1">property <a class="header-anchor" href="#property" aria-hidden="true">#</a></h5><p>目前 IDE 对于 css 变量的支持并不好。</p><p>如果开发者想要手动修改 css 变量，此处也提供了接口。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td><code>--header-height</code></td><td style="text-align:left;"><code>string</code>;</td><td style="text-align:left;">header 高度</td></tr><tr><td><code>--aside-width</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">aside 宽度</td></tr><tr><td><code>--footer-height</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">footer 高度</td></tr></tbody></table><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h3><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td><code>COMP</code></td><td>组件实例，需要与 template 中的组件绑定</td></tr><tr><td><code>read</code></td><td><a href="#read-%E7%BB%84%E4%BB%B6%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">组件只读属性</a></td></tr><tr><td><code>state</code></td><td><a href="#state-%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81">组件状态</a></td></tr><tr><td><code>style</code></td><td><a href="#read-%E7%BB%84%E4%BB%B6%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7">组件只读属性</a></td></tr></tbody></table><h4 id="read-组件只读属性" tabindex="-1">read 组件只读属性 <a class="header-anchor" href="#read-组件只读属性" aria-hidden="true">#</a></h4><p>提供一些只读但无法修改的属性。</p><table><thead><tr><th>name</th><th style="text-align:left;">param type</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td>/</td><td style="text-align:left;">/</td><td style="text-align:left;">/</td></tr></tbody></table><h4 id="state-组件状态" tabindex="-1">state 组件状态 <a class="header-anchor" href="#state-组件状态" aria-hidden="true">#</a></h4><p>开发者可根据实际需要随时修改组件状态。</p><p>同<a href="#state">state</a></p><h4 id="style-样式" tabindex="-1">style 样式 <a class="header-anchor" href="#style-样式" aria-hidden="true">#</a></h4><p>开发者可根据实际需要随时修改组件样式。</p><p>同<a href="#style">style</a></p><h2 id="布局类型" tabindex="-1">布局类型 <a class="header-anchor" href="#布局类型" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对于一些简单布局而言，此接口并无实质意义。应考虑增减相关插槽以实现布局目的。</p></div><p>设置布局类型，可选值有 <code>header-footer</code> ， <code>header-aside</code> ， <code>footer-aside</code> ， <code>aside</code>。</p><h3 id="左右布局" tabindex="-1">左右布局 <a class="header-anchor" href="#左右布局" aria-hidden="true">#</a></h3><p>依赖于 <code>default</code> 和 <code>aside</code> 插槽。</p>`,48),y=s("h3",{id:"上下布局",tabindex:"-1"},[e("上下布局 "),s("a",{class:"header-anchor",href:"#上下布局","aria-hidden":"true"},"#")],-1),D=s("p",null,[e("依赖于 "),s("code",null,"default"),e(" 和 "),s("code",null,"header"),e(" 插槽。")],-1),F=s("p",null,[e("依赖于 "),s("code",null,"default"),e(" 和 "),s("code",null,"footer"),e(" 插槽。")],-1),u=l('<h3 id="首尾布局" tabindex="-1">首尾布局 <a class="header-anchor" href="#首尾布局" aria-hidden="true">#</a></h3><p>当<code>default</code>、<code>aside</code>、<code>header</code>、<code>footer</code> 四个插槽均存在时，此布局为默认布局。也可手动设置布局类型为 <code>header-aside</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>首尾布局表示 <code>header 插槽</code> 优先占领对应视图空间，其次 <code>footer 插槽</code> 将占领对应视图空间，剩余插槽再依次占领对应视图空间。</p></div>',3),C=l('<h3 id="首侧布局" tabindex="-1">首侧布局 <a class="header-anchor" href="#首侧布局" aria-hidden="true">#</a></h3><p>当<code>default</code>、<code>aside</code>、<code>header</code>、<code>footer</code> 四个插槽均存在时，需手动设置布局类型为<code>header-footer</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>首尾布局表示 <code>header 插槽</code> 优先占领对应视图空间，其次 <code>aside 插槽</code> 将占领对应视图空间，剩余插槽再依次占领对应视图空间。</p></div>',3),_=l('<h3 id="尾侧布局" tabindex="-1">尾侧布局 <a class="header-anchor" href="#尾侧布局" aria-hidden="true">#</a></h3><p>当<code>default</code>、<code>aside</code>、<code>header</code>、<code>footer</code> 四个插槽均存在时，需手动设置布局类型为<code>footer-aside</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>首尾布局表示 <code>footer 插槽</code> 优先占领对应视图空间，其次 <code>aside 插槽</code> 将占领对应视图空间，剩余插槽再依次占领对应视图空间。</p></div>',3),A=l('<h3 id="侧布局" tabindex="-1">侧布局 <a class="header-anchor" href="#侧布局" aria-hidden="true">#</a></h3><p>当<code>default</code>、<code>aside</code>、<code>header</code>、<code>footer</code> 四个插槽均存在时，需手动设置布局类型为<code>aside</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>首尾布局表示 <code>aside 插槽</code> 优先占领对应视图空间，剩余插槽再依次占领对应视图空间。</p></div>',3),f=l('<h2 id="header-高度" tabindex="-1">header 高度 <a class="header-anchor" href="#header-高度" aria-hidden="true">#</a></h2><p>用于设置 <code>header 插槽</code> 高度，可以通过 <code>small</code>，<code>normal</code>，<code>large</code> 三个尺寸设置。</p><p>当传入的参数为 number 时，会自动转化为 rem 单位。</p>',3),g=l('<h2 id="aside-宽度" tabindex="-1">aside 宽度 <a class="header-anchor" href="#aside-宽度" aria-hidden="true">#</a></h2><p>用于设置 <code>aside 插槽</code> 宽度，可以通过 <code>small</code>，<code>normal</code>，<code>large</code> 三个尺寸设置。</p><p>当传入的参数为 number 时，会自动转化为 rem 单位。</p>',3),m=l('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于宽度实现是通过 <code>grid-template-columns: minmax(min-content, var(--aside-width))</code> 实现。<code>aside插槽</code> 的设定宽度只是最小宽度值，实际宽度会随子元素宽度的增加而增加。</p><p><strong>请注意控制子组件 / 元素的宽度。</strong></p><p>@TODO：提供锁定模式和非锁定模式。</p></div><h2 id="footer-高度" tabindex="-1">footer 高度 <a class="header-anchor" href="#footer-高度" aria-hidden="true">#</a></h2><p>用于设置 <code>footer 插槽</code> 高度，可以通过 <code>small</code>，<code>normal</code>，<code>large</code> 三个尺寸设置。</p><p>当传入的参数为 number 时，会自动转化为 rem 单位。</p>',4),b=s("h2",{id:"根元素-class",tabindex:"-1"},[e("根元素 class "),s("a",{class:"header-anchor",href:"#根元素-class","aria-hidden":"true"},"#")],-1),T=s("p",null,[e("通过一个 "),s("code",null,"string[]"),e(" 来设置根元素的 class。")],-1),v=s("p",null,[e("当第一个元素值不为 "),s("code",null,'""'),e(" 时，根元素会失去所有默认 class，样式将由开发者进行完成。")],-1),x=s("h2",{id:"header-class",tabindex:"-1"},[e("header class "),s("a",{class:"header-anchor",href:"#header-class","aria-hidden":"true"},"#")],-1),E=s("p",null,[e("通过一个 "),s("code",null,"string[]"),e(" 来设置 header 的 class。")],-1),k=s("p",null,[e("当第一个元素值不为 "),s("code",null,'""'),e(" 时，根元素会失去所有默认 class，样式将由开发者进行完成。")],-1),B=l(`<div class="tip custom-block"><p class="custom-block-title">no-element 样式</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">no-element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div><h2 id="aside-class" tabindex="-1">aside class <a class="header-anchor" href="#aside-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 aside 的 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，根元素会失去所有默认 class，样式将由开发者进行完成。</p>`,4),S=l(`<div class="tip custom-block"><p class="custom-block-title">no-element 样式</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">no-element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div><h2 id="footer-class" tabindex="-1">footer class <a class="header-anchor" href="#footer-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 footer 的 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，根元素会失去所有默认 class，样式将由开发者进行完成。</p>`,4),q=l(`<div class="tip custom-block"><p class="custom-block-title">no-element 样式</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">no-element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div><h2 id="main-class" tabindex="-1">main class <a class="header-anchor" href="#main-class" aria-hidden="true">#</a></h2><p>通过一个 <code>string[]</code> 来设置 main 的 class。</p><p>当第一个元素值不为 <code>&quot;&quot;</code> 时，根元素会失去所有默认 class，样式将由开发者进行完成。</p>`,4),I=l(`<div class="tip custom-block"><p class="custom-block-title">no-element 样式</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">no-element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div>`,1);function P(V,N,L,R,H,z){const n=o("layout-demo"),t=o("demo");return p(),d("div",null,[i,a(n),h,a(t,{src:"/demos/layout/LeftRight.vue",title:"",desc:""}),y,D,a(t,{src:"/demos/layout/UpDown.vue",title:"",desc:""}),F,a(t,{src:"/demos/layout/UpDown2.vue",title:"",desc:""}),u,a(t,{src:"/demos/layout/HeaderFooter.vue",title:"",desc:""}),C,a(t,{src:"/demos/layout/HeaderAside.vue",title:"",desc:""}),_,a(t,{src:"/demos/layout/FooterAside.vue",title:"",desc:""}),A,a(t,{src:"/demos/layout/Aside.vue",title:"",desc:""}),f,a(t,{src:"/demos/layout/HeaderHeight.vue",title:"",desc:""}),g,a(t,{src:"/demos/layout/AsideWidth.vue",title:"",desc:""}),m,a(t,{src:"/demos/layout/FooterHeight.vue",title:"",desc:""}),b,T,v,a(t,{src:"/demos/layout/RootClass.vue",title:"",desc:""}),x,E,k,a(t,{src:"/demos/layout/HeaderClass.vue",title:"",desc:""}),B,a(t,{src:"/demos/layout/AsideClass.vue",title:"",desc:""}),S,a(t,{src:"/demos/layout/FooterClass.vue",title:"",desc:""}),q,a(t,{src:"/demos/layout/MainClass.vue",title:"",desc:""}),I])}const O=c(r,[["render",P]]);export{W as __pageData,O as default};
