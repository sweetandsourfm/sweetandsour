require 'dotenv/load'
# Reload the browser automatically whenever files change
activate :livereload

###
# Compass
###
compass_config do |config|
  config.output_style = :compressed
end

###
# Helpers
###
helpers do
  def get_url
    absolute_prefix + url_prefix
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
activate :directory_indexes

config[:access_token] = ENV['ACCESS_TOKEN']
config[:client_id] = ENV['CLIENT_ID']

# Build-specific configuration
configure :build do
  page "/", :layout => "index.scss"
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  data.episodes.episodes.each_with_index do |episode, index|
    proxy "/episodes/#{index}.html", "/episode.html", :locals => { 
      :episode_num => index,
      :episode_name => episode.name,
      :episode_link => episode.link,
      :episode_description => episode.description,
      :episode_highlights => episode.highlights,
      :episode_notes => episode.notes
      }, :ignore => true
  end

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
