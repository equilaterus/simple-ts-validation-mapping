# simple-ts-validator

* Simple entity validation.
* Prevents from overposting attacks.
* This is a base-code: just copy it into your project and extend it!

## Usage

Define your commands (or entities, or whatever):

```ts
export class CreateUserCommand {
  requiredField: string = "";
  optionalField: string | null = null;
}
```

And validate, for example on ExpressJS:

```ts
const [command, isValid, validationErrors] = validateModel<CreateUserCommand>(CreateUserCommand, req.body);
    
if (!isValid) {
    res.status(400).send(validationErrors);
} else {
    const result = await createUser({
        additionalFields: true,
        ...command,
    } as NewUser)

    res.send(result);
}
```

For more examples, check **sample.ts**. To run this project locally simply use these commands:

```
npm install
npm start
```