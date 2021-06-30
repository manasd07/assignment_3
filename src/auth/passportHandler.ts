import passport from 'passport';
import passportJwt from 'passport-jwt';
import { User } from '../entity/User';
import { JWT_SECRET } from '../utils/secrets';
import connection from '../connection/connection';
import { Repository } from 'typeorm';

let userRepo: Repository<User>;
connection.then((conn) => {
  userRepo = conn.getRepository(User);
});

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async function (jwtToken:any, done) {
      try {
        const user = await userRepo.findOneOrFail({ id: jwtToken.id });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

