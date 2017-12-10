//insert new user into users table
var db = require("../models");

//routes
module.exports = function(app) {
     // POST route for saving a new post
  app.post("/routes/user", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      title: req.body.title,
      email: req.body.email,
      phone: req.body.phone,
      photoURL: req.body.photoURL,
      password: req.body.password,
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
}


//---------------------------------------------signup page call------------------------------------------------------
// exports.signup = function(req, res){
//    message = '';
//    if(req.method == "POST"){
//       var post  = req.body;
//       var username= post.username;
//       var title= post.title;
//       var email= post.email;
//       var phone= post.phone;
//       var password= post.password;
//       var photoURL= post.photoURL;

//       var sql = "INSERT INTO `users`(`username`,`title`,`email`,`phone`, `password`, `photoURL`,`NOW()`,`NOW()`) VALUES ('" + username + "','" + title + "','" + email + "','" + phone + "','" + password + "','" + photoURL + "')";

//       var query = db.query(sql, function(err, result) {

//          message = "Succesful! Your account has been created.";
//          res.render('signup.ejs',{message: message});
//       });

//    } else {
//       res.render('signup');
//    }
// };
 
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var username = post.username;
      var password = post.password;
     
      var sql = "SELECT id, username, title, email, phone, photoURL FROM `users` WHERE `username`='" + username + "' and password = '" + password +"'";                           
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('dashboard.ejs');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
   } else {
      res.render('index.ejs',{message: message});
   }
           
};
//-----------------------------------------------dashboard page functionality----------------------------------------------
           
exports.dashboard = function(req, res, next){
           
   var user =  req.session.user,
   userId = req.session.userId;
   console.log('ddd='+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";

   db.query(sql, function(err, results){
      res.render('dashboard.ejs', {user:user});    
   });       
};

//-----------------------------------------------orders page functionality----------------------------------------------
           
exports.orders = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('orders.ejs',{data:result});
   });
};

//-----------------------------------------------inventory page functionality----------------------------------------------
           
exports.inventory = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('inventory.ejs',{data:result});
   });
};


//-----------------------------------------------stockcontrol page functionality----------------------------------------------
           
exports.stockcontrol = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('stockcontrol.ejs',{data:result});
   });
};
//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};
