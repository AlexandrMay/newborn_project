import { ObjectId } from 'mongodb';

export class DbHelper {
    static getAllCategories() {
        return cy.findMany({}, {collection: "categories"});
    }

    static getUserIdByName(email) {
        return cy.findOne({email}, {collection: "users"}).its("_id");
    }

    static getAllCategoriesByNameContaining(name) {
        const regName = new RegExp(name, "i");
        return cy.findMany({name: regName, imageSrc: ""}, {collection: "categories"});
    }

    static getCategotyById(id) {
        const formattedId = new ObjectId(id);

        return cy.findOne({_id: formattedId}, {collection: "categories"});
    }
}