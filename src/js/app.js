export default class Validator {
    constructor() {

    }
    validateUsername(username) {
        const re = /^[a-z](?:(?!\d{3,})[\w-])*[a-z]$/i;
        return re.test(username);
    }
}