FactoryBot.define do
  factory :question do
    id { 1 }
    content { 'How many letters are there in the English alphabet?' }
    answer { '26' }
    created_at { DateTime.now }
    updated_at { DateTime.now }
  end
end