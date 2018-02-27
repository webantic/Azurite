'use strict';

const AzuriteTableResponse = require('./../../model/table/AzuriteTableResponse'),
    tableStorageManager = require('./../../core/table/TableStorageManager'),
    N = require('./../../core/HttpHeaderNames');

class DeleteTable {
    constructor() {
    }

    process(request, res) {
        tableStorageManager.deleteTable(request)
            .then((response) => {
                res.status(201).send(204);
            });
    }
}

module.exports = new DeleteTable;