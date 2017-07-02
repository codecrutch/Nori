class Api::BusinessesController < ApplicationController
  def index
    if query.present?
      @businesses = Business.search(query)
    else
      @businesses = Business.all
    end
  end

  def create
    @business = Business.new(business_params)

    if @business.save
      render json: @business
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def geocode
    response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?key=#{Figaro.env.google_maps_key}&address=#{address}")
    render json: response
  end

  def show
    @business = Business.find_by_id(params[:id])
    unless @business.nil?
      render :show
    else
      render json: ["Business doesn't exist"], status: 404
    end
  end

  def update
    @business = Business.find(params[:id])

    if @business.update_attributes(business_params)
      render json: @business
    else
      render json: @business.errors.full_messages, status: 404
    end
  end

  def destroy
    @business = Business.find_by_id(params[:id])
    unless @business.nil?
      @business.destroy
      render json: @business
    else
      render json: ["Business doesn't exist"], status: 404
    end
  end


  private

  def business_params
    params
      .require(:business)
      .permit(:name, :address, :hours, :price_rating, :website_url,
              :lat, :lng, :phone, :business_image)
  end

  def query
    params[:q]
  end

  def address
    params[:address]
  end
end
