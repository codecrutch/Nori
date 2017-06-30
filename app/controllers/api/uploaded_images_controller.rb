class Api::UploadedImagesController < ApplicationController
  def create
    @image = UploadedImage.new(image_params)
    @business = Business.find(params[:uploaded_image][:business_id])

    if @image.save
      render 'api/businesses/show'
    else
      render json: @image.errors.full_messages, status: 402
    end
  end

  private

  def image_params
    params.require(:uploaded_image).permit(:business_id, :user_id, :photo)
  end
end
