import sqlite3 from 'sqlite3';

class UsersService {
    async getNumber (filterValue){
        const db = new sqlite3.Database('C:/Users/user/Desktop/Humanz2/usersDB.db');
        let sqlQuery = `SELECT COUNT(*) FROM users WHERE Name LIKE ?`;
        return new Promise((resolve, reject) => {
            db.get(sqlQuery, [`${filterValue}%`], (err, counter) => {
                console.log(counter)
                if (err) {
                  reject(err);
                } else {
                  resolve(counter.count);
                }
              });
        }).finally(() => {
            db.close();
        });
    }

    async fetchData (pageNumber, numberOfRowsToFetch, filterValue) {
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

export default new UsersService;