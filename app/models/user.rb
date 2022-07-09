class User < ApplicationRecord
    has_many :purchases
    has_many :products, through: :purchases
    # has_secure_password

    # validates :username,
    #         presence: true,
    #         uniqueness: true,
    #         length: {
    #           minimum: 4,
    #           too_short: 'User name must be at least 4 characters.',
    #           maximum: 25,
    #           too_long: '25 characters is the maximum allowed.',
    #         }

    # validates :password,
    #         presence: true,
    #         length: {
    #           minimum: 4,
    #           too_short: 'Password must be at least 4 characters.',
    #           maximum: 25,
    #           too_long: '25 characters is the maximum allowed.',
    #         }
end
