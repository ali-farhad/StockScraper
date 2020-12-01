const { GoogleSpreadsheet } = require('google-spreadsheet');


module.exports = class Sheet {

    constructor() {

        this.doc = new GoogleSpreadsheet('17e0mRz7Ohhppj8Ho6Ou8vfQcg_cpjP-CqudidQK_rSY');

    }

    async load() {
        await this.doc.useServiceAccountAuth(require('./cred.json'));
        await this.doc.loadInfo();
    }

    async addRows(rows, i) {
        const sheet = this.doc.sheetsByIndex[i];
        await sheet.addRows(rows);
    }

    async getRows(i) {
        const sheet = this.doc.sheetsByIndex[i];
        const rows = await sheet.getRows();
        return rows;
    }

}

    // (async function () {

    //     const sheet = new Sheet();
    //     await sheet.load();

    //     await sheet.addRows([{ name: 'Hello there', email: 'alifarhad57@gmail.com' }]);

    // })()

