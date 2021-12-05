const { User } = require("../../src/app/models");

describe("Authenticate", () => {
    it("Cadastro de usuario no", async () => {
        const user = { user: "vitor", password_hash: "126546465465" };
        User.create({
            id: "1234",
            user: "vitor",
            password_hash: "126546465465",
        });
        console.log(user);

        expect(user.user).toBe("vitor");
    });
});

// Rota deve retornar um token jwt quando tiver credencias certas
