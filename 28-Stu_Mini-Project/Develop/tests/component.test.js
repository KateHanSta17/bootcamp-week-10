const Component = require(`../lib/component.js`);

describe(`Render`, () => {
    it ("should throw an error if render is called directly", () => {    
        const cb = new Component.render();
        const sampleError = new Error("render() must be implemented");
        expect(cb).toThrowError(sampleError);
    }
    );
    it ("should throw an error if render is called directly", () => {    
        const cb = new Component.render();
        const sampleError = new Error("render() must be implemented");
        expect(cb).toThrowError(sampleError);
    }
    );
