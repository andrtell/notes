[Top](../../javascript.md)

__Links__

NPM
> [Docs](https://docs.npmjs.com/)
>
> [package-spec](https://docs.npmjs.com/cli/v11/using-npm/package-spec)

Node
> [NPM intro](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)



# NPM

`init`

```sh
$ npm init -y

$ ls
package.json
```

`install`

```sh
$ npm install express

$ ls
node_modules/ package.json package-lock.json

$ cat package.json
{
    "dependencies": {
        "express": "^5.2.1"
    }
}
```

```sh
$ npm install -D eslint

$ cat package.json
{
  "devDependencies": {
    "eslint": "^9.39.2"
  }
}
```

```sh
$ rm -rf node_modules/

$ npm install
added 148 packages, and audited 149 packages in 560ms

$ ls
node_modules/ package.json package-lock.json
```

`update`

```sh
$ npm update
up to date, audited 149 packages in 2s
```

`run`

```sh
$ npm run greet
npm error Missing script: "greet"

$ cat package.json
{
  "scripts": {
    "greet": "echo Hello"
  }
}

$ npm run greet
Hello
```
