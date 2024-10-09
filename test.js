const { hello } = require('./index.js');
const event = {};
const context = {
    functionName: 'exampleFunction',
};

const callback = (error, result) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Success:', result);
    }
};

hello(event, context, callback);
