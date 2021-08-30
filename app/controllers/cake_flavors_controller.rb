class CakeFlavorsController < ApplicationController
  before_action :set_cake_flavor, only: [:show, :update, :destroy]

  # GET /cake_flavors
  def index
    @cake_flavors = CakeFlavor.all

    render json: @cake_flavors
  end

  # GET /cake_flavors/1
  def show
    render json: @cake_flavor
  end

  # POST /cake_flavors
  def create
    @cake_flavor = CakeFlavor.new(cake_flavor_params)

    if @cake_flavor.save
      render json: @cake_flavor, status: :created, location: @cake_flavor
    else
      render json: @cake_flavor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cake_flavors/1
  def update
    if @cake_flavor.update(cake_flavor_params)
      render json: @cake_flavor
    else
      render json: @cake_flavor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cake_flavors/1
  def destroy
    @cake_flavor.destroy
  end

  def add_to_cake_flavors
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cake_flavor
      @cake_flavor = CakeFlavor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cake_flavor_params
      params.require(:cake_flavor).permit(:name)
    end
end
