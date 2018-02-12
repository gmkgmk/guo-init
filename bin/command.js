/*
 * @Author: guo.mk 
 * @Date: 2018-02-12 14:17:52 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-02-12 16:36:30
 */
const fs = require('fs');
const path = require('path');
const commander = require('commander');
const chalk = require('chalk')
const inquirer = require('inquirer')
const tools = require("./../lib/util");
const child_process = require('child_process');

module.exports = class command {
  constructor(packageJson) {
    this.version = packageJson.version;
    this.name = packageJson.name || name;
    this.inquirer = inquirer;
    this.program = new commander.Command(this.name);
    this.description = "郭明坤实验脚手架";
    this.run()
  }
  run() {
    this.program
      .allowUnknownOption()
      .version(this.version)
      .description(this.description)
    // 执行命令
    this.command_list()
    //执行提醒
    this.help_options()
    this.commad_error()
    this.program.parse(process.argv);

    if (!this.program.args.length) {
      this.printLogo();
      this.program.help()
    };

  }
  command_list() {
    this.commad_init()
    this.commad_build()
    this.commad_update()
    this.commad_newProject()
  }
  commad_build() {
    const action = option => {
      if (option == undefined) {
        this.log("需要一个名称")
        return false
      }
      this.log("编译项目" + res)
    }

    this.program
      .command('build [input]')
      .description("编译项目")
      .action(action)
  }
  help_options() {
    this.program.options.forEach(element => {
      if (element.long === '--version') element.description = "当前版本号";
      if (element.long === '--help') element.description = "当前帮助";
    })
  }
  commad_update() {
    const action = res => {
      this.log("更新项目")
    }

    this.program
      .command('update')
      .description("更新项目")
      .alias("u")
      .on('--help', ()=>{
        this.log('更新已安装的组件')
      })
      .action(action)
  }
  commad_newProject() {
    const action = option => {
      var config = Object.assign({
        name: null,
        description: "guo",
        less: false
      }, option)
      var promps = []
      if (config.moduleName !== 'string') {
        promps.push({
          type: 'input',
          name: 'name',
          message: '请输入模块名称',
          validate: function (input) {
            if (!input) {
              return '不能为空'
            }
            return true
          }
        })
      }
      if (config.description !== 'string') {
        promps.push({
          type: 'input',
          name: 'moduleDescription',
          message: '请输入模块描述'
        })
      }
      if (config.less === false) {
        promps.push({
          type: 'list',
          name: 'less',
          message: '是否开启less处理?(false)',
          choices: [
            {
              name: '是',
              value: "yes"
            },
            {
              name: '否',
              value: "false"
            }
          ]
        })
      }

      this.inquirer.prompt(promps).then((answers) => {
        this.log(chalk.blue(answers))
      })
    }

    this.program
      .command('new <projectName>')
      .description("生成项目")
      .option("-less", '启用less?')
      .action(action)
  }
  commad_init() {
    const init = [
      {
        type: 'list',
        name: 'module',
        message: '请选择要执行的模块',
        choices: [
          {
            name: '模块一',
            value: "1"
          },
          {
            name: '模块二',
            value: "2"
          }
        ]
      }
    ]
    const action = option => {
      this.printLogo();
      this.inquirer.prompt(init).then(answers => {
        const name = tools.currentPath()
        this.log('使用当前目录：' + name);
        this.log(answers)
      })
    }

    this.program
      .command('init')
      .description("初始化一个项目")
      .action(action)
  }
  commad_error() {
    this.program
      .command('*')
      .description("命令不存在")
      .action(() => {
        this, printLogo();
        this.log('    ' + chalk.red('没有该命令哟，请通过 guo-init -h 查看帮助！'));
      });
  }
  /**
   * cosnole.log()前缀
   * @memberof command
   */
  log() {
    const args = Array.from(arguments);
    args[0] = chalk.blue(`[${this.name}] `) + args[0];
    console.log.apply(console, args);
  }
  /**
   * 打印logo
   * @memberof command
   */
  printLogo() {
    const logoText = fs.readFileSync(path.join('./', 'logo.txt'));
    console.log(chalk.blue(String(logoText)));
  }
}
