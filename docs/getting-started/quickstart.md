# Quickstart

This guide shows you how to setup Docsy CLI to update the user documentation of your project.

## Authenticate

Authentication is not implemented yet.

## Initialize

Navigate to the root of your project and run:

```bash
docsy init
```

This creates a `docsy.json` configuration file in the root of your project.

Let's see how it works:

```json
{
  "version": 1,
  "defaultBranch": "main", // the name of your default branch
  "target": {
    "type": "github",
    "full_name": "your-github-username/your-repo-name"
  }
}
```

The `target` is where you specify where Docsy will suggest changes.

## Suggest

Checkout a branch other than the default one and run the `suggest` command to see the changes Docsy will make to your documentation:

```bash
docsy suggest
```

Docsy suggests changes to the documentation based on the changes in your source code.

By default, Docsy compares the current branch with the default branch and suggests changes to the documentation based on the differences.

You can also specify a single commit via the `--commit` flag:

```bash
# show the last 10 commits
git log HEAD~10..HEAD

# suggest changes based on a single commit
docsy suggest --commit <commit>
```

If a commit is specified, Docsy uses that commit directly to suggest changes.

Docsy can apply suggestions directly to the documentation if the repository is clean. It identifies which files need updating based on the code changes and writes the updated content back to those files.