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

video1 = Video.create({ title: 'video1', description: 'my video 1', video_url: 'link to video0', thumbnail_url: 'galaxy.jpg',user_id: 1})
video3 = Video.create({ title: 'video3', description: 'my video 3', video_url: 'link to video2', thumbnail_url: 'galaxy.jpg', user_id: 2})
video2 = Video.create({ title: 'video2', description: 'my video 2', video_url: 'link to video1', thumbnail_url: 'galaxy.jpg', user_id: 1})
video4 = Video.create({ title: 'video4', description: 'my video 4', video_url: 'link to video3', thumbnail_url: 'galaxy.jpg', user_id: 2})
video5 = Video.create({ title: 'video5', description: 'my video 5', video_url: 'link to video5', thumbnail_url: 'galaxy.jpg', user_id: 1})
video6 = Video.create({ title: 'video6', description: 'my video 6', video_url: 'link to video6', thumbnail_url: 'galaxy.jpg', user_id: 1})
video7 = Video.create({ title: 'video7', description: 'my video 7', video_url: 'link to video7', thumbnail_url: 'galaxy.jpg', user_id: 1})
video8 = Video.create({ title: 'video8', description: 'my video 8', video_url: 'link to video8', thumbnail_url: 'galaxy.jpg', user_id: 1})
video9 = Video.create({ title: 'video9', description: 'my video 9', video_url: 'link to video9', thumbnail_url: 'galaxy.jpg', user_id: 2})
video10 = Video.create({ title: 'video10', description: 'my video 10', video_url: 'link to video10', thumbnail_url: 'galaxy.jpg', user_id: 2})
video11 = Video.create({ title: 'video11', description: 'my video 11', video_url: 'link to video11', thumbnail_url: 'galaxy.jpg', user_id: 2})
video12 = Video.create({ title: 'video12', description: 'my video 12', video_url: 'link to video12', thumbnail_url: 'galaxy.jpg', user_id: 1})
video13 = Video.create({ title: 'video13', description: 'my video 13', video_url: 'link to video13', thumbnail_url: 'galaxy.jpg', user_id: 1})
video14 = Video.create({ title: 'video14', description: 'my video 14', video_url: 'link to video14', thumbnail_url: 'galaxy.jpg', user_id: 1})


