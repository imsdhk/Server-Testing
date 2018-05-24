const mongoose = require('mongoose');
const request = require('supertest');

const server = require('./server.js');


//should run the server and display initial message

  // when: '/'
    //then: test the status toEqual to 200
      //and test the type of response toEqual to 'application/json'
      //and test the response body toEqual to {"api": 'running'}


      describe('/', () => {
        it('should run the server and display initial message', async () => {
          const expected = {api: 'running'};

          const actual = await request(server).get('/');
          expect(actual.status).toEqual(200);
          expect(actual.type).toEqual('application/json');
          expect(actual.body).toEqual(expected)
        })
      })
