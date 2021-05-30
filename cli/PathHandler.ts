#!/usr/bin/env node
declare function require(name:string);
const chalk = require("chalk");
const fs = require('fs');
const scanf = require('scanf');
const { execSync } = require("child_process");

let cleanPath = (path:string):string =>{
    path = path.replace(/(^\s+)|(\s+$)/g,""); //clean whiteSpace at the begining and the end
    path = path.replace("\n","");
    return path;
}
let pwdQuery = ():string =>{
    let res = execSync("pwd").toString();
    if(res.includes("\n"))
        res = cleanPath(res);
    return res;
}

class FileHandler {

    root: string;
    currentPath: string;
    fileExt: string | null;
    sumFileModified: number

    constructor(root: string, fileExt?: string) {

        if(this.isRelativePath(root)){
            root = this.absolutePathConverter(root);
        }
        this.root = this.currentPath = root;
        this.fileExt = fileExt ? fileExt : null;
        this.sumFileModified = 0;
    }

    isRelativePath = (root:string):boolean =>{
        return root.startsWith(".");
    }

    absolutePathConverter = (root:string):string =>{
        let fullPath:any = pwdQuery().split("/");
        let arrPath = root.split("/");
        let stepNum = arrPath.filter((el) => el === ".."  ).length; 
        if(stepNum > 0){
            fullPath = fullPath.slice(1,stepNum * (-1));
        }
        fullPath.push(
            arrPath.filter((el) => el !== ".." && el !== "." )
                   .map(el =>  el)
                   );
        fullPath = fullPath.flat().join("/");
        return "/".concat(fullPath);
    }
    getFile = ():string[] => {
        return fs.readdirSync(this.currentPath, { withFileTypes: true })
            .filter((dirent: any) => dirent.isFile())
            .map((dirent: any) => dirent.name);
    }

    getDirectory = (): string[] => {
        return fs.readdirSync(this.currentPath, { withFileTypes: true })
            .filter((dirent: any) => dirent.isDirectory())
            .map((dirent: any) => dirent.name);
    }
    findFile = (fileName:string) =>{
        return execSync(`find ${this.root} -name ${fileName}`).toString();
    }
    writeFile = (path: string, data: string): void => {
        fs.appendFileSync(path, data);
    }

    getCurrentPath = (): string => {
        return this.currentPath;
    }
    setCurrentPath = (link: string) => {
        this.currentPath = link;
    }

    getRoot = (): string => {
        return this.root;
    }

    setRoot = (link: string) => {
        this.root = link;
    }
    setSumFileModified = (num:number):void =>{
        this.sumFileModified = num;
    }
    getSumFileModified = ():number =>{
        return this.sumFileModified;
    }
    isvalidExt = (file: any): boolean => {
        let res = file.split('.').pop()
        return file.split('.')
            .pop()
            .endsWith(this.fileExt ? this.fileExt : '');
    }

    isEmptyFiles = (): boolean => {
        return this.getFile().length > 0;
    }
    isEmptyDir = (): boolean => {
        return this.getDirectory().length > 0;
    }

    writePathToFile = (varName: string, path: string | undefined, file?: string): void => {
        path = path ? path : this.root;
        file ? 
        this.writeFile(path + "/" + file,`let ${varName + " = '" + (path) + "/" + file + "';"}`)
            :
        this.writeFile(path,`let ${varName}  = '${path}';`);
    }
    printSumFileModified = (): void => {
        console.log(chalk.green.bold(`${this.sumFileModified} file/s has been modified`));
        this.sumFileModified = 0;
    }

    addPathRecursively = (varName: string, path?: string): void => {
        path = path ? path : this.root;

        //add Path to the file with the right extension
        this.getFile()
            .filter(file => this.isvalidExt(file))
            .forEach(file => {
                this.writePathToFile(varName, path, file);
                this.sumFileModified++;
            });
        //continue recursively to the other directory
        this.getDirectory()
            .forEach((dir) => {
                this.currentPath = `${path}/${dir}`;
                this.addPathRecursively(varName, this.currentPath);
            });
        //reset the currentPath 
        this.currentPath = this.root;
        
    }
}


//Interface
let root, fileToChange,ext;
let args = process.argv.slice(2);
let greeting = "Hello! \nWelcome to PathHandler! \nPlease choose the action you want to perform : \n\n"
console.log(chalk.white.bold(greeting));
console.log("1.Add path recursively to files from a source \n\n2.Add path to specific file.(should be in the same directory)\n\n3.Add path to all the current directory files\n\n ");
let choice = scanf("%d");
switch (choice) {
    case 1:
        if(args[0] == null){
             console.log("submit a root directory link : ");
             root = scanf("%s");
             if(root == null)
                root= pwdQuery();
        }else{
            root = args[0];
        }
        break;
    case 2:
        console.log("Which file ?");
        fileToChange = scanf("%s");
    case 3:
        root = pwdQuery();
        break;
    default:
        console.log(chalk.red.bold('wrong choice! \nTry Again!'));
}
if(choice === 3 || choice === 1){
    console.log("Input extension file you want to work with :(press enter to all files)")
    ext = scanf("%s");
}
let fileHandler = new FileHandler(root, ext);

if(choice  === 1){
    fileHandler.addPathRecursively("test");
    fileHandler.printSumFileModified();
}
    
if(choice === 2){
 let absolutePath = cleanPath(fileHandler.findFile(fileToChange));
 fileHandler.writePathToFile("test",absolutePath);
}
if(choice === 3){
    fileHandler
    .getFile()
    .filter(file => fileHandler.isvalidExt(file))
    .forEach(file => {
        fileHandler.setSumFileModified(fileHandler.getSumFileModified() + 1);
        fileHandler.writePathToFile("test",fileHandler.getRoot(), file);
    });
    fileHandler.printSumFileModified();
}