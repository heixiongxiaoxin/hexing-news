# Vercel 部署指南

## 方式一：通过 Vercel Dashboard 部署（推荐）

### 步骤 1: 推送到 GitHub

```bash
# 1. 在 GitHub 上创建一个新仓库（例如：heixiong-news）

# 2. 添加远程仓库
git remote add origin https://github.com/你的用户名/heixiong-news.git

# 3. 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 2: 在 Vercel 上部署

1. 访问 [Vercel Dashboard](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 **"Add New Project"**
4. 导入你的 GitHub 仓库
5. 配置项目设置：
   - **Framework Preset**: 选择 **"Other"** ⚠️（重要：不要选择 Vite 或其他框架）
   - **Root Directory**: `./` (默认)
   - **Build Command**: `pnpm run build`（会自动从 vercel.json 读取）
   - **Output Directory**: `dist/output/public`（会自动从 vercel.json 读取）
   - **Install Command**: `pnpm install`（会自动从 vercel.json 读取）
   
   💡 **提示**：由于项目已配置 `vercel.json`，Vercel 会自动读取配置，你只需要确保 Framework Preset 选择 "Other" 即可。
6. 点击 **"Deploy"**

### 步骤 3: 配置环境变量（可选）

如果需要登录和缓存功能，在 Vercel Dashboard → Project Settings → Environment Variables 中添加：

```
G_CLIENT_ID=你的GitHub客户端ID
G_CLIENT_SECRET=你的GitHub客户端密钥
JWT_SECRET=你的JWT密钥（通常与G_CLIENT_SECRET相同）
INIT_TABLE=true
ENABLE_CACHE=true
PRODUCTHUNT_API_TOKEN=你的ProductHunt API令牌（可选）
```

### 步骤 4: 配置 GitHub OAuth（如需登录功能）

1. 访问 [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/applications/new)
2. 创建新的 OAuth App
3. 设置回调 URL：`https://你的项目名.vercel.app/api/oauth/github`
4. 获取 Client ID 和 Client Secret，填入 Vercel 环境变量

---

## 方式二：使用 Vercel CLI 部署

### 步骤 1: 安装 Vercel CLI

```bash
npm i -g vercel
```

### 步骤 2: 登录 Vercel

```bash
vercel login
```

### 步骤 3: 部署项目

```bash
# 在项目根目录执行
cd /Users/kchen/Desktop/newsnow-main

# 首次部署（预览环境）
vercel

# 生产环境部署
vercel --prod
```

### 步骤 4: 配置环境变量

```bash
# 设置环境变量
vercel env add G_CLIENT_ID
vercel env add G_CLIENT_SECRET
vercel env add JWT_SECRET
vercel env add INIT_TABLE
vercel env add ENABLE_CACHE
```

---

## 注意事项

1. **数据库**: Vercel 不提供内置数据库，如需缓存/登录功能，需要配置外部数据库（如 Supabase、PlanetScale 等）

2. **Node.js 版本**: 项目要求 Node.js >= 20，Vercel 会自动使用合适的版本

3. **构建时间**: 首次构建可能需要几分钟，后续会更快

4. **免费额度**: Vercel 免费版有使用限制，通常足够个人项目使用

5. **自定义域名**: 可以在 Vercel Dashboard → Settings → Domains 中添加自定义域名

---

## 故障排查

如果部署失败：

1. 查看构建日志：Vercel Dashboard → Deployments → 查看详细日志
2. 检查 Node.js 版本：确保使用 Node.js 20+
3. 检查环境变量：确保所有必需的环境变量都已设置
4. 检查构建命令：确保 `pnpm run build` 可以正常执行

---

## 部署后的验证

部署成功后：

1. 访问 `https://你的项目名.vercel.app`
2. 检查页面是否正常加载
3. 测试各项功能是否正常
4. 查看 Vercel 日志排查问题

