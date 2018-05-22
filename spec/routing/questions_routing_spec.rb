require "rails_helper"

RSpec.describe QuestionsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/questions").to route_to("questions#index")
    end

    it "routes to #show" do
      expect(:get => "/api/questions/1").to route_to("questions#show", :id => "1")
    end

    it "routes to #answer" do
      expect(:post => "/api/questions/1/answer").to route_to("questions#answer", :id => "1")
    end

  end
end
