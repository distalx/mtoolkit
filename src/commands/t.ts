import { Command, flags } from '@oclif/command';
import * as chalk from 'chalk';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const _template = require('../templates/t.js');

const file_exists = async (t_list: any) => {
  let result: boolean[] = [];

  for (const [key, value] of Object.entries(t_list)) {
    result.push(fs.existsSync(value));
  }
  return result;
};

export default class T extends Command {
  static description = 'create a template';

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [
    { name: 't_name', required: true, description: 'template name' },
    { name: 't_ns', required: false, description: 'template namespace' },
  ];

  async run() {
    const { args, flags } = this.parse(T);

    const { t_name, t_ns } = args;
    // check if `template name` is provided.
    if (t_name == undefined) {
      this.error('please provide a valid template name');
    }

    // todo : check if `template namespace` is valid or not

    // generate template list and template path
    let t_list: any, t_path: string;
    if (t_ns == undefined) {
      t_list = {
        html: `client/template/${t_name}/${t_name}.html`,
        js: `client/template/${t_name}/${t_name}.js`,
      };
      t_path = `client/template/${t_name}`;
    } else {
      t_list = {
        html: `client/template/${t_ns}/${t_name}.html`,
        js: `client/template/${t_ns}/${t_name}.js`,
      };

      t_path = `client/template/${t_ns}`;
    }

    const result = await file_exists(t_list);
    if (result.some((item: boolean) => item == true)) {
      this.error('file already exists!');
    }

    // prompt user about new file information
    this.log(`The following list of files will be created:`);

    for (const [key, value] of Object.entries(t_list)) {
      this.log(chalk.green(value));
    }

    // ask for confirmation
    const response: any = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'continue',
        message: 'Are you sure you wish to continue?',
        choices: 'Y/n',
        default: 'Y',
      },
    ]);

    // todo: why err?
    const { continue: boolean } = response;

    // exit if user declines.
    if (!response.continue) {
      return;
    }

    // create template directory if not available .
    fs.mkdir(t_path, { recursive: true }, (err: any) => {
      if (err) {
        return this.error(err);
      }
      this.log('Directory created successfully!');

      // generate template files.
      for (const [key, value] of Object.entries(t_list)) {
        const content = _template[key](t_name);
        fs.writeFile(value, content, (err: any) => {
          if (err) throw this.error(err);
          console.log('Created file: ', value);
          return true;
        });
      }
    });
  }
}
