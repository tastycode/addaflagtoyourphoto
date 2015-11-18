OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '447582535441977', '929626f21254f0e58b1f74625da4e268'
end
