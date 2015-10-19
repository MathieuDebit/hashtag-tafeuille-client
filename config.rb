require 'slim'

Slim::Engine.disable_option_validator!

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :dotenv

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
