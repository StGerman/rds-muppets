require 'pathname'

ROOT_PATH = Pathname.new('../..').expand_path(__FILE__)
PID_PATH  = ROOT_PATH.join('tmp/pids')
LOG_PATH  = ROOT_PATH.join('log')

RBENV_VERSION = File.read("#{ROOT_PATH}/.ruby-version").strip

Eye.config do
  logger LOG_PATH.join('eye.log').to_s
end

Eye.application 'muppets' do
  working_dir ROOT_PATH.to_s

  load_env '.env'

  env('RAILS_ENV'     => env['RAILS_ENV'] || 'development',
      'RBENV_ROOT'    => '~/.rbenv/',
      'RBENV_VERSION' => RBENV_VERSION,
      'BUNDLE_GEMFILE' => "#{ROOT_PATH}/Gemfile")

  process :unicorn do
    pid_file PID_PATH.join('unicorn.pid').to_s
    stdall LOG_PATH.join('unicorn.log').to_s

    daemonize true

    start_command "bundle exec unicorn -c #{ROOT_PATH}/config/unicorn.rb -E production"

    # http://unicorn.bogomips.org/SIGNALS.html
    # soft restart
    restart_command 'kill -USR2 {PID}'
    # stop signals:
    stop_signals [:TERM, 10.seconds]

    start_grace 30.seconds
    stop_grace 5.seconds
    restart_grace 10.seconds

    monitor_children do
      stop_command 'kill -QUIT {PID}'
    end
  end
end
