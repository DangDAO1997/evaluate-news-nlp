import {checkForName} from '../src/client/js/nameChecker';


describe("Test check name ", ()=>{
    test("'Picard'", ()=>{
        expect(checkForName('Picard')).toBe('Welcome, Captain!');
    });
    test("'Picard   a'", ()=>{
        expect(checkForName('Picard!@  a')).toBe('Name Invalid!');
    });
    test("'Picardq'", ()=>{
        expect(checkForName('Picardq')).toBe(undefined);
    });
})