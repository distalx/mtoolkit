import {Command, flags} from '@oclif/command'
const fs = require('fs');

export default class Init extends Command {
  static description = 'Initialize mtoolkit config'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Init)

    // TODO: check if the pwd is a meteor project or not by looking for `.meteor` directory.

    // generate mtk config file. mtoolkit.json
    const file_name = `mtoolkit.json`;
    
    const content = `{
  "directory_structure": "classic",
  "view_layer": "blaze",
  "tamplate_path": "client/templates",
  "collection_path": "both/collections",
  "method_path": "server",
  "publication_path": "server"
}`
    
    fs.writeFile( file_name, content, (err: any) => {
      if (err) throw this.error(err);
      this.log('Created file: ', file_name);
      return true;
    });



  }
}
