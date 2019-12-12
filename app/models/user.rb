class User < ApplicationRecord
    validates :password, length:{minimum: 6, allow_nil: true}
    validates :first_name, :last_name, :session_token, :password_digest, :email, presence: true
    validates :email, :session_token, :email, uniqueness: true
    
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def self.find_by_email(email)
        # debugger
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

end
