# CLI

Docsy CLI updates your user documentation from command line.

## Install

Docsy CLI is not available publicly yet. Coming soon.

## Authenticate

The CLI will not require authentication.

## Initialize your project

The `init` command creates a `docsy.json` configuration file in the current directory. Run it in the root of your code repository.

```bash
docsy init
```

## Suggest changes

The `suggest` command handles user documentation changes. You can specify a specific commit reference or hash to use as a source by using the `--commit` option.

```bash
docsy suggest --commit <commit_hash>
```