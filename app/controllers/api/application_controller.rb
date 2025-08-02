module Api
  class ApplicationController < ActionController::API
    include Pagy::Backend
  end
end
