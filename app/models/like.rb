class Like < ApplicationRecord
    validates :user_id, presence: true
    validates :user_id, uniqueness: {:scope => [:likeable_type, :likeable_id]}
    belongs_to :likeable, :polymorphic => true
    belongs_to :user

    
end
