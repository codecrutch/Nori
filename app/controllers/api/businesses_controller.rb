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

  def price
    params[:price]
  end

  def category
    params[:category]
  end
end
