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
    first_name: 'Admin',
    last_name: 'Admin',
    email: 'admin@admin.com', 
    password: 'password'
})

demo = User.create({
    first_name: 'Demo',
    last_name: 'User',
    email:'demo@trialaccount.com', 
    password: 'hunter2'
})

jason = User.create({
    first_name: 'Jason',
    last_name: 'McKenna',
    email: 'jasonmckenna@aol.com',
    password: 'jasonmckenna'
})

youtube = User.create({
    first_name: 'YouTube',
    last_name: 'Throwbacks',
    email: 'youtube@aol.com',
    password: 'youtube'
})

pierce= User.create({
    first_name: 'Pierce',
    last_name: 'Butler',
    email: 'piercebutler@aol.com',
    password: 'piercebutler'
})


# User.create({
    # first_name: '',
    # last_name: '',
    # email: '' ,
    # password: ''
# })

# video1 = Video.new({ title: 'video1', description: 'my video 1',user_id: User.first.id})
#     thumbnail1 = File.open("/home/jmckenna/Desktop/Youtube - Final Project/Used_photos/hubble.jpg")
#     video1.thumbnail_url.attach(io: thumbnail1, filename: 'hubble.jpg')
#     video_url = File.open("/home/jmckenna/Desktop/Youtube - Final Project/Used_photos/splash.mp4")
#     video1.video_url.attach(io: video_url, filename: 'splash.mp4')
#     video1.save!

# ################################ aws seeds ################################
# demo = Video.new({ title: '', description: lorem,user_id: demo.id})
#     demo_thumbnail_url = open("")
#     demo_video_url = open("")
#     demo.thumbnail_url.attach(io: demo_thumbnail_url, filename: '')
#     demo.video_url.attach(io: demo_video_url, filename: '')
#     demo.save!

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


admin1 = Video.new({ title: 'Super Smash Bros AI Part 1', description: lorem,user_id: admin.id})
    admin1_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/smash_bros_thumbnail.png")
    admin1_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/smashbros_part1.mp4")
    admin1.thumbnail_url.attach(io: admin1_thumbnail_url, filename: 'smash_bros_thumbnail.png')
    admin1.video_url.attach(io: admin1_video_url, filename: 'smashbros_part1.mp4')
    admin1.save!

admin2 = Video.new({ title: 'Super Smash Bros AI Part 2', description: lorem ,user_id:  admin.id})
    admin2_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/smash_bros_thumbnail.png")
    admin2_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/smashbros_part1.mp4")
    admin2.thumbnail_url.attach(io: admin2_thumbnail_url, filename: 'smash_bros_thumbnail.png')
    admin2.video_url.attach(io: admin2_video_url, filename: 'smashbros_part1.mp4')
    admin2.save!




#########################Demo seed videos####################3
demo1 = Video.new({ title: 'Super Mario Speed Run Part 1', description: lorem,user_id: demo.id})
    demo1_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun_thumbnail.png")
    demo1_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun+part1.mp4")
    demo1.thumbnail_url.attach(io: demo1_thumbnail_url, filename: 'supermariospeedrun_thumbnail.png')
    demo1.video_url.attach(io: demo1_video_url, filename: 'supermariospeedrun+part1.mp4')
    demo1.save!

demo2 = Video.new({ title: 'Super Mario Speed Run Part 2', description: lorem,user_id: demo.id})
    demo2_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun_thumbnail.png")
    demo2_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun+part2.mp4")
    demo2.thumbnail_url.attach(io: demo2_thumbnail_url, filename: 'supermariospeedrun_thumbnail.png"')
    demo2.video_url.attach(io: demo2_video_url, filename: 'supermariospeedrun+part2.mp4')
    demo2.save!

demo3 = Video.new({ title: 'Super Mario Speed Run Part 3', description: lorem,user_id: demo.id})
    demo3_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun_thumbnail.png")
    demo3_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun+part3.mp4")
    demo3.thumbnail_url.attach(io: demo3_thumbnail_url, filename: 'supermariospeedrun_thumbnail.png"')
    demo3.video_url.attach(io: demo3_video_url, filename: 'supermariospeedrun+part3.mp4')
    demo3.save!
    
