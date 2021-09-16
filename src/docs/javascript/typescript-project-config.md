# TypeScript project conifg

Install it globally

```shell
npm install -g typescript
```

## Single file

Run TypeScript check on a single file

```shell
tsc hello.ts
```

### Watch mode

```shell
tsc app.js --watch
```

or

```shell
tsc app.js --w
```

## Multiple files

Be sure to be inside the project folder, then:

```shell
tsc --init

# message TS6071: Successfully created a tsconfig.json file
```

now we can just run the command without specify any files, because from the JSON configuration it will take every `.ts` file:

```shell
tsc
```

## JSON config

- `exclude`: note that `node_modules` are already excluded by default.

```json
"exclude": [
	"file-to-esclude.ts",
]
```

- `include`
- `files`

- `compilerOptions`: how our files will be compiled
	- `lib`: e.g. `dom` unlocks all DOM APIs