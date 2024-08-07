# Simple Typescript Validation and Mapping

* Clean **entity validation** and **auto-mapping**.
* Prevents from **overposting** attacks.
* Simple and extensible.

## Usage

Define your target model:

```ts
export class TargetModel {
  requiredField: string = "";
  optionalField: string | null = null;
}
```

And validate it! For example, if you want to check a request on ExpressJS:

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

For more examples, see **sample.ts**. To run this project locally simply use these commands:

```
npm install
npm start
```
