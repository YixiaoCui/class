---
layout: home
title: 课程首页
---

# Scarlett老师的课堂主页

> 崔宜笑 · 东南大学外国语学院

这里集中呈现课程讲义、课件、实践任务与延伸资源。课程内容会随学期持续更新。

## 2026秋季学期

本学期设置三门课程：

| 课程 | 课程入口 | 主要内容 |
| --- | --- | --- |
| 雅思 | [进入课程]({{ '/posts/2026-fall-ielts/' | relative_url }}) | 课程介绍、教学安排、课堂讲义、PPT课件、阅读材料与作业 |
| 交替口译 | [进入课程]({{ '/posts/2026-fall-consecutive-interpreting/' | relative_url }}) | 课程介绍、教学安排、课堂讲义、音视频资料与作业 |
| 计算机辅助翻译 | [进入课程]({{ '/posts/2026-fall-cat/' | relative_url }}) | 课程介绍、教学安排、课堂讲义、PPT课件、软件工具与作业 |

## 使用说明

进入相应课程页面后，可以查看课堂讲义并下载 PPT、PDF、音频、视频及作业文件。

## 最新课程

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y年%m月%d日" }}
{% endfor %}
