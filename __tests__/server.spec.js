const supertest = require('supertest');
const server = require('../server');
const faker = require('faker');
// const db = require('../data/dbConfig');

describe('server', () => {
  describe('GET /', () => {
    it('responds with 200 ok', () => {
      return supertest(server)
        .get('/')
        .expect(200);
    });
  });

  // describe('POST /auth', () => {
  //   it('responds with 201 when new user is registered', async () => {
  //     const user = {
  //       // email: faker.internet.email(),
  //       // parent_name: faker.name.findName(),
  //       email: 'jonathan@gmail.com',
  //       parent_name: 'Jonathan',
  //       child_name: 'John Jr.',
  //       birthday: 1564363440000,
  //       password: 'Password1!',
  //     };
  //     console.log(user);

  //     const response = await supertest(server)
  //       .post('/auth/register')
  //       .send(user);
  //     expect(response.status).toEqual(201);
  //   });
  // });
});
