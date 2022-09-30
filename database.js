import Bookshelf from "bookshelf"
import Knex from "knex"
import bookshelf_transaction_manager from "bookshelf-transaction-manager"
 
 
const knex = Knex({
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'wowgifts_facebook',
      charset  : 'utf8'
    }
  })
  const bookshelf =Bookshelf(knex)
  bookshelf.plugin('registry')
bookshelf.plugin(bookshelf_transaction_manager);
 
console.log("Connected Db")
export default {
    user:bookshelf.model('User', {
        tableName: 'users'
      }),
    places:bookshelf.model('users_places', {
        tableName: 'users_places'
      }),

      work_and_education:bookshelf.model('users_work_and_education', {
        tableName: 'users_work_and_education'
      }),

      family_and_relationships:bookshelf.model('users_family_and_relationships', {
        tableName: 'users_family_and_relationships'
      }),


      contact_and_basic_info:bookshelf.model('users_contact_and_basic_info', {
        tableName: 'users_contact_and_basic_info'
      }),
      life_events:bookshelf.model('users_life_events', {
        tableName: 'users_life_events'
      }),
      overview:bookshelf.model('users_overview', {
        tableName: 'users_overview'
      }),
      accounts:bookshelf.model('accounts', {
        tableName: 'accounts'
      }),
      bookshelf:bookshelf,



}