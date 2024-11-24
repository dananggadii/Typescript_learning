# Typescript learning

> Requirement 
> 1. NodeJS
> 2. Code Editor

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
> In your package.json file make the following changes:
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
