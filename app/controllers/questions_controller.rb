class QuestionsController < ApiController
  before_action :set_question, only: [:show, :answer]

  # GET /questions
  def index
    @questions = Question.all

    render json: @questions
  end

  # GET /questions/1
  def show
    render json: @question
  end

  def answer
    data = params[:answer]
    result = @question.check_answer(data)

    render json: { correct: result, answer: data }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end
end
