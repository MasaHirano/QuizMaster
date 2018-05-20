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

  validates :content, :answer, presence: true

  def check_answer(given_answer)
    correct_answer, given_answer = [answer, given_answer].map { |str| str.strip.downcase }
    return true if correct_answer == given_answer

    correct_answer, given_answer = [answer, given_answer].map { |str| numbers_to_words(str) }
    return true if correct_answer == given_answer

    false
  end

  private

  def numbers_to_words(string)
    string.gsub(/\d+/) { |str| str.to_i.to_words }
  end
end
