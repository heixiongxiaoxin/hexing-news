# 将最新部署提升为生产版本

## 问题
生产域名 `hexing-news.vercel.app` 指向旧版本，而最新部署已经完成。

## 解决方案：在 Vercel Dashboard 中操作

### 详细步骤：

1. **打开 Vercel Dashboard**
   - 访问：https://vercel.com/dashboard
   - 确保已登录

2. **进入项目**
   - 在项目列表中找到 `hexing-news`
   - 点击进入项目详情页

3. **打开 Deployments 页面**
   - 点击顶部导航栏的 **"Deployments"** 标签
   - 你会看到所有部署历史

4. **找到最新部署**
   - 查找提交信息为 `a1e328a docs: 更新 GitHub 设置文档` 的部署
   - 或者查找最新的、状态为 **"Ready"** 的部署
   - 确认这个部署显示的是最新内容

5. **提升为生产版本**
   - 点击该部署卡片右侧的 **"..."** 菜单（三个点）
   - 在下拉菜单中选择 **"Promote to Production"**
   - 确认操作

6. **等待更新**
   - 通常几秒钟内就会完成
   - 你会看到该部署的状态变为 **"Production"**

7. **验证**
   - 访问 `https://hexing-news.vercel.app`
   - 硬刷新浏览器（Cmd+Shift+R 或 Ctrl+Shift+R）清除缓存
   - 确认显示最新内容

## 如果找不到 "Promote to Production" 选项

可能的原因：
1. **该部署已经是生产版本**：检查部署状态是否显示 "Production"
2. **权限问题**：确保你有项目的管理员权限
3. **部署状态不是 Ready**：等待部署完成

## 替代方法：使用 Vercel CLI

如果你已经登录了 Vercel CLI：

```bash
cd /Users/kchen/Desktop/newsnow-main
vercel promote
```

这会自动将最新的部署提升为生产版本。

## 检查当前生产部署

在 Vercel Dashboard 中：
- Deployments 页面
- 查找标记为 **"Production"** 的部署
- 确认它是否是最新的部署

## 常见问题

**Q: 提升后仍然显示旧内容？**
A: 
- 等待 1-2 分钟让 DNS 更新
- 清除浏览器缓存
- 尝试无痕模式访问

**Q: 如何确认提升成功？**
A:
- 在 Deployments 页面，最新部署应该显示 "Production" 标签
- 部署时间应该是最新的

