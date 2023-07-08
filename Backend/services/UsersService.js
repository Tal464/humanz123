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
    async addUser(fullName, userId, phoneNumber, ipAddress, email) {
        const db = new sqlite3.Database('C:/Users/user/Desktop/Humanz2/usersDB.db');
      
        const sqlQuery = 'INSERT INTO users ("Full name", Email, ID, "Phone number", "IP Address") VALUES (?, ?, ?, ?, ?)';
        const params = [fullName, email, userId, phoneNumber, ipAddress];
      
        return new Promise((resolve, reject) => {
          db.run(sqlQuery, params, function (err) {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        })
          .then(() => {
            console.log('Row inserted');
            db.close();
          })
          .catch(error => {
            console.error(error.message);
            db.close();
          });
      }
      

    // async deleteUser() {

    // };

};

export default new UsersService;