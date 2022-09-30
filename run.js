
import axios from 'axios';
import qs from 'qs';
import db from './database.js';
import express from 'express';
import readline from 'readline';
import Facebook from './Facebook.js';

const app = express()
const port = 3000
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




// app.get('/', async (req, res) => {
//    var a= await user_info('100073144826140')
//    var b= await user_info(''+fb_user+'')
//    var c= await user_info('100073144826132')
//     res.send(JSON.stringify([a,b,c]));
//     console.log('Completed');


// })

app.listen(port,async () => {
    console.log(`Robot start at ${port}`)


})



// app.get('/friends_fetch', async (req, res) => {

//     res.send(await friends_section());

// })
// app.get('/user_abouts', async (req, res) => {

//     res.send(await user_abouts_section());

// })
app.get('/', async (req, res) => {
     res.send(await test());


})

async function test(){

    var user = await db.user.where('fb_id', '100004039434726').query(function (q) { q.limit(1); }).fetch();
    var account = await db.accounts.query(function (q) { q.limit(1); }).fetch();
    var fb = new Facebook(account);
    fb.set_user_profile(user);
  
    await   fb.user_abouts_section(); 
 

}
async function main(){
    // return await test();
    return 1

    console.clear();
    var fb = new Facebook();
    
    
    
    // console.lo('Start')
    var users = await db.user.where('status', 'fetch').query(function (q) {
        q.limit(5000);
       q.orderBy('id','asc'); 
      }).fetchAll();
    
    
            rl.question(`
                    Status:Start,Total Pending profiles:${users.length}
                    Please Choices Action ? 
                    \n 1 Fetch Friends of Freinds 
                    \n 2 Get Relationship of all users
                    \n 3 Login Account
                    \n
                    `, 
    async function (action) {
    
    
        var accounts_text = "\n 0 For All accounts  ";
        var accounts = await db.accounts.fetchAll();
        accounts.forEach((v, i) => {
            accounts_text += "\n " + (i + 1) + " => " + v.get('title');
        })
    
        console.clear();
        accounts_text += "\n";
        rl.question('Please Select account  ? ' + accounts_text, async function (account_index) {
    
            if (account_index == 0) {
                console.log('You Select All Accounts Data Fetch ');
            } else if (account_index > accounts.length) {
    
                console.log('Account inccorect reselect');
                process.exit()
    
            } else {
                var account = accounts.models[account_index - 1];
    
                console.log(`Seection ${action}, Account ${account_index} ${account.get('title')}`);
            }
    
    
            if (account_index == 0) {
                //all
    
    
                    //get all accounts
                accounts.forEach(async (account, i) => {
                    console.log('Starting account ' + account.get('title'));
                    //make every account class
                        var fb = new Facebook(account); 
                            //while lenfth of users isnot end start loop in current account
                            // while(users.models.length){
    
     
                        
                       while(users.models.length){
                                //pop user from extire incompele users
                                var user=users.models.pop();
                                // console.log("fb",fb)
                                //sent fb profile instance to class 
                                 fb.set_user_profile(user);
                                // fb.user=user;
    
                                console.log("user",user.get('title'))
                         
                                    if (action == 1) {
                                        //Fetch Freinds
    
    
                                    } else if (action == 2) {
                                        // Get Relationship  
                                     await   fb.user_abouts_section();
                               
                                   
                                    }
                                  
                             
                          
                        }
    
                })
    
    
            } else {
    
    
                var fb = new Facebook(account);
    
                if (action == 1) {
                    //Fetch Freinds
    
                } else if (action == 2) {
                    // Get Relationship  
                    await fb.user_abouts_section()
                }
    
    
            }
    
    
            //   await    user_abouts_section();
    
        });
    
    });
    
    rl.on('close', function () {
        console.log('\nBYE BYE !!!');
        process.exit(0);
    });
    

}

main();