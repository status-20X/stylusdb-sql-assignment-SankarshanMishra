// function parseQuery(query) {
//     try {
//         const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
//         const match = query.match(selectRegex);

//         if (!match) {
//             throw new Error('Invalid query format: SELECT statement not recognized');
//         }

//         const [, fields, table, whereString] = match;
//         const whereClauses = whereString ? parseWhereClause(whereString) : [];

//         if (!fields || !table) {
//             throw new Error('Invalid query format: Missing fields or table name');
//         }

//         return {
//             fields: fields.split(',').map(field => field.trim()),
//             table: table.trim(),
//             whereClauses
//         };
//     } catch (error) {
//         throw new Error(`Error parsing query: ${error.message}`);
//     }
// }

// function parseWhereClause(whereString) {
//     try {
//         const conditions = whereString.split(/ AND | OR /i);
//         return conditions.map(condition => {
//             const [field, operator, value] = condition.split(/\s+/);
//             if (!field || !operator || !value) {
//                 throw new Error('Invalid where clause format');
//             }
//             return { field, operator, value };
//         });
//     } catch (error) {
//         throw new Error(`Error parsing where clause: ${error.message}`);
//     }
// }

// module.exports = parseQuery;
function parseQuery(query) {
    const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table, whereClause] = match;
        return {
            fields: fields.split(',').map(field => field.trim()),
            table: table.trim(),
            whereClause: whereClause ? whereClause.trim() : null
        };
    } else {
        throw new Error('Invalid query format');
    }
}

module.exports = parseQuery;
