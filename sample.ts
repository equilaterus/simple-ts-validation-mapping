import validateModel from './validator.ts';

export class CreateUserCommand {
    // Required
    username: string = "";

    // Optional
    email: string | null = null;
}

function runSample(
    input: {[key: string]: any}, 
    validateFunc?: (target: CreateUserCommand, validationErrors: Array<string>) => boolean
) {
    const [command, isValid, validationErrors] = validateModel(CreateUserCommand, input, validateFunc);

    console.log('Input: ', JSON.stringify(input));
    console.log('Validated command: ', JSON.stringify(command));
    if (isValid) {
        console.log('OK');
    } else {
        console.log('Error(s): ', JSON.stringify(validationErrors));        
    }
    console.log('-------------------------------------------------')
}

// Missing keys
runSample({});

// OK
runSample({
    username: 'Rincewind'
});

// OK
runSample({
    username: 'Rincewind',
    email: 'rince@wind.com'
});

// Overpost!
runSample({
    username: 'Overpost!',
    email: 'over@post.com',
    overpost: 'An additional field!'
});

// Additional validations
runSample({
    username: 'bad',
    email: 'rince@wind.com',
}, 
(target: CreateUserCommand, validationErrors: Array<string>): boolean => {
    let isValid = true;
    if (target.username.length < 5) {
        isValid = false;
        validationErrors.push('username must contain at least 5 characters');
    }
    return isValid;
});
