package config

import "github.com/kelseyhightower/envconfig"

type Config struct {
	Port              string `envconfig:"PORT" default:":4000"`
	DatabaseName      string `envconfig:"DATABASE_NAME" default:"priyome.db"`
	SessionCookieName string `envconfig:"SESSION_COOKIE_NAME" default:"session"`
	EnabledCSP        bool   `envconfig:"ENABLE_CSP" default:"0"`
}

var config Config

func loadConfig() (*Config, error) {
	config := Config{}
	err := envconfig.Process("", &config)
	if err != nil {
		return nil, err
	}

	return &config, nil
}

func MustLoadConfig() *Config {
	config, err := loadConfig()
	if err != nil {
		panic(err)
	}

	return config
}

func CspEnabled() bool {
	return config.EnabledCSP
}
