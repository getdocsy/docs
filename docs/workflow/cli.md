# CLI

Docsy CLI updates your user documentation from command line.

## Install

Docsy CLI is not available publicly yet. Coming soon.

## Authenticate

Docsy CLI requires access to the OpenAI API. Set your OpenAI API key as `OPENAI_API_KEY` environment variable.

```bash
export OPENAI_API_KEY=sk-...
```

## Initialize your project

The `init` command creates a `docsy.json` configuration file in the current directory. Run it in the root of your code repository.

```bash
docsy init
```

## Suggest changes

The `suggest` command handles user documentation changes.

```bash
docsy suggest
```
