class CakesController < ApplicationController
  before_action :set_cake, only: [:show, :update, :destroy]
  # Make sure someone is logged in before they create something while also giving accurate user 
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /cakes
  def index
    @cakes = Cake.all

    render json: @cakes
  end

  # GET /cakes/1
  def show
    render json: @cake, include: :cake_flavors
  end

  # POST /cakes
  def create
    @cake = Cake.new(cake_params)
    @cake.user = @current_user

    if @cake.save
      render json: @cake, status: :created
    else
      render json: @cake.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cakes/1
  def update
    if @cake.update(cake_params)
      render json: @cake
    else
      render json: @cake.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cakes/1
  def destroy
    @cake.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cake
      @cake = Cake.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cake_params
      params.require(:cake).permit(:name, :user_id, :price, :description, :image)
    end
end
