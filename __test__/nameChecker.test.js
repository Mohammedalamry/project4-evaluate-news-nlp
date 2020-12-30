import {checkForName} from '../src/client/js/nameChecker'
describe('test the submit form handler' ,()=>{ test('testing the submit form handler function',()=>{
    const input =  checkForName('picard');
    expect(input).toBe('picard')

   })}) 
       
   
