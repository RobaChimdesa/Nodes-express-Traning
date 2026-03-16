# Node Training Repository

Hands-on training material for modern JavaScript, Node.js internals, and Express with TypeScript.

## Learning Goals

- Practice modern JavaScript syntax and patterns.
- Understand Node.js runtime behavior (event loop, streams, workers).
- Build layered APIs with Express + TypeScript.
- Understand CommonJS vs ESM trade-offs in TypeScript projects.

## Repository Modules

### Module 1 - Modern JavaScript and TypeScript

Focus: language fundamentals and TypeScript basics.

Highlights:

- ES6+ syntax: arrow functions, destructuring, spread/rest.
- Async examples: promises and async/await.
- Class/object/function practice files.
- TypeScript mini-project in `Module1/typescript`.
- Exercise brief in `Module1/dataFetcher/ReadME.md`.

Run TypeScript mini-project:

```bash
cd Module1/typescript
npm install
npm run build
npm run start
```

### Module 2 - Node.js Runtime Concepts

Focus: how Node executes and scales I/O and CPU work.

Highlights:

- `blockingVsAsync.js` - sync vs async file operations.
- `event-loop-demo.js` - microtasks/macrotasks ordering.
- `stream-example.js` - stream large file over HTTP.
- `worker-thread-demo/` - offload CPU-bound work with workers.

Run examples:

```bash
cd Module2
node event-loop-demo.js
node stream-example.js
node worker-thread-demo/main.js
```

### Module 3

Reserved for future training content.

### Module 4 - Express + TypeScript API (`Module4/express-ts-esm`)

Focus: layered API architecture with TypeScript.

Architecture:

- `routes -> controllers -> services -> repositories`
- `middleware` for request pipeline concerns

Main endpoints:

- `GET /users`
- `GET /users/:id`
- `POST /users`

Current runtime setup (important):

- Full ESM in Node (`"type": "module"`)
- TypeScript Node ESM mode (`"module": "NodeNext"`, `"moduleResolution": "NodeNext"`)
- Dev runner uses `tsx` (not `ts-node/esm` loader)

Run module:

```bash
cd Module4/express-ts-esm
npm install
npm run dev
```

Build module:

```bash
npm run build
```

Start without watch:

```bash
npm run start
```

## TypeScript Import Rule (Important)

This repository demonstrates both common setups. Module 4 is currently using full ESM.

- **CommonJS runtime** (`module: CommonJS`) can use extensionless imports in TS:
  - `import { x } from "./file"`
- **Node ESM runtime** (`type: module` + `NodeNext`) requires explicit extensions for relative imports at runtime:
  - usually `import { x } from "./file.js"` in TS source

If imports fail with "Cannot find module", check your module system config (`tsconfig.json` + `package.json`) first.

## Troubleshooting

- If you see `Cannot find module ...` in Module 4, verify relative imports include `.js` in TS files.
- If you see Node loader experimental warnings, use `npm run dev` (tsx-based) instead of custom `node --loader ts-node/esm` commands.
- After changing scripts or config, stop and restart the dev server.

## Training Workflow

1. Read module objective.
2. Run the example.
3. Change one thing and rerun.
4. Explain the behavior difference.

## Notes

- Content is intentionally simple and training-focused.
- Some file names are intentionally kept as-is to match classroom demos.
