require 'test_helper'

class ScrapbooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @scrapbook = scrapbooks(:one)
  end

  test "should get index" do
    get scrapbooks_url
    assert_response :success
  end

  test "should get new" do
    get new_scrapbook_url
    assert_response :success
  end

  test "should create scrapbook" do
    assert_difference('Scrapbook.count') do
      post scrapbooks_url, params: { scrapbook: { image1: @scrapbook.image1, image10: @scrapbook.image10, image2: @scrapbook.image2, image3: @scrapbook.image3, image4: @scrapbook.image4, image5: @scrapbook.image5, image6: @scrapbook.image6, image7: @scrapbook.image7, image8: @scrapbook.image8, image9: @scrapbook.image9, name: @scrapbook.name } }
    end

    assert_redirected_to scrapbook_url(Scrapbook.last)
  end

  test "should show scrapbook" do
    get scrapbook_url(@scrapbook)
    assert_response :success
  end

  test "should get edit" do
    get edit_scrapbook_url(@scrapbook)
    assert_response :success
  end

  test "should update scrapbook" do
    patch scrapbook_url(@scrapbook), params: { scrapbook: { image1: @scrapbook.image1, image10: @scrapbook.image10, image2: @scrapbook.image2, image3: @scrapbook.image3, image4: @scrapbook.image4, image5: @scrapbook.image5, image6: @scrapbook.image6, image7: @scrapbook.image7, image8: @scrapbook.image8, image9: @scrapbook.image9, name: @scrapbook.name } }
    assert_redirected_to scrapbook_url(@scrapbook)
  end

  test "should destroy scrapbook" do
    assert_difference('Scrapbook.count', -1) do
      delete scrapbook_url(@scrapbook)
    end

    assert_redirected_to scrapbooks_url
  end
end
