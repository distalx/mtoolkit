mtoolkit
========

Meteor toolkit

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mtoolkit.svg)](https://npmjs.org/package/mtoolkit)
[![Downloads/week](https://img.shields.io/npm/dw/mtoolkit.svg)](https://npmjs.org/package/mtoolkit)
[![License](https://img.shields.io/npm/l/mtoolkit.svg)](https://github.com/node/mtoolkit/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mtoolkit
$ mtk COMMAND
running command...
$ mtk (-v|--version|version)
mtoolkit/0.0.2 linux-x64 node-v16.7.0
$ mtk --help [COMMAND]
USAGE
  $ mtk COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mtk help [COMMAND]`](#mtk-help-command)
* [`mtk init [FILE]`](#mtk-init-file)
* [`mtk t T_NAME [T_NS]`](#mtk-t-t_name-t_ns)

## `mtk help [COMMAND]`

display help for mtk

```
USAGE
  $ mtk help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `mtk init [FILE]`

describe the command here

```
USAGE
  $ mtk init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/distalx/mtoolkit/blob/v0.0.2/src/commands/init.ts)_

## `mtk t T_NAME [T_NS]`

create a template

```
USAGE
  $ mtk t T_NAME [T_NS]

ARGUMENTS
  T_NAME  template name
  T_NS    template namespace

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/t.ts](https://github.com/distalx/mtoolkit/blob/v0.0.2/src/commands/t.ts)_
<!-- commandsstop -->
