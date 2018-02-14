const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../keys');
const mongoose = require('mongoose');

const User = mongoose.model('user');


passport.use(new FacebookStrategy({
  clientID:keys.facebookClientID,
  clientSecret:keys.facebookClientSecret,
  callbackURL:'/auth/facebook/callback',
  proxy:true

},async (accessToken,refreshToken,profile,done)=>{
  //const existingUser = await existingUser.
  const user = await new User({
    facebookId:profile.id
  }).save()
  done(null,user);
}));