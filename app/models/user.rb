class User < ApplicationRecord
    validates :password, length:{minimum: 6, allow_nil: true}
    validates :first_name, :last_name, :session_token, :password_digest, :email, presence: true
    validates :email, :session_token,  uniqueness: true
    
    after_initialize :ensure_session_token
    attr_reader :password


    has_many :posted_videos, class_name: 'Video', primary_key: :id, foreign_key: :user_id
    has_many :comments
    has_many :likes




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


    def find_like(object)
        # debugger
        self.likes.find_by({likeable_type: object.class.name, likeable_id: object.id})
    end

    def liked_content
        video_hash = {}
        comment_hash = {}
        videos_obj = self.likes.select{|like| like.likeable_type == "Video"}
        video_ids = videos_obj.map do |obj| 
            video_hash[obj.likeable_id] = {id: obj.likeable_id, liked: obj.liked}
        end
        comments_obj = self.likes.select{|like| like.likeable_type == "Comment"}
        comment_ids = comments_obj.map do |obj| 
            comment_hash[obj.likeable_id] = {id: obj.likeable_id, liked: obj.liked}
        end
        return [video_hash,comment_hash]
    end


end
