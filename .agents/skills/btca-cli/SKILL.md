---
name: btca-cli
description: Invoke this skill when the user says "use btca" or "use btca cli". Queries library documentation via the btca CLI
---

Query library/framework documentation using the `btca` CLI. The CLI clones the resource repo (if not already cached), searches the docs, and returns an LLM-generated answer

## Usage

1. Read `.vscode/btca.config.jsonc` to find available resources and their names
2. Run `btca ask` from the project root:

```shell
# Single resource
btca ask -r "<your question>" < resource-name > -q

# Multiple resources
btca ask -r fastify -r hono -q "How do I integrate Fastify with Hono?"
```

## Flags

| Flag         | Alias | Description                                                                           |
| ------------ | ----- | ------------------------------------------------------------------------------------- |
| `--resource` | `-r`  | Resource name (from `btca.config.jsonc`). Can be repeated for multi-resource queries. |
| `--question` | `-q`  | The question to ask about the resource(s).                                            |
