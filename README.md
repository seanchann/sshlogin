
[![Version](https://vsmarketplacebadge.apphb.com/version/seanchann.sshlogin.svg)](https://marketplace.visualstudio.com/items?itemName=seanchann.sshlogin)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/seanchann.sshlogin.svg)](https://marketplace.visualstudio.com/items?itemName=seanchann.sshlogin)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/seanchann.sshlogin.svg)](https://marketplace.visualstudio.com/items?itemName=seanchann.sshlogin)

# sshlogin

A package that implements auto login with ssh to remote server feature for VSCode.

## Features

you can execute `sshlogin` in vscode. Choose a remote host and log on, will auto open a terminal.

## Extension Settings

You need to configure a `sshlogin.connection` that is required to connect to a remote server.

- name: the name of configuration, it will be show when you execute `sshlogin` in vscode.
- user: the login name.
- host: the hostname of remote server.
- port: the port of ssh service.
- pubkeyfile: what public key use for ssh connection.

example:

```text
"sshlogin.connection": [{
    "name": "test1",
    "user": "seanchann",
    "host": "test1",
    "port": 22,
    "pubkeyfile": "~/.ssh/id_rsa.pub"
}]
```

## Known Issues

- Because can not get to the terminal output, so use password to login not support.

## Change log

You can checkout all our changes in our [change log](https://github.com/seanchann/sshlogin/blob/master/CHANGELOG.md).

## Versioning

sshlogin follows [Semantic Versioning 2.0.0](http://semver.org/).

**Enjoy!**