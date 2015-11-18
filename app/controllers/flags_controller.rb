require 'rmagick'
require 'open3'
class FlagsController < ApplicationController
  include Magick

  def choose
    @flags = JSON.parse(File.read(Rails.root.join("lib/flags/countries.json")))
  end

  def chosen
    cookies[:flag_name] = params[:name]
    head :ok
  end

  def preview
    koala = Koala::Facebook::API.new(current_user.oauth_token)
    picture_url = koala.get_picture("me", type: "large")
    flag_path = valid_flag_name(params[:flag_name])
    profile_image = Magick::Image.from_blob(Faraday.get(picture_url).body).first
    overlay_image = Magick::Image.from_blob(File.read(flag_path)).first
    overlay_image.resize!(profile_image.columns, profile_image.rows)
    overlay_image.background_color = "none"
    overlay_image.opacity = Magick::QuantumRange / 2
    composited = profile_image.composite(overlay_image, 0, 0, Magick::OverCompositeOp)
    @preview_image = Base64.encode64(composited.to_blob)
  end

  def create(params)
    picture_params["image"]
  end

  def picture_params
    picture_64 = params.permit!("image")
  end

  def valid_flag_name(flag_name)
    flag_path = Rails.root.join('app/assets/images/flags/' + flag_name.downcase + '.png')
    File.exists?(flag_path) && flag_path.to_s
  end
end
