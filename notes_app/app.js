const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize Yargs Version
yargs.version('1.1.0');

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!');
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!');
    }
});

// Create List Command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing all notes!');
    }
});

yargs.parse();
