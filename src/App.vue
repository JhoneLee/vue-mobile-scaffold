<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/h5index">h5</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
/*reset style*/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

body {
  font-family: "PingFangSC-Regular", -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  //font-family: PingFangSC-Light;
  color: #222;
}
// 禁止ios和android下触摸元素时出现半透明灰色遮罩
div {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input, textarea, button {
  outline: 0;
  font-size: rem(12px);
}

textarea {
  resize: none;
}

html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
  -webkit-text-size-adjust: none;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

a, input, select, button, textarea {
  font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
}

a {
  text-decoration: none;
}

body {
  font-size: rem(12px);
  -webkit-text-size-adjust: none;
  -webkit-user-select: none;
  color: #333;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

img, table {
  border: 0;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

ins {
  text-decoration: none;
}

del {
  text-decoration: line-through;
}

select {
  -webkit-appearance: button;
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
i,em{
  font-style: normal;
}
.clearfix:after {
  content: '\0020';
  display: block;
  height: 0;
  clear: both;
}

.clearfix {
  *zoom: 1;
}

input[type="button"], input[type="submit"], input[type="reset"] {
  -webkit-appearance: none;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
}

article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

html, body {
    width: 100%;
}
</style>
