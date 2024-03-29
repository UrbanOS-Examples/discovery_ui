# Deprecated

Use UrbanOS-Public/discovery-ui instead - https://github.com/UrbanOS-Public/discovery_ui


[![Master](https://travis-ci.org/smartcolumbusos/discovery_ui.svg?branch=master)](https://travis-ci.org/smartcolumbusos/discovery_ui)

# discovery_ui

Discovery UI provides Columbus specific branding and navigation controls around the [react-discovery-ui](https://github.com/smartcitiesdata/react_discovery_ui) component. This allows for the base components to be brand agnostic.

## How to use

### Install Dependencies

`npm install`

### Run Unit Tests

`npm run test`

### Run Unit Tests in Watch Mode

`npm run test-watch`

Unit tests will output warnings relate to accessibility. Configurations
are found in `test-start-point.js`

### Lint the Code

`npm run lint`

### Configuration

Runtime configurations are stored in config/config.js.

- API_HOST
  This application is designed to be used with [discovery-api](https://github.com/smartcitiesdata/discovery_api) as the backend. Set this value to the URL of the local `discovery-api` endpoint.

- GTM_ID
  Set this value to the Google Tag Manager ID to enable analytics.

- BASE_URL
  The domain that the site will be hosted on

### Start the UI Locally

`npm run start`

You can view the UI in your web browser at `http://localhost:9001`

### Build Docker Image

`docker build . -t <image name>:<tag>`

### Running the Docker Image

`docker run -d --rm -p <port>:80 <image name>:<tag>`
