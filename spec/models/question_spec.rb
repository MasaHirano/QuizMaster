require 'rails_helper'

RSpec.describe Question, type: :model do
  describe '#errors' do
    subject { question.tap(&:valid?).errors.to_h }

    context 'with valid attributes' do
      let(:question) { build(:question) }
      it { is_expected.to be_empty }
    end

    context 'with empty content' do
      let(:question) { build(:question, content: '') }
      it { is_expected.to include(content: "can't be blank") }
    end

    context 'with content which has allowed tags like `<span style="color:red;">foo</span>`' do
      let(:question) { build(:question, content: '<span style="color:red;">foo</span>') }
      it { is_expected.to be_empty }
    end

    context 'with content which has disallowed tags like `foo<% puts "bar" %>`' do
      let(:question) { build(:question, content: 'foo<% puts "bar" %>') }
      it 'should have key :content and content start with "Disallowed tags or attributes are contained."' do
        expect(subject.fetch(:content)).to start_with('Disallowed tags or attributes are contained.')
      end
    end

    context 'with empty answer' do
      let(:question) { build(:question, answer: '') }
      it { is_expected.to include(answer: "can't be blank") }
    end
  end

  describe '#check_answer' do
    subject { question.check_answer(given_answer) }

    context 'when currect answer is 26 and given answer is 26' do
      let(:question) { build(:question, answer: '26') }
      let(:given_answer) { '26' }
      it { is_expected.to be_truthy }
    end

    context 'when currect answer is 26 and given answer is twenty-six' do
      let(:question) { build(:question, answer: '26') }
      let(:given_answer) { 'twenty-six' }
      it { is_expected.to be_truthy }
    end

    context 'when currect answer is 26 and given answer is 25' do
      let(:question) { build(:question, answer: '26') }
      let(:given_answer) { '25' }
      it { is_expected.to be_falsey }
    end

    context 'when currect answer is 26 and given answer is twenty-five' do
      let(:question) { build(:question, answer: '26') }
      let(:given_answer) { 'twenty-five' }
      it { is_expected.to be_falsey }
    end
  end
end
