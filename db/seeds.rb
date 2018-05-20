# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

now = DateTime.now
question_keys = %i(content answer created_at updated_at)
question_values = [
  ['How many letters are there in the English alphabet?', '26', now, now],
  ['What is the capital of Japan?', 'Tokyo', now, now],
]
Question.create!(question_values.map { |value| question_keys.zip(value).to_h })
