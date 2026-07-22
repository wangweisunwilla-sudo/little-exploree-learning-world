# Little Explorer Learning World V8 — Design Preservation Edition

## 本版原则
- 完整保留 V6.3 已认可的页面、导航、Leo 插画、首页、阅读旅程、学习计划、探险地图、手帐、错题本和主题设计。
- 不使用 V8 Core Foundation 的简化空壳界面。

## 修复
- PDF 预览直接读取当前页面中的 `data.week`，不再通过新窗口读取失败的 localStorage，因此不会出现 0 / 0 空计划。
- PDF 使用独立预览层、A4 横向、两页布局、任务卡片、长标题换行、星期和日期。
- 阅读旅程的“词汇卡片”与“句子库”按钮分别跳到正确栏目，不再都打开 Leo Guide。
- 提供兼容适配器 `LearningWorldStore`，供后续逐步迁移 V8 数据层，而不破坏现有设计。

## 测试重点
1. 周计划任务数量与 PDF 预览一致。
2. 词汇卡片按钮打开 Vocabulary 栏目。
3. 句子库按钮打开 Saved Sentences 栏目。
4. 刷新页面后原有数据仍保留。
