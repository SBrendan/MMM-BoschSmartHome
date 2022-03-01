export type Config = {
  mocked: boolean
  debug: boolean
  host: string
  name: string
  identifier: string
  password: string
  width: string
  hideComponents: any
  roomOrder: string[]
  refreshIntervalInSeconds: number
  displayRoomIcons: boolean
  temperatureLevel: TemperatureLevelConfig
  airquality: AirqualityConfig
  thermostats: ThermostatsConfig
}

type TemperatureLevelConfig = {
  displayCurrentTemperature: boolean
  displayTargetTemperature: boolean
  forceRowTile: boolean
}

type ThermostatsConfig = {
  display: boolean
  displayName: boolean
}

type AirqualityConfig = {
  purity: string
  humidity: string
  temperature: string
  preferredTemperatureProvider: string
  preferredHumidityProvider: string
}
