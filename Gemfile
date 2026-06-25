source "https://rubygems.org"

# Modern, maintained Jekyll. We deploy via GitHub Actions (see
# .github/workflows/pages.yml), which builds with this exact Gemfile — so local
# preview and production stay in version parity. (We intentionally avoid the
# legacy `github-pages` metagem, which pins Jekyll 3.9-era dependencies.)
gem "jekyll", "~> 4.3"

# Plugins
gem "jekyll-seo-tag", "~> 2.8"
gem "jekyll-sitemap", "~> 1.4"

# Local preview server (Ruby 3.x no longer bundles webrick)
gem "webrick", "~> 1.8"

# Timezone data for platforms without a system tz database
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
