require "application_system_test_case"

class ScrapbooksTest < ApplicationSystemTestCase
  setup do
    @scrapbook = scrapbooks(:one)
  end

  test "visiting the index" do
    visit scrapbooks_url
    assert_selector "h1", text: "Scrapbooks"
  end

  test "creating a Scrapbook" do
    visit scrapbooks_url
    click_on "New Scrapbook"

    fill_in "Image1", with: @scrapbook.image1
    fill_in "Image10", with: @scrapbook.image10
    fill_in "Image2", with: @scrapbook.image2
    fill_in "Image3", with: @scrapbook.image3
    fill_in "Image4", with: @scrapbook.image4
    fill_in "Image5", with: @scrapbook.image5
    fill_in "Image6", with: @scrapbook.image6
    fill_in "Image7", with: @scrapbook.image7
    fill_in "Image8", with: @scrapbook.image8
    fill_in "Image9", with: @scrapbook.image9
    fill_in "Name", with: @scrapbook.name
    click_on "Create Scrapbook"

    assert_text "Scrapbook was successfully created"
    click_on "Back"
  end

  test "updating a Scrapbook" do
    visit scrapbooks_url
    click_on "Edit", match: :first

    fill_in "Image1", with: @scrapbook.image1
    fill_in "Image10", with: @scrapbook.image10
    fill_in "Image2", with: @scrapbook.image2
    fill_in "Image3", with: @scrapbook.image3
    fill_in "Image4", with: @scrapbook.image4
    fill_in "Image5", with: @scrapbook.image5
    fill_in "Image6", with: @scrapbook.image6
    fill_in "Image7", with: @scrapbook.image7
    fill_in "Image8", with: @scrapbook.image8
    fill_in "Image9", with: @scrapbook.image9
    fill_in "Name", with: @scrapbook.name
    click_on "Update Scrapbook"

    assert_text "Scrapbook was successfully updated"
    click_on "Back"
  end

  test "destroying a Scrapbook" do
    visit scrapbooks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Scrapbook was successfully destroyed"
  end
end
