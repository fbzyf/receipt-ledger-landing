# 收款截图一本账 · 落地页

一页静态落地页，用来验证「收款截图 → 客户 × 渠道 × 实收」这个想法有没有人愿付。

**现在没有完整 App。** 这页只做一件事：让人留下邮箱，内测开放时通知。

站点：https://fbzyf.github.io/receipt-ledger-landing/

---

## 这页有什么

按产品文案从上到下是这 7 块：

1. **首屏**：主标题、副标题、主按钮
2. **适合谁 / 不解决什么**：两栏诚实边界
3. **我们只做窄切口**：相对一木、钱迹的能力缺口
4. **三步示意**（`#steps`）：截图上传 → 客户×渠道×实收 → 与导出流水勾对
5. **透明价**：试用免费 / 买断 ¥98 / 年订 ¥48
6. **再次留邮箱**：邮箱必填 + 可选场景（接单 / 代购 / 门店 / 其他）
7. **页脚**：个人台账助手 · 非税务申报工具 · 联系说明

文案来自 Mia 的《落地页文案包》（2026-09-26）。页上不写「AI 自动对账」「替代财务」「保证不错账」，也不写付费用户数。

---

## 本地怎么打开

这是纯静态页，不需要安装依赖。

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

| 文件 | 用途 |
| --- | --- |
| `index.html` | 整页结构和中文文案 |
| `styles.css` | 手机优先样式 |
| `main.js` | 邮箱校验与感谢提示 |
| `.nojekyll` | 让 GitHub Pages 不要走 Jekyll |
| `favicon.svg` | 小图标 |

---

## 预留收集

表单走 **FormSubmit**，POST 到 `bread@linposh.com.cn`：

- action: `https://formsubmit.co/bread@linposh.com.cn`
- 字段：`email`（必填）、`scene`（可选：接单 / 代购 / 门店 / 其他）
- 成功后回到本页 `#thanks`

首次向该邮箱提交时，FormSubmit 可能发一封确认邮件到 `bread@linposh.com.cn`，点确认后才开始转发。

页上没有付款、登录，也没有自建后端。不碰恒平生产。

---

## GitHub Pages

Source = `main` 分支根目录 → `https://fbzyf.github.io/receipt-ledger-landing/`
