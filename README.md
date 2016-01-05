<div id="badges" align="center"></div>

# docker-simple-faye

## Docker container for a simple Faye server implementation

### What is docker-simple-faye?

This is a minimal implementation of a Faye messaging server; no logging or authentication is performed by default, so **this should not be considered suitable for production use**.

### Installation

`docker pull radify/simple-faye`

### Usage

Either run the container directly, or use it as part of your `docker-compose` application. By default, the Faye server will be mounted at `ws://<address>:8000/`.

- The mount point may be changed from the default of `/` by setting the `FAYE_MOUNT_POINT` environment variable
- The listen port may be changed from the default of `8000` by setting the `FAYE_PORT` environment variable

### Changelog

This project adheres to [Semantic Versioning](http://semver.org/). For a list of detailed changes, please refer to [CHANGELOG.md](CHANGELOG.md).

### Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

### License

docker-simple-faye is released under the [BSD 3-clause “New” License](LICENSE).
