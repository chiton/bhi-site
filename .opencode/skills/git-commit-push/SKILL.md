---
name: git-commit-push
description: Safely review, commit, and push local git changes using non-interactive commands
---

## What I do

- Review the current git working tree before making changes
- Inspect diffs and recent commit messages to match repository style
- Stage relevant local changes
- Draft a concise commit message based on the actual diff
- Create a commit when explicitly requested
- Push the current branch to the configured remote when explicitly requested
- Set upstream automatically with `git push -u origin <current-branch>` when needed

## When to use me

Use this when you want help committing and pushing local changes safely from the current repository.

## Instructions

1. Start by reviewing the repository state with `git status`, `git diff`, and recent `git log` output.
2. Inspect both tracked and untracked files before staging anything.
3. Stage only files relevant to the requested change.
4. Do not stage likely secret files such as `.env`, credential files, or private keys.
5. Draft a concise commit message that explains why the change was made.
6. Create a commit only if the user explicitly asked to commit.
7. Push only if the user explicitly asked to push.
8. Use non-interactive git commands only.
9. Never use destructive commands such as force-push, hard reset, or checkout-based reverts unless the user explicitly requests them.
10. Do not amend commits unless the user explicitly asks for an amend and it is safe to do so.
11. If the current branch already tracks a remote, push to that upstream branch.
12. If no upstream is configured, detect the current branch and push with `git push -u origin <current-branch>`.
13. If hooks fail during commit or push, report the failure clearly and fix forward rather than rewriting history.
14. Do not revert or overwrite unrelated local changes in a dirty worktree.

## Example prompts

- Use the git-commit-push skill to review my changes and prepare a commit message.
- Use the git-commit-push skill to commit my current work.
- Use the git-commit-push skill to commit and push this branch.
