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

# Build-specific configuration
configure :build do
  page "/article", :layout => "story.scss"
  page "/", :layout => "index.scss"
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  data.entry.results.each do |entry|
    proxy "/story/#{entry.slug}.html", "/story.html", :locals => { 
      :entry_name => entry.subject,
      :entry_author => entry.author,
      :entry_pullquote => entry.pullquote,
      :entry_media => entry.media,
      :entry_body => entry.entryText,
      :entry_recs => entry.recs
      }, :ignore => true
  end

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
