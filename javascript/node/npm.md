[Top](../../javascript.md)

__Links__

NPM
> [Docs](https://docs.npmjs.com/)
>
> [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json?v=true)


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
$ rm -rf node_modules/

$ npm install --omit=dev
added 148 packages, and audited 149 packages in 560ms

$ ls
node_modules/ package.json package-lock.json
```

`install <package>`

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

`npm list`

```sh
$ npm list
.
└── express@5.2.1
```

`uninstall <package>`

```
$ npm uninstall express
```

`install --save-dev <package>`

```sh
$ npm install -D eslint

$ cat package.json
{
  "devDependencies": {
    "eslint": "^9.39.2"
  }
}

$ npm list -D
.
└── eslint@9.39.2

$ npm uninstall -D eslint
```

`install --global`

```sh
$ npm install -g yo

$ npm list -g
.
└── yo@6.0.0

$ npm uninstall -g yo
```

`outdated`, `audit`

```sh
$ npm install express@3

$ npm outdated
express   3.21.2  3.21.2   5.2.1  node_modules/express

$ npm audit fix --force
npm warn audit Updating express to 5.2.1, which is a SemVer major change.

$ npm list
.
└── express@5.2.1
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
