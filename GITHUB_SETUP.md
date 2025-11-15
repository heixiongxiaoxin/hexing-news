# GitHub 仓库设置步骤

## 步骤 1: 在 GitHub 上创建新仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 **"+"** → **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `heixiong-news` (或你喜欢的名字)
   - **Description**: `黑熊知天下 - 科幻风格新闻聚合阅读器`
   - **Visibility**: 选择 Public 或 Private
   - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
4. 点击 **"Create repository"**

## 步骤 2: 推送代码到 GitHub

创建仓库后，GitHub 会显示推送代码的命令。在项目目录执行：

```bash
    cd /Users/kchen/Desktop/newsnow-main

# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送代码
git push -u origin main
```

或者如果你使用 SSH：

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## 步骤 3: 验证

推送成功后，刷新 GitHub 页面，应该能看到所有文件。

## 下一步

完成推送后，按照 `DEPLOY_VERCEL.md` 中的步骤在 Vercel 上部署。

