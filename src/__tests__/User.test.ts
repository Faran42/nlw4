import request from 'supertest'
import { app } from '../app'

import createConnection from '../database';


describe("Users", async () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations()
  })
  it("Should be able to create a new user", async () => {
    const response = request(app).post("/users").send({
      email: "user@exemple.com",
      name: "User Exemple"
    })
  })
})