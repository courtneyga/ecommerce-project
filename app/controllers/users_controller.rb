class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :error_unproc_entity
    
    # GET /users
    def index
        render json: User.all, status: :ok
    end

    # GET /users/:id
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # POST /users
    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    # DELETE /users/:id
    # def destroy
    #     user = User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end

    # user_params
    def user_params
        params.permit(:username, :password)
    end

    def error_not_found
        render json: { error: 'User not found' }, status: :not_found
    end
    
    def error_unproc_entity(exception)
        render json: {
                 errors: exception.record.errors.full_messages,
               },
               status: :unprocessable_entity
    end

end
