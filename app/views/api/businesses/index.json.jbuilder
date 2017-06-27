if @businesses
  if @businesses.length == 1
    json.set! @businesses.first.id do
      json.partial! "api/businesses/business", business: @businesses.first
    end
  else
    @businesses.each do |business|
      json.set! business.id do
        json.partial! "api/businesses/business", business: business
      end
    end
  end
end
