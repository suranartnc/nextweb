#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let inquirer = require('inquirer')
let _ = require('lodash')
var validate = require('validate-npm-package-name')
const displayedCommand = 'npm'
const packageJson = require('../../package.json')

let appName = process.argv[2]

const question = [
  {
    type: 'input',
    name: 'project_name',
    message: 'what is your project named?',
  },
]

function validateNpmName(name) {
  const nameValidation = validate(name)
  if (nameValidation.validForNewPackages) {
    return { valid: true }
  }
  return {
    valid: false,
    problems: [
      ...(nameValidation.errors || []),
      ...(nameValidation.warnings || []),
    ],
  }
}

async function main() {
  const validation = validateNpmName(appName)
  if (appName) {
    if (validation.valid) {
      createNextApp(appName)
    } else {
      displayNpmNameError(appName)
    }
  } else {
    inquirer.prompt(question).then(answers => {
      if (answers.project_name) {
        if (validateNpmName(answers.project_name).valid) {
          createNextApp(answers.project_name)
        } else {
          displayNpmNameError(answers.project_name)
        }
      } else {
        console.log(colors.red('Please spacify name'))
      }
    })
  }
}

function displayNpmNameError(name) {
  return console.log(colors.red('ERROR! ') + validateNpmName(name).problems[0])
}

function createNextApp(project_name) {
  const root = `${process.cwd()}/${project_name}`

  const PACKAGE_JSON = _.merge(packageJson, {
    name: project_name,
  })
  console.log(`Creating a new NextWeb app in ${colors.green(root)}.`)

  shell.exec(`cp -r ../../.vscode ${project_name}`)
  shell.exec(`cp -r ../../api ${project_name}`)
  shell.exec(`cp -r ../../src ${project_name}`)
  shell.exec(`cp -r ../../.babelrc ${project_name}`)
  shell.exec(`cp -r ../../.editorconfig ${project_name}`)
  shell.exec(`cp -r ../../.env.default ${project_name}`)
  shell.exec(`cp -r ../../.eslintrc.json ${project_name}`)
  shell.exec(`cp -r ../../.gitignore ${project_name}`)
  shell.exec(`cp -r ../../jsconfig.json ${project_name}`)
  shell.exec(`cp -r ../../yarn.lock ${project_name}`)

  shell.exec(`cd ${project_name}`)
  fs.writeFile('xxx.json', JSON.stringify(PACKAGE_JSON, null, 2), () => null)
  shell.exec(
    `mv ${process.cwd()}/xxx.json ${process.cwd()}/${project_name}/package.json`,
  )
  console.log()
  shell.exec('npm install')
  console.log('Installing packages. This might take a couple of minutes.')
  console.log()

  console.log(`${colors.green('Success!')} Created ${project_name} at ${root}`)
  console.log('Inside that directory, you can run several commands:')
  console.log()
  console.log(colors.cyan(`  ${displayedCommand} run dev`))
  console.log('    Starts the development server.')
  console.log()
  console.log(colors.cyan(`  ${displayedCommand} run build`))
  console.log('    Builds the app for production.')
  console.log()
  console.log(colors.cyan(`  ${displayedCommand} start`))
  console.log('    Runs the built app in production mode.')
  console.log()
  console.log('We suggest that you begin by typing:')
  console.log()
  console.log(colors.cyan('  cd'), project_name)
  console.log(`  ${colors.cyan(`${displayedCommand} install`)}`)
  console.log(`  ${colors.cyan(`${displayedCommand} run dev`)}`)
  console.log()
}

main()
