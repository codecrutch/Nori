## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- BusinessSearchBar
- FeaturedBusinessList
- CategoryList

**NewBusinessContainer**
- BusinessForm

**SearchResultsContainer**
- BusinessSearchBar
- SearchResultsIndex
  * SearchResultDetail
- Map

**BusinessContainer**
- Map
- BusinessDetail
- GalleryView
  * Image
- ReviewForm
  * Rating
- ReviewIndex
  * ReviewDetail
- BusinessInfo

**ReviewContainer**
- ReviewDetail

**CategoryContainer**
- CategoryIndex
  *CatgoryDetail

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/business/:businessId" | "BusinessContainer" |
| "/home/business/:businessId/review/:id" | "ReviewContainer" |
| "/home/categories/:category" | "CategoryContainer" |
| "/home/search-results" | "SearchResultsContainer" |
