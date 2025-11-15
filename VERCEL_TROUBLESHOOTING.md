# Vercel 未自动更新问题排查

## 可能的原因和解决方案

### 1. 检查 Vercel 是否连接到 GitHub 仓库

**检查步骤：**
1. 登录 [Vercel Dashboard](https://vercel.com)
2. 进入你的项目
3. 点击 **Settings** → **Git**
4. 检查是否显示你的 GitHub 仓库连接

**如果未连接：**
- 点击 **Connect Git Repository**
- 选择你的 GitHub 仓库 `heixiongxiaoxin/hexing-news`
- 确认连接

---

### 2. 检查自动部署是否启用

**检查步骤：**
1. Vercel Dashboard → 项目 → **Settings** → **Git**
2. 查看 **Production Branch** 是否为 `main`
3. 确认 **Auto-deploy** 已启用

**如果未启用：**
- 启用 **Auto-deploy** 选项
- 确保 Production Branch 设置为 `main`

---

### 3. 检查 GitHub Webhook 配置

**检查步骤：**
1. GitHub 仓库 → **Settings** → **Webhooks**
2. 查看是否有 Vercel 的 webhook
3. 检查 webhook 状态是否为 "Active"

**如果没有 webhook：**
- 在 Vercel 中重新连接仓库
- Vercel 会自动创建 webhook

---

### 4. 手动触发部署

**方法一：在 Vercel Dashboard**
1. 进入项目 → **Deployments**
2. 点击右上角的 **"..."** 菜单
3. 选择 **"Redeploy"**

**方法二：使用 Vercel CLI**
```bash
# 安装 Vercel CLI（如果还没安装）
npm i -g vercel

# 登录
vercel login

# 在项目目录执行
cd /Users/kchen/Desktop/newsnow-main
vercel --prod
```

---

### 5. 检查构建日志

**步骤：**
1. Vercel Dashboard → **Deployments**
2. 点击最新的部署记录
3. 查看 **Build Logs** 是否有错误

**常见错误：**
- 构建命令失败
- 依赖安装失败
- 环境变量缺失

---

### 6. 检查分支设置

**确认：**
- 本地分支是 `main`
- GitHub 仓库的默认分支是 `main`
- Vercel 的 Production Branch 设置为 `main`

**检查命令：**
```bash
# 检查本地分支
git branch

# 检查远程分支
git branch -r
```

---

### 7. 验证推送是否成功

**检查：**
1. 访问 https://github.com/heixiongxiaoxin/hexing-news
2. 确认最新的提交已显示在 GitHub 上
3. 检查提交时间是否是最新的

**如果 GitHub 上没有最新提交：**
```bash
# 重新推送
git push origin main
```

---

### 8. 检查 Vercel 项目配置

**确认配置：**
- Framework Preset: **Other**
- Build Command: `pnpm run build`
- Output Directory: `dist/output/public`
- Install Command: `pnpm install`
- Node.js Version: 20.x（从 package.json 的 engines 读取）

---

### 9. 强制重新部署

如果以上都正常，可以尝试：

1. **在 Vercel Dashboard：**
   - Deployments → 选择最新部署 → **Redeploy**

2. **断开并重新连接仓库：**
   - Settings → Git → Disconnect
   - 重新连接仓库

3. **清除构建缓存：**
   - Settings → General → Clear Build Cache

---

### 10. 检查 Vercel 通知设置

**确认：**
- Vercel Dashboard → Settings → Notifications
- 确保部署通知已启用
- 检查邮箱是否有部署失败的邮件

---

## 快速检查清单

- [ ] Vercel 已连接到 GitHub 仓库
- [ ] Auto-deploy 已启用
- [ ] Production Branch 设置为 `main`
- [ ] GitHub 上有最新的提交
- [ ] 构建日志没有错误
- [ ] 项目配置正确（Framework: Other）

---

## 如果问题仍然存在

1. **查看 Vercel 状态页面：** https://www.vercel-status.com/
2. **检查 Vercel 日志：** Dashboard → Deployments → 查看详细日志
3. **联系 Vercel 支持：** 在 Dashboard 中提交支持请求

