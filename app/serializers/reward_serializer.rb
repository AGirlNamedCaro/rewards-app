class RewardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :points_required

  belongs_to :store
end
