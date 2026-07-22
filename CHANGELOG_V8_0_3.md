# V8.0.3 PDF Data Binding Fix

- 修复 PDF 导出错误读取 `window.data` 的问题。
- 主应用使用 `let data`，现在 PDF 引擎直接读取同一份 `data.week`。
- 保留 V8 第一版的 PDF 预览和所有原有视觉设计。
- 未修改学习计划、阅读旅程或其他页面。
