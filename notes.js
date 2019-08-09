const fs = require('fs');
const chalk = require('chalk');


const listNotes = () => {
    console.log(chalk.yellow.bold.inverse('Your notes...'));
    loadNotes().forEach((note) => console.log(chalk.blue(note.title)));
};

const readNote = (title) => {
    const note = loadNotes().find((note) => note.title === title);

    if (note) {
        console.log(chalk.yellow.bold("Title: " + note.title));
        console.log("Body: " + note.body);
    } else {
        console.log(chalk.red.bold.inverse("No note found!"));
    }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    // Search if or until first duplicate note is found
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.bold.inverse('New note added!'));
    } else {
        console.log(chalk.red.bold.inverse('Note title taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold.inverse('Note removed.'));
    } else {
        console.log(chalk.red.bold.inverse('No note found!'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};


module.exports = {
    listNotes: listNotes,
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote
};
