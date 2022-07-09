class ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :error_unproc_entity

    # GET "/products"
    def index 
        render json: Product.all, status: :ok
    end

    # GET "/products/:id"
    def show 
        product = Product.find(params[:id])
        render json: product, status: :ok
    end

    private

    def error_not_found
      render json: { error: 'Product not found' }, status: :not_found
    end

    def error_unproc_entity(exception)
        render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
    end
    
end
