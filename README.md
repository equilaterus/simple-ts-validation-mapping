# simple-ts-validator

* Simple **entity validation** and **auto-mapping**.
* Prevents from **overposting** attacks.
* This is a base-code: just copy it into your project and extend it!

## Usage

Define your target model:

```ts
export class TargetModel {
  requiredField: string = "";
  optionalField: string | null = null;
}
```

And validate it! For example, if you want to validate a request on ExpressJS:

```ts
const [targetModel, isValid, validationErrors] = validateModel(TargetModel, req.body);
    
if (!isValid) {
    res.status(400).send(validationErrors);
} else {
    const result = await doSomethingWithTargetModel({
        additionalFields: true,
        ...command,
    } as targetWithAdditionalFields)

    res.send(result);
}
```

For more examples, check **sample.ts**. To run this project locally simply use these commands:

```
npm install
npm start
```
