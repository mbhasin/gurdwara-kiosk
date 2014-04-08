require "spec_helper"

describe "navigation" do
  it "should display the main page" do
    visit '/'
    expect(page).to have_content 'Welcome'
  end

  it "should display the events page" do
    visit '/events'
    expect(page).to have_content 'Events'
  end

  it "should display the page" do
    visit '/news'
    expect(page).to have_content 'News'
  end

  it "should display the contact page" do
    visit '/contact'
    expect(page).to have_content 'Princes Street'
  end
end