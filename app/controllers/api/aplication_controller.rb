module Api
  class ApplicationController < ActionController::API
    require "pagy/extras/metadata"
    include Pagy::Backend
  end
end
