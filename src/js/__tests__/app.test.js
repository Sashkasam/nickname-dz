/* eslint-disable no-undef */

import Validator from "../app";

test.each([
    ['_user', false],
    ['0User', false],
    ['use_r', true],
    ['Us-er', true],
    ['user1', false],
    ['user777', false],
    ['use11r', true],

])('validate user', (username, expected) => {
    const result = new Validator();

    expect(result.validateUsername(username)).toBe(expected);
});
