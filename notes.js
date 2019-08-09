const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    // Filter duplicate notes; True if duplicate
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
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
    addNote: addNote,
    removeNote: removeNote
};
