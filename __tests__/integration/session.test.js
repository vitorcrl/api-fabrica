const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authenticate", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("Should authenticate with valid credentials", async () => {
        const user = await User.create({
            id: "123123",
            user: "vitor",
            password_hash: "123123",
        });
        const response = await request(app).post("/sessions").send({
            user: user.user,
            password: 123123,
        });

        expect(response.status).toBe(200);
    });
});

// Rota deve retornar um token jwt quando tiver credencias certas
//const { User } = require("../../src/app/models");

//describe("Authenticate", () => {
//  it("Should authenticate with valid credentials", async () => {
//       const user = { user: "vitor", password_hash: "126546465465" };
//       User.create({
//          id: "",
///         user: "vitor",
//          password_hash: "126546465465",
//       });
//     console.log(user);

//      expect(user.user).toBe("vitor");
//  });
//});
