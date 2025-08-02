class RewardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :points_required, :image_url

  belongs_to :store

  def image_url
    Rails.application.routes.url_helpers.rails_blob_url(object.image, only_path: true) if object.image.attached?
  end
end