demo4 = Video.new({ title: 'Super Mario Speed Run Part 4', description: lorem,user_id: demo.id})
    demo4_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun_thumbnail.png")
    demo4_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun+part4.mp4")
    demo4.thumbnail_url.attach(io: demo4_thumbnail_url, filename: 'supermariospeedrun_thumbnail.png"')
    demo4.video_url.attach(io: demo4_video_url, filename: 'supermariospeedrun+part4.mp4')
    demo4.save!

demo5 = Video.new({ title: 'Super Mario Speed Run Part 5', description: lorem,user_id: demo.id})
    demo5_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun_thumbnail.png")
    demo5_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/supermariospeedrun+part5.mp4")
    demo5.thumbnail_url.attach(io: demo5_thumbnail_url, filename: 'supermariospeedrun_thumbnail.png"')
    demo5.video_url.attach(io: demo5_video_url, filename: 'supermariospeedrun+part5.mp4')
    demo5.save!




################# jason seed videos##############

jason1 = Video.new({ title: 'Why JavaScript is Weird Part 1', description: lorem, user_id: jason.id})
    jason1_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/weird_javascript_thumbnail.png")
    jason1_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/Why+JavaScript+Is+Weird+p1.mp4")
    jason1.thumbnail_url.attach(io: jason1_thumbnail_url, filename: 'weird_javascript_thumbnail.png')
    jason1.video_url.attach(io: jason1_video_url, filename: 'Why+JavaScript+Is+Weird+p1.mp4')
    jason1.save!

jason2 = Video.new({ title: 'Why JavaScript is Weird Part 2', description: lorem,user_id: jason.id})
    jason2_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/weird_javascript_thumbnail.png")
    jason2_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/Why+JavaScript+Is+Weird+p2.mp4")
    jason2.thumbnail_url.attach(io: jason2_thumbnail_url, filename: 'weird_javascript_thumbnail.png')
    jason2.video_url.attach(io: jason2_video_url, filename: 'Why+JavaScript+Is+Weird+p2.mp4')
    jason2.save!

jason3 = Video.new({ title: 'Why JavaScript is Weird Part 3', description: lorem,user_id: jason.id})
    jason3_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/weird_javascript_thumbnail.png")
    jason3_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/Why+JavaScript+Is+Weird+p3.mp4")
    jason3.thumbnail_url.attach(io: jason3_thumbnail_url, filename: 'weird_javascript_thumbnail.png')
    jason3.video_url.attach(io: jason3_video_url, filename: 'Why+JavaScript+Is+Weird+p3.mp4')
    jason3.save!

jason4 = Video.new({ title: 'Longest Palindromic Substring P1', description: lorem,user_id: jason.id})
    jason4_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/longest_pal_substr_thumbnail.png")
    jason4_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/Longest+Palindromic+Substring+part1.mp4")
    jason4.thumbnail_url.attach(io: jason4_thumbnail_url, filename: 'longest_pal_substr_thumbnail.png')
    jason4.video_url.attach(io: jason4_video_url, filename: 'Longest+Palindromic+Substring+part1.mp4')
    jason4.save!

jason5 = Video.new({ title: 'Longest Palindromic Substring P2', description: lorem,user_id: jason.id})
    jason5_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/longest_pal_substr_thumbnail.png")
    jason5_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/Longest+Palindromic+Substring+part2.mp4")
    jason5.thumbnail_url.attach(io: jason5_thumbnail_url, filename: 'longest_pal_substr_thumbnail.png')
    jason5.video_url.attach(io: jason5_video_url, filename: 'Longest+Palindromic+Substring+part2.mp4')
    jason5.save!



#################### Pierce videos 

pierce1 = Video.new({ title: 'BU vs Syracuse Rugby Championship 1', description: lorem,user_id: pierce.id})
    pierce1_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc_thumbnail.jpg")
    pierce1_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc+p1.mp4")
    pierce1.thumbnail_url.attach(io: pierce1_thumbnail_url, filename: 'burfc_thumbnail.jpg')
    pierce1.video_url.attach(io: pierce1_video_url, filename: 'burfc+p1.mp4')
    pierce1.save!

