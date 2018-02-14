const passport = require('passport');

module.exports = app => {
  app.get('/auth/facebook',passport.authenticate('facebook',{
    //scope:['profile','username']
  }));

  app.get('/auth/facebook/callback',passport.authenticate('facebook',(req,res)=>{
    alert("login success!");
    //define callback actions
    //res.redirect('/'); 
  }));
  
  app.get('/api/logout',passport.authenticate('facebook',(req,res)=>{
    req.logout();
    res.redirect('/');
  }));

  app.get('/api/current_user',passport.authenticate('facebook',(req,res)=>{
    console.log(req.user);
    res.send(req.user);
  }));
  
}