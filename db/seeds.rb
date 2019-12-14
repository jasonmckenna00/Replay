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

video1 = Video.create({ title: 'video1', description: 'my video 1', video_url: 'link to video', user_id: 1})
video2 = Video.create({ title: 'video2', description: 'my video 2', video_url: 'link to video1', user_id: 1})
video3 = Video.create({ title: 'video3', description: 'my video 3', video_url: 'link to video2', user_id: 2})
video4 = Video.create({ title: 'video4', description: 'my video 4', video_url: 'link to video3', user_id: 2})
video5 = Video.create({ title: 'video5', description: 'my video 5', video_url: 'link to video4', user_id: 3})
