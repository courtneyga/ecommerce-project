class PurchasesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :error_unproc_entity
    
    def index 
        render json: Purchase.all, status: :ok
    end

    def show 
        buy = Purchase.find(params[:id])
        render json: buy, status: :ok
    end

    def create
        product = Product.find(params[:product_id])
        new_buy = Purchase.create!(purchase_params)
        render json: new_buy, status: :created
    end
    
      private
    
    def purchase_params
        params.permit(:user_id, :product_id)
    end
    
    def error_not_found
        render json: { error: 'Purchase not found' }, status: :not_found
    end
    
    def error_unproc_entity(exception)
        render json: {
                 errors: exception.record.errors.full_messages,
               },
               status: :unprocessable_entity
    end

end
