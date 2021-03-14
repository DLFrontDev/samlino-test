import {generateJwt} from './jwt.js'

export default {
    login(user, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const valid = (user === 'admin' && password === 'admin') || (user ==='user' && password ==='password');
                if(valid) {
                    let jwt = generateJwt(user, user);
                    resolve({
                    	jwt: jwt,
                    	role: user === 'admin' ? "ADMIN" : "USER"
                	});
                } else {
                    reject();
                }
            }, 2000);
        });
    },
    signUp() {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                const valid = Math.random() < 0.8;
                if(valid) {
                    resolve();
                } else {
                    reject();
                }
            }, 3000);
        });
    }
}