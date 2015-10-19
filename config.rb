require 'slim'

Slim::Engine.disable_option_validator!

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :dotenv

activate :react do |config|
  config.harmony = true
  config.strip_types = true
end

after_configuration do
  react_path = File.dirname ::React::Source.bundled_path_for('react.js')
  sprockets.append_path react_path
end

ignore 'javascripts/components/*.jsx'

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
