# Git Commit Messages & Branching Guide

## 1. Writing Commit Messages

A commit message should clearly describe **what change was made and why**.

### Basic Commit
```bash
git commit -m "Modified the Signup functionality"

Amend the Last Commit Message

Use this when you want to modify the previous commit message.

git commit --amend -m "Modified the Login & Signup functionality"

```

### Standard Commit Message Types (Conventional Commits)

Using standard prefixes helps maintain clean commit history and easier collaboration.

Type	Purpose	Example
feat	Adding a new feature	feat: Added Cart functionality
fix	Bug fix	fix: Fixed issue in Add to Cart functionality
docs	Documentation updates	docs: Added technical design document
refactor	Code restructuring without changing functionality	refactor: Improved checkout module structure
test	Adding or updating tests	test: Added unit tests for Cart service
perf	Performance improvements	perf: Optimized product search query
chore	Maintenance tasks	chore: Updated dependencies
style	Code formatting changes	style: Fixed indentation in Cart controller

### Git Branches

Branches allow developers to work on features independently without affecting the main codebase.

Main Branch

main / master

This is the stable production branch.

### List All Branches

git branch

### Create a New Branch

Step 1 – Create Branch

git branch <branch-name>

Create a branch from another branch:

git branch <branch-name> <source-branch>

Example:

git branch feature-cart main

Step 2 – Switch to Branch

git checkout <branch-name>

Example:

git checkout feature-cart

### Create and Switch Branch (Single Command)

git checkout -b <branch-name>

Example:

git checkout -b feature-cart

Create from a specific branch:

git checkout -b <branch-name> <source-branch>

Example:

git checkout -b feature-cart develop


### Modern Way (Recommended)

Git now recommends git switch instead of checkout.

Switch to Existing Branch

git switch <branch-name>

Example:

git switch feature-cart

Create and Switch Branch

git switch -c <branch-name>

Example:

git switch -c feature-cart

Create from another branch:

git switch -c <branch-name> <source-branch>

Example:

git switch -c feature-cart develop

### Best Practice Branch Naming

Common naming conventions:

feature/cart-functionality
bugfix/cart-issue
hotfix/payment-error
release/v1.2

Examples:

feature/user-authentication
bugfix/login-validation
feature/product-search

### Example Git Workflow

git switch main
git pull origin main

git switch -c feature/cart

# Make code changes

git add .
git commit -m "feat: Added Cart functionality"

git push origin feature/cart
