#!/usr/bin/env node
/*
 * @Author: guo.mk 
 * @Date: 2018-02-12 09:14:25 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-02-12 14:38:37
 */
"use strict";
const command = require("./command");
const packageJson = require("../package.json");

new command(packageJson)
/**
 * 主入口，程序控制
 */
// const fs = require('fs');
// const path = require('path');
// const commander = require('commander');
// const chalk = require('chalk')
// const inquirer = require('inquirer')
// const pkg = require("../package.json");
// const tools = require("./../lib/util");
// const init = [
//   {
//     type: 'list',
//     name: 'module',
//     message: '请选择要执行的模块',
//     choices: [
//       {
//         name: '模块一',
//         value: "1"
//       },
//       {
//         name: '模块二',
//         value: "2"
//       }
//     ]
//   }
// ]
// const program = new commander.Command(pkg.name)
//   .allowUnknownOption()
//   .version("v" + pkg.version)
//   .description("郭明坤实验脚手架")

//   .option('', '')
//   .option('-h, --help', '显示帮助', function () {
//     printLogo();
//     program.help()
//   })
  // .command('*')
  // .description("命令不存在")
  // .action(function () {
  //   printLogo();
  //   console.log('    ' + chalk.red('没有该命令哟，请通过 guo-init -h 查看帮助！'));
  // });
// program.options[0].description="显示版本号"

// program.parse(process.argv);
// if (!program.args.length) {
//   printLogo();
//   program.help()
// };


// function printLogo() {
//   var logoText = fs.readFileSync(path.join('./', 'logo.txt'));
//   console.log(chalk.blue(String(logoText)));
// }
