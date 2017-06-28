if @reviews
  if @reviews.length == 1
    json.set! @reviews.first.id do
      json.partial! "api/reviews/review", review: @reviews.first
    end
  else
    @reviews.each do |review|
      json.set! review.id do
        json.partial! "api/reviews/review", review: review
      end
    end
  end
end
