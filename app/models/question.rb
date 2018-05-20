# == Schema Information
#
# Table name: questions
#
#  id         :bigint(8)        not null, primary key
#  content    :string
#  answer     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
end
