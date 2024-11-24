# Typescript learning

> Requirement 
> 1. NodeJS
> 2. Code Editor

### Config NPM 
```
npm init -y
```

![image](https://github.com/user-attachments/assets/51525916-1b47-42c6-882e-60fe8a41b0c7)

> Open package.json
> Add `"type" : "module"`

![image](https://github.com/user-attachments/assets/3aa2497b-4cec-44b6-ae68-0d4599eee36b)

### Add Jest Library
```
npm install --save-dev jest @types/jest
```

![image](https://github.com/user-attachments/assets/a6635d40-10f4-4244-a73b-9b30dd42bd91)

### Add Babel Library 
```
npm install --save-dev babel-jest @babel/preset-env
```

![image](https://github.com/user-attachments/assets/9865ee55-94ca-450f-a23f-ae7b7137a566)

Setup babel installation `https://babeljs.io/setup#installation`
> In your `package.json` file make the following changes:
```
"scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```

![image](https://github.com/user-attachments/assets/830afe8c-1b7a-424b-b94d-ae56e46223b8)

> In order to enable the preset you have to define it in your `babel.config.json` file, like this:
```
{
  "presets": ["@babel/preset-env"]
}
```

![image](https://github.com/user-attachments/assets/4e360b71-d04d-4ad8-b39c-9b0dcb20ab56)

### Install Typescript 
```
npm i -g typescript
```

![image](https://github.com/user-attachments/assets/f366605a-fb81-494b-bb7a-e31a7172374a)

> Check typescript version
```
tsc -v
```

![image](https://github.com/user-attachments/assets/f9b10824-2bba-4ccd-8680-22175d8c182b)

### Setup TypeScript Project
```
npx tsc --init
```

![image](https://github.com/user-attachments/assets/65d684f7-ff69-4a19-bba9-a07e86ccbeeb)

> Change `module` from `commonjs` to `ES6`

![image](https://github.com/user-attachments/assets/bb7e3926-6cd2-4183-9bd8-bb511d457ccd)

### Setup TypeScript for Jest
> `https://jestjs.io/docs/getting-started#using-typescript`

```
npm install --save-dev @babel/preset-typescript
```

![image](https://github.com/user-attachments/assets/87de4c78-001c-491e-b817-52bc0d633013)

> Then add `@babel/preset-typescript` to the list of presets in your `babel.config.js`

![image](https://github.com/user-attachments/assets/912a2893-6055-495d-ac03-94c4e4cbd83b)

> Via ts-jest

```
npm install --save-dev ts-jest
```

![image](https://github.com/user-attachments/assets/1da25cec-d389-423a-9446-d36443554b78)

> Type definitions

```
npm install --save-dev @jest/globals
```

![image](https://github.com/user-attachments/assets/b55c6b37-ceb3-420d-8b63-e65fa170d85b)

