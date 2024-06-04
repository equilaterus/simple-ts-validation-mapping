# simple-ts-validator

## Usage

Define your commands:

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
    const result = await createEmployee({
        additionalFields: true,
        ...command,
    } as NewUser)

    res.send(result);
}
```