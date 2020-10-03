class Database {
  constructor(data) {

    if (Database.exists) {
      return Database.instance
    }

    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}


const mongo = new Database('Some data...')
console.log('mongo: ', mongo.getData());
const mysql = new Database('Another data...')
console.log('mysql: ', mysql.getData());
