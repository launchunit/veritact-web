---
name: btca-local
description: Read library/framework documentation directly from locally cached BTCA resources. Faster than btca-cli since it reads files without an LLM roundtrip
---

Look up documentation by reading files directly from cached BTCA resources. This is faster than `btca ask` since it skips the LLM and lets you search/read docs yourself

## Steps

1. Read `.vscode/btca.config.jsonc` to find `dataDirectory` and the resource's `name` and `searchPaths`
2. Check if `<dataDirectory>/resources/<name>/` exists locally and has content
   - **Has files** — search and read files under `<dataDirectory>/resources/<name>/<searchPath>/` using Glob, Grep, and Read
   - **Missing or broken** (directory missing, or exists but empty/no files) — cache it by running `btca ask -r <name> -q "nothing"`, then proceed with file reads. If the command fails with "Failed to update local repository", delete the broken directory (`rm -rf <dataDirectory>/resources/<name>`) and re-run the cache command

## Config shape

Top-level:

- `dataDirectory` — base directory for cached resources (eg. `".btca"`)

Each resource in `resources[]` has:

- `name` — directory name under `<dataDirectory>/resources/<name>/`
- `searchPaths` (optional) — subdirectories containing docs (eg. `["docs"]`). If omitted, search the entire resource directory

## Example

Given `"dataDirectory": ".btca"`, find how TanStack Router file-based routing works:

```
1. Config: dataDirectory=".btca", tanstack → searchPaths: ["docs"]
2. .btca/resources/tanstack/ exists
3. Glob: .btca/resources/tanstack/docs/**/*.md for "file-based" or "routing"
4. Read matching files
```

Cache a missing resource (eg. `zod`):

```
1. Config: dataDirectory=".btca", zod → searchPaths: ["packages/docs/content"]
2. .btca/resources/zod/ does not exist
3. Run: btca ask -r zod -q "nothing"
4. .btca/resources/zod/ now exists — Glob/Grep/Read as normal
```
