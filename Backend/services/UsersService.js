class UsersService {
    async fetchData (pageNumber, numberOfRowsToFetch, filterValue) {
        const sqlite3 = require('sqlite3');
        const db = new sqlite3.Database('C:/Users/user/Desktop/Humanz2/usersDB.db');
    
        let sqlQuery = `SELECT * FROM users ORDER BY 'Full Name' ASC LIMIT ${
            pageNumber * numberOfRowsToFetch
        }, ${numberOfRowsToFetch}`;
    
        if (filterValue) {
            sqlQuery = `SELECT * FROM users WHERE Name LIKE '${filterValue}%' ORDER BY 'Full Name' ASC LIMIT ${
            pageNumber * numberOfRowsToFetch
            }, ${numberOfRowsToFetch}`;
        }
    
        return new Promise((resolve, reject) => {
            db.all(sqlQuery, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
            });
        }).finally(() => {
            db.close();
        });
    }
    // async addUser () {
    //     console.log('hi');
    // };

    // async deleteUser() {

    // };

};

export default UsersService;