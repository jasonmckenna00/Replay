# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"
Like.destroy_all
Comment.destroy_all
Video.destroy_all
User.destroy_all

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

# video1 = Video.new({ title: 'video1', description: 'my video 1',user_id: User.first.id})
#     thumbnail1 = File.open("/home/jmckenna/Desktop/Youtube - Final Project/Used_photos/hubble.jpg")
#     video1.thumbnail_url.attach(io: thumbnail1, filename: 'hubble.jpg')
#     video_url = File.open("/home/jmckenna/Desktop/Youtube - Final Project/Used_photos/splash.mp4")
#     video1.video_url.attach(io: video_url, filename: 'splash.mp4')
#     video1.save!

# ################################ aws seeds ################################
video1 = Video.new({ title: 'video1', description: 'my video 1',user_id: demo.id})
    thumbnail1 = open("https://replay-videos-seeds.s3.amazonaws.com/yacht.jpg")
    video1.thumbnail_url.attach(io: thumbnail1, filename: 'yacht.jpg')
    video_url1 = open("https://replay-videos-seeds.s3.amazonaws.com/splash.mp4")
    video1.video_url.attach(io: video_url1, filename: 'splash.mp4')
    video1.save!

video2 = Video.new({ title: 'video2', description: 'my video 2',user_id: demo.id})
    thumbnail1 = open("https://replay-videos-seeds.s3.amazonaws.com/yacht.jpg")
    video2.thumbnail_url.attach(io: thumbnail1, filename: 'yacht.jpg')
    video_url2 = open("https://replay-videos-seeds.s3.amazonaws.com/splash.mp4")
    video2.video_url.attach(io: video_url2, filename: 'splash.mp4')
    video2.save!

video3 = Video.new({ title: 'video3', description: 'my video 3',user_id: demo.id})
    thumbnail1 = open("https://replay-videos-seeds.s3.amazonaws.com/yacht.jpg")
    video3.thumbnail_url.attach(io: thumbnail1, filename: 'yacht.jpg')
    video_url3 = open("https://replay-videos-seeds.s3.amazonaws.com/splash.mp4")
    video3.video_url.attach(io: video_url3, filename: 'splash.mp4')
    video3.save!




# comment1 = video1.comments.create!({body: 'test', user_id: demo.id})

# comment2 = video1.comments.create!({body: 'test2', user_id: demo.id})
# comment3 = video2.comments.create!({body: 'test3', user_id: demo.id})
