const { Generator } = require('codotype-generator');

module.exports = class ReactJsAppCore extends Generator {
  async write({ app }) {
    await this.copyTemplate(
      this.templatePath('app.js'),
      this.destinationPath('src/app.js')
    )
  }
}
