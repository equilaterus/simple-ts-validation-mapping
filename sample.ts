import validateModel from './validator.ts';

export class CreateUserCommand {
    // Required
    username: string = "";

    // Optional
    email: string | null = null;
}

function runSample(input) {
    const [command, isValid, validationErrors] = validateModel<CreateUserCommand>(CreateUserCommand, input);

    console.log('Input: ', JSON.stringify(input));
    console.log('Validated command: ', JSON.stringify(command));
    if (isValid) {
        console.log('OK');
    } else {
        console.log('Error(s): ', JSON.stringify(validationErrors));        
    }
    console.log('-------------------------------------------------')
}

runSample({});

runSample({
    username: 'Rincewind'
});

runSample({
    username: 'Rincewind',
    email: 'rince@wind.com'
});

runSample({
    username: 'Overpost!',
    email: 'over@post.com',
    overpost: 'An additional field!'
});