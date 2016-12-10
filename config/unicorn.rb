app_root = File.expand_path('../..', __FILE__)

working_directory app_root.to_s
pid "#{app_root}/tmp/pids/unicorn.pid"

worker_processes 2
timeout Integer(ENV['UNICORN_TIMEOUT'] || 45)
listen Integer(ENV['RAILS_PORT'] || 8090), reuseport: true

preload_app true

before_fork do |server, worker|
  old_pidfile = "#{server.config[:pid]}.oldbin"

  if File.exist?(old_pidfile) && old_pidfile != server.pid
    begin
      sig = (worker.nr + 1) >= server.worker_processes ? :QUIT : :TTOU
      old_pid = File.read(old_pidfile).to_i
      Process.kill(sig, old_pid)
    rescue Errno::ENOENT, Errno::ESRCH => error
      STDERR << error
    end
  end
end

stderr_path "#{app_root}/log/unicorn.stderr.log"
stdout_path "#{app_root}/log/unicorn.stdout.log"
