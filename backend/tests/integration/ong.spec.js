const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //Destruir conexão com o banco e dados depois de executar os testes
    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD20",
                email: "contato@gmail.com",
                whatsapp: "11992454953",
                city: "São Paulo",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    //.set('Authorization', 'id da ONG') para testes que necessitam de um ID
});