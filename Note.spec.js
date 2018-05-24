const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Note = require('./Note');

describe('create notes', () => {

  beforeAll(() => {
    return mongoose.connect('mongodb://localhost/testingdb').then(console.log('connected to test db'));
  });

  afterAll(() => {
    return mongoose.disconnect();
  });

  it('should hash the password before saving the user', async () => {
    const noteBody = {
      title: 'any',
      password: 'irrelevant',
      body: 'any any text'
    };



    const savedUser = await Note.create(noteBody);
    expect(savedUser.title).toEqual('any');
    expect(savedUser.body).toEqual('any any text');
    expect(savedUser.password).not.toEqual(noteBody.password);
  });

});

describe('delete note', () => {

  beforeAll(() => {
    return mongoose.connect('mongodb://localhost/testingdb').then(console.log('connected to test db'));
  });

  afterAll(() => {
    return mongoose.disconnect();
  });

  it('should delete a note from the database', async () => {
    const titleToDel = {
      title: 'frodo'
    }
    let name
    const found = Note.findOne(titleToDel)

    const deletedNote = await Note.findOneAndDelete(titleToDel).then(resp =>{
      expect(resp.title).toEqual('frodo')

    }
  )

    // expect(savedUser.body).toEqual('any any text');
    // expect(savedUser.password).not.toEqual(noteBody.password);

    // expect(savedUser.password).toHaveLength(60);

  });

})
