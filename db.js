const mongoose = require('mongoose');
const chalk = require('chalk');
const url = 'mongodb://localhost:27017/nov2020';
//const url = 'mongodb://nuser:nuser123@ds023550.mlab.com:23550/nov2020';

mongoose.connect(url, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
    console.log(chalk.red('Error occured while connecting ot DB'));
});

mongoose.connection.on('disconnected', () => {
    console.log(chalk.yellow('DB disconected'));
});

mongoose.connection.on('connected', () => {
    console.log(chalk.green('DB connected successfully.'));
});
