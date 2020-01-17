# README
RePlay
======

Replay is a video sharing website where users can upload videos and view content posted by others. Signed in users are allowed to leave comments or like a video while non-logged in users are limited to only viewing. Videos and comments are protected with user authentication to prevent users from editing/removing content that isn't theirs. The app utilizes the React-Redux cycle with a Ruby on Rails backend configuration for datebase validations. Videos and images are stored using AWS-S3 cloud-storage and the server is hosted by Heroku.


[Link to the app](https://replay-videos.herokuapp.com/#/)



***
Technologies Used
-----------------

* Backend
    - PostgreSQL
    - Ruby on Rails
* Frontend
    - React.js
    - Redux
* Storage 
    - AWS


***
Features
--------

### User authentication and validations
Implimented own authentication process to ensure proper user credentials. Features validations on the User and Session models to secure user information without storing password information.


```
    validates :password, length:{minimum: 6, allow_nil: true}
    validates :first_name, :last_name, :session_token, :password_digest, :email, presence: true
    validates :email, :session_token,  uniqueness: true
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def self.find_by_email(email)
        user = User.find_by(email: email)
        user ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

```

### User video upload/edit functionality


