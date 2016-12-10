# config valid only for current version of Capistrano
lock '3.6.1'

set :application, 'muppets'
set :repo_url, 'git@github.com:StGerman/rds-muppets.git'

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/striphack/app'

# Default value for :format is :airbrussh.
set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, '.env'
# set :linked_files, fetch(:linked_files, []) + %w(.env.local)

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'
# set :linked_dirs, fetch(:linked_dirs, []) + %w(log tmp/pids vendor/bundle public/assets)
# TODO: If future we will switch to store assets on webdav
# but now this directory will grow with every release

# Default value for default_env is {}
set :default_env, { path: "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH" }

set :ssh_options, forward_agent: true

set :rbenv_type, :user
set :rbenv_ruby, File.read('.ruby-version').strip
# append :rbenv_map_bins, 'rake', 'gem', 'bundle', 'ruby', 'rails'
# append :bundle_bins, 'eye'

set :eye_env, -> { { rails_env: fetch(:rails_env) } }
set :eye_config, -> { "#{current_path}/config/eye.rb" }
set :eye_application, fetch(:application)

# Default value for keep_releases is 5
set :keep_releases, 30