pierce2 = Video.new({ title: 'BU vs Syracuse Rugby Championship 2', description: lorem,user_id: pierce.id})
    pierce2_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc_thumbnail.jpg")
    pierce2_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc+p2.mp4")
    pierce2.thumbnail_url.attach(io: pierce2_thumbnail_url, filename: 'burfc_thumbnail.jpg')
    pierce2.video_url.attach(io: pierce2_video_url, filename: 'burfc+p2.mp4')
    pierce2.save!

pierce3 = Video.new({ title: 'BU vs Syracuse Rugby Championship 3', description: lorem,user_id: pierce.id})
    pierce3_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc_thumbnail.jpg")
    pierce3_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc+p3.mp4")
    pierce3.thumbnail_url.attach(io: pierce3_thumbnail_url, filename: 'burfc_thumbnail.jpg')
    pierce3.video_url.attach(io: pierce3_video_url, filename: 'burfc+p3.mp4')
    pierce3.save!

pierce4 = Video.new({ title: 'BU vs Syracuse Rugby Championship 4', description: lorem,user_id: pierce.id})
    pierce4_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc_thumbnail.jpg")
    pierce4_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/burfc+p4.mp4")
    pierce4.thumbnail_url.attach(io: pierce4_thumbnail_url, filename: 'burfc_thumbnail.jpg')
    pierce4.video_url.attach(io: pierce4_video_url, filename: 'burfc+p4.mp4')
    pierce4.save!



############### App academy videos

youtube1 = Video.new({ title: 'Chocolate Rain', description: lorem,user_id: youtube.id})
    youtube1_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/chocolaterain_thumbnail.png")
    youtube1_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/chocorain.mp4")
    youtube1.thumbnail_url.attach(io: youtube1_thumbnail_url, filename: 'chocolaterain_thumbnail.png')
    youtube1.video_url.attach(io: youtube1_video_url, filename: 'chocorain.mp4')
    youtube1.save!

youtube2 = Video.new({ title: 'Star Wars Kid', description: lorem,user_id: youtube.id})
    youtube2_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/starwarskid_thumbnail.png")
    youtube2_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/starwars+kid.mp4")
    youtube2.thumbnail_url.attach(io: youtube2_thumbnail_url, filename: 'starwarskid_thumbnail.png')
    youtube2.video_url.attach(io: youtube2_video_url, filename: 'starwars+kid.mp4')
    youtube2.save!

youtube3 = Video.new({ title: 'Double Rainbow!!', description: lorem,user_id: youtube.id})
    youtube3_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/double+rainbow_+thumbnail.png")
    youtube3_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/doublerainbow.mp4")
    youtube3.thumbnail_url.attach(io: youtube3_thumbnail_url, filename: 'double+rainbow_+thumbnail.png')
    youtube3.video_url.attach(io: youtube3_video_url, filename: 'doublerainbow.mp4')
    youtube3.save!

youtube4 = Video.new({ title: 'Miss Carolina Speech', description: lorem,user_id: youtube.id})
    youtube4_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/missusa_thumbnail.png")
    youtube4_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/missusa.mp4")
    youtube4.thumbnail_url.attach(io: youtube4_thumbnail_url, filename: 'missusa_thumbnail.png')
    youtube4.video_url.attach(io: youtube4_video_url, filename: 'missusa.mp4')
    youtube4.save!

youtube5 = Video.new({ title: 'I Like Turtles', description: lorem,user_id: youtube.id})
    youtube5_thumbnail_url = open("https://replay-videos-seeds.s3.amazonaws.com/iliketurtles_thumbnail.png")
    youtube5_video_url = open("https://replay-videos-seeds.s3.amazonaws.com/iliketurtles.mp4")
    youtube5.thumbnail_url.attach(io: youtube5_thumbnail_url, filename: 'iliketurtles_thumbnail.png')
    youtube5.video_url.attach(io: youtube5_video_url, filename: 'iliketurtles.mp4')
    youtube5.save!
