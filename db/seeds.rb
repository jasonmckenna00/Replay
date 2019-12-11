# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create({
    first_name: 'admin',
    last_name: 'admin',
    email: 'admin', 
    password: 'password'
})

demo = User.create({
    first_name: 'Demo',
    last_name: 'User',
    email:'demo@trialaccount.com', 
    password: 'hunter2'
})