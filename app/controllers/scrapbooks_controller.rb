class ScrapbooksController < ApplicationController
  before_action :set_scrapbook, only: [:show, :edit, :update, :destroy]

  # GET /scrapbooks
  # GET /scrapbooks.json
  def index
    @scrapbooks = Scrapbook.all
  end

  # GET /scrapbooks/1
  # GET /scrapbooks/1.json
  def show
  end

  # GET /scrapbooks/new
  def new
    @scrapbook = Scrapbook.new
  end

  # GET /scrapbooks/1/edit
  def edit
  end

  # POST /scrapbooks
  # POST /scrapbooks.json
  def create
    @scrapbook = Scrapbook.new

    respond_to do |format|
      if @scrapbook.save
        format.html { redirect_to @scrapbook, notice: 'Scrapbook was successfully created.' }
        format.json { render :show, status: :created, location: @scrapbook }
      else
        format.html { render :new }
        format.json { render json: @scrapbook.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /scrapbooks/1
  # PATCH/PUT /scrapbooks/1.json
  def update
    respond_to do |format|
      if @scrapbook.update(scrapbook_params)
        format.html { redirect_to @scrapbook, notice: 'Scrapbook was successfully updated.' }
        format.json { render :show, status: :ok, location: @scrapbook }
      else
        format.html { render :edit }
        format.json { render json: @scrapbook.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scrapbooks/1
  # DELETE /scrapbooks/1.json
  def destroy
    @scrapbook.destroy
    respond_to do |format|
      format.html { redirect_to scrapbooks_url, notice: 'Scrapbook was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_scrapbook
      @scrapbook = Scrapbook.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def scrapbook_params
      params.require(:scrapbook).permit(:name, :image1, :image2, :image3, :image4, :image5, :image6, :image7, :image8, :image9, :image10)
    end
end
