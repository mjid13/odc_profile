# Branch Protection Configuration

This document outlines the branch protection requirements for this repository and provides instructions for repository administrators to configure them.

## Required Branch Protection Rules

The `main` branch must be protected with the following settings:

### 1. Require Pull Requests
- **Setting**: Require pull request reviews before merging
- **Required approving reviewers**: 1-2 reviewers
- **Dismiss stale reviews**: ✅ Enable
  - When new commits are pushed, existing reviews are dismissed

### 2. Require Status Checks
- **Setting**: Require status checks to pass before merging
- **Required checks**:
  - `Lint` (from CI workflow)
  - `Type Check` (from CI workflow) 
  - `Build` (from CI workflow)
- **Require branches to be up to date**: ✅ Enable

### 3. Require Linear History
- **Setting**: Require linear history
- **Merge strategy**: Squash and merge only
- This keeps the commit history clean and linear

### 4. Restrict Push and Merge Access
- **Restrict pushes**: Only allow administrators and specific users/teams
- **Include administrators**: ❌ Disable (administrators must also follow the rules)

## How to Configure (for Repository Administrators)

### Via GitHub Web Interface

1. Go to **Settings** → **Branches**
2. Click **Add rule** or edit the existing rule for `main`
3. Configure the following options:

#### General Settings
- Branch name pattern: `main`
- ✅ Restrict pushes that create files larger than 100 MB
- ✅ Require pull request reviews before merging
  - Required approving reviewers: `1` (adjust to 2 if desired)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from code owners (if CODEOWNERS file exists)

#### Status Checks  
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- Search and select these required status checks:
  - `Lint`
  - `Type Check` 
  - `Build`

#### Additional Restrictions
- ✅ Require linear history
- ✅ Require deployments to succeed before merging (if applicable)
- ❌ Allow force pushes
- ❌ Allow deletions

### Via GitHub CLI (Alternative)

```bash
# Enable branch protection for main branch
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["Lint","Type Check","Build"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"dismiss_stale_reviews":true,"require_code_owner_reviews":false,"required_approving_review_count":1}' \
  --field restrictions='{"users":[],"teams":[],"apps":[]}' \
  --field required_linear_history=true \
  --field allow_force_pushes=false \
  --field allow_deletions=false
```

## Workflow Integration

This repository includes GitHub Actions workflows that provide the required status checks:

- **CI Workflow** (`.github/workflows/ci.yml`):
  - Runs on all PRs to `main` and `develop` branches
  - Provides three required status checks: Lint, Type Check, and Build
  - Ensures code quality and buildability before merge

## Merge Strategy

With these protection rules:

1. **Only squash merges allowed**: Keeps history linear and clean
2. **All commits squashed**: Individual commits from feature branches are combined into a single commit on main
3. **Automatic commit message**: GitHub will generate a commit message based on the PR title and description

## Benefits

These branch protection rules ensure:

- **Code Quality**: All changes are reviewed and pass automated checks
- **Stability**: Main branch always contains working, tested code  
- **Clean History**: Linear history makes it easier to track changes and debug issues
- **Collaboration**: Required reviews encourage knowledge sharing and catch issues early
- **Consistency**: Automated checks ensure consistent code style and successful builds

## Troubleshooting

### Common Issues

1. **Status checks not appearing**: Ensure the CI workflow has run at least once on a PR
2. **Cannot merge**: Verify all required status checks are passing and reviews are approved
3. **Stale reviews**: Push new commits will dismiss existing reviews, requiring fresh approval

### Emergency Procedures

In case of emergencies, repository administrators can:
1. Temporarily disable branch protection
2. Make critical fixes
3. Re-enable protection immediately after

However, this should be used sparingly and documented when it occurs.