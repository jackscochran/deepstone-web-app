const User = require('./model');
const bcrypt = require('bcrypt')

const userAdaptor = (() => {

    async function register(username, email, plainTextPassword){
        if (username == '' || username==null)
            username = email;

        exists = await doesUserExist(email)

        return new Promise((resolve, reject) => {
            if (exists)
                reject({success: false, message: 'User already exists'})

            bcrypt.hash(plainTextPassword, 10, (err, password) => {

                if (err)
                    reject({success: false, message: 'Error saving user, please try again later'})

                User.create({username, email, password})
                .then(data => resolve({success: true, message: 'Success'}))
                .catch(err => reject({success: false, message: err._message}))
            })
        })
    }

    async function login(email, password){
        
        exists = await doesUserExist(email) 

        if (exists)
            user = await User.findOne({email: email})

        return new Promise((resolve, reject) => {
            if (!exists)
                reject({success: false, message: 'User does not exist'})

            bcrypt.compare(password, user.password, (err, isMatch) => {

                if (err)
                    reject({success: false, message: 'Error getting user, please try again later'})

                if (!isMatch) 
                    reject({success: false, message: 'Incorrect password'})
                    
                resolve({success: true, message: 'Success', data: user})
            })
        })
    }

    function doesUserExist(email){
        return User.findOne({email:email}).then(data => data ? true : false)
    }

    async function deleteUser(email, password){
        
        exists = await doesUserExist(email) 

        return new Promise((resolve, reject) => {
            if (!exists)
                resolve({success: false, message: 'User does not exist'})

            login(email, password)
            .then(response => {
                User.deleteOne({_id: response.data._id})
                .then(data => resolve({success: true, message: 'Success'}))
                .catch(err => reject({success: false, message: err}))
            })
            .catch(err => reject(err))
        })

    }

    return {
        register,
        login,
        doesUserExist,
        deleteUser
    }

})()

module.exports = userAdaptor