# employee-cli
Simple command line interface app for storing employee information.
Uses MongoDB, commander.js, inquirer.js,

![](https://raw.githubusercontent.com/karanwadhwa/employee-cli/master/gif/employee-cli.gif)

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Create Symlink

```sh
$ npm link
```

### Commands

Help

```sh
$ employee-cli --help
```

List Employees
```sh
$ employee-cli list
or
$ employee-cli l
```

Find Employees
```sh
$ employee-cli find [NAME]
or
$ employee-cli f [NAME]
```

Add Employee
```sh
$ employee-cli add
or
$ employee-cli a
```

Update Employee
```sh
$ employee-cli update [_ID]
or
$ employee-cli u [_ID]
```

Remove Employee (remove or r)
```sh
$ employee-cli remove [_ID]
or
$ employee-cli r [_ID]
```

## App Info

### Author

[Karan Wadhwa](https://karanwadhwa.github.io/)

### Version

1.0.0