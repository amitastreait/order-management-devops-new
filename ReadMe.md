git commit -m "Modified the Sigup functionality"

git commit --amend -m "Modified the Login & Sigup functionality"

feat: Added Cart functionality
fix: Fixed the issue related to Add to Cart functionality
docs: Added the techical design document
refactor: 
test: 
perf: related to Performance improvement

## Braches

main/master - 
list all branchses - git branch
create a new branch
    Step1 - create a branch - git branch <branchname>, git branch <branchname> <source-branch>
    Step2 - switch to the branch - git checkout <branchname>
    Step1 + Step 2 - git checkout -b <branch-name>, git checkout -b <branch-name> <source-branch>

### Moder Way of creating branches
    - git swtich <branchname>
    - git switch -c <branchname>, git switch -c <branchname> <source-branch>

### 
User Story / Feature - feature/US-88934-Add-To-Cart-Functionality, feature/US-88934
Bugs - bugfix/BUG-3442-Fix-Order-Page
Hotfixes - hotfix/adding-columns-to-reports
Release - release/feature-name-DDMMYYY

### connect local repo with remote repo

git remote add origin https://github.com/amitastreait/order-management-devops-new.git 

git push origin <branch-name>
    local master/main --> remote master/main