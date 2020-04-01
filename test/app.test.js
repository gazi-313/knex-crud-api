describe('CRUD Stickers', () => {
    before(() => {
        knex.migrate.latest().then(()=>{
            return knex.seed.run();
        });
    });
});