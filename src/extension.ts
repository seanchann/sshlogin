'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import config from './config';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "sshlogin" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sshlogin', () => {

        let config = vscode.workspace.getConfiguration('sshlogin');

        const connections = config.get<config[]>('connection');

        console.log('exec connection ' + connections.length);
        let choise: string[] = [];
        let choiseMap: { [key: string]: config } = {};
        for (let index = 0; index < connections.length; index++) {
            choise[index] = connections[index].name;
            choiseMap[connections[index].name] = connections[index];
        }


        const chosen = vscode.window.showQuickPick(choise);
        if (!chosen) {
            vscode.window.showInformationMessage("You need to specify a connection configuration");
            return null;
        }
        chosen.then(val => {
            if (choiseMap[val]) {
                const terminal = vscode.window.createTerminal();
                terminal.show();
                let command = "ssh " + "-i " + choiseMap[val].pubkeyfile + " " + choiseMap[val].user + "@" + choiseMap[val].host + " -p " + choiseMap[val].port;

                terminal.sendText(command);
            }
        });

    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}