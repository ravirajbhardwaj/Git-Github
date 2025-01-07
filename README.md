# 🛠️ Onboarding Documentation: Git and GitHub for ChaiCode Cohort

Welcome to the ChaiCode Cohort! This documentation is designed to introduce you to `Git` and `GitHub`, two essential tools for developers in our company. The purpose of this guide is to help you set up, understand, and use these tools effectively for seamless collaboration and code management. Together, we’ll ensure smooth workflows and strong teamwork. 🚀

---
 
## 1️⃣ Basics of Git and GitHub

### 🧑‍💻 What is `Git`?

Git is a **distributed version control system** that allows developers to:
- Track changes in their code.
- Collaborate with teammates.
- Maintain a complete history of the project.

It ensures every change is documented and reversible, making it indispensable for modern software development.

### 🤔 Why is `Git Used`?

- **Version Control**: Maintain a history of changes.
- **Collaboration**: Work with multiple team members on the same project without overwriting changes.
- **Code Safety**: Experiment with new features without affecting the main codebase.

### 🌐 What is `GitHub`?

GitHub is a **cloud-based platform** built on Git, designed to enhance team collaboration. It provides:
- Centralized code repositories.
- Tools for code review, issue tracking, and continuous integration.

---
## 2️⃣ Installation and Setup

### Step 1: Install Git
1. Visit [Git Downloads](https://git-scm.com/downloads).
2. Download the version suitable for your OS (Windows, macOS, Linux).
3. Follow the installation instructions.

### Step 2: Configure Git
Run these commands in your terminal to set up Git:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
### Step 3: Set Up GitHub

Create an account on [GitHub](https://github.com).

Instagram or FB account bna sakta ho to Github kyu nhi?

---

## 3️⃣ Cloning the Repository
Run the following command to clone the repository:

```bash
git clone git@github.com:ravirajbhardwaj/Git-Github.git

cd Git-Github
```
---
## 4️⃣ Basic Git Commands

Check Repository Status:
```bash
git status
```
Add Changes to Staging Area:
```bash
git add <file-name> ## add what file and folder u want
git add .       ## add all files and folder
```
Commit Changes:
```bash
git commit -m "Your commit message"
```
Push Changes to Remote Repository:
```bash
git push origin <branch-name>
```
Pull Latest Changes:
```bash
git pull origin <branch-name>
```
---

## 5️⃣ Commit Message Rules

### Why Good Commit Messages Matter?

- They provide a clear history of changes.
- Help teammates understand the purpose of changes.
- Facilitate debugging and collaboration.
- Suggested Commit Message Guidelines:


#### `Structure: <type>(<scope>): <description>`
Types: Use clear prefixes such as:
- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation changes.
- `style`: Code style or formatting changes.
- `refactor`: Code refactoring without changing functionality.

Examples:
```
feat(auth): add user login functionality

fix(api): resolve timeout issue in fetch requests
```

--- 

## 6️⃣ Best Practices

- **Pull Requests (PRs)**
  - Keep PRs focused on a single feature or fix.
  - Provide a detailed description of changes.
  - Assign reviewers and address feedback promptly.

- **Branching Workflow**
1. `Main Branch`: Always deployable and stable.
2.  `Feature Branches`: Develop new features or fixes (e.g., feature/login).
3. `Merge Strategy`: Merge feature branches into main via PRs.

### General Tips

- Commit often and meaningfully.
Regularly pull updates to stay in sync.
- Resolve conflicts as soon as they arise.

By following this documentation, you'll quickly get up to speed with Git and GitHub, ensuring productive and collaborative development at ChaiCode. Let's build amazing things together!

Learn More in-Depth : [Git and Github](https://app.eraser.io/workspace/dQOSFVn4yGW3YmVGLoCd?origin=share)
