class Api::ReviewsController < ApplicationController
  def index
    @reviews = Business.includes(:reviews).find(params[:business_id]).reviews.includes(:user)
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: ['Invalid review parameters'], status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end


  private

  def review_params
    params.require(:review).permit(:user_id, :business_id, :rating, :title, :description)
  end
end
