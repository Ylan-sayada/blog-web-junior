#!/usr/bin/env node
var chalk = require("chalk");
var fs = require('fs');
var scanf = require('scanf');
var execSync = require("child_process").execSync;
var cleanPath = function (path) {
    path = path.replace(/(^\s+)|(\s+$)/g, ""); //clean whiteSpace at the begining and the end
    path = path.replace("\n", "");
    return path;
};
var pwdQuery = function () {
    var res = execSync("pwd").toString();
    if (res.includes("\n"))
        res = cleanPath(res);
    return res;
};
var FileHandler = /** @class */ (function () {
    function FileHandler(root, fileExt) {
        var _this = this;
        this.isRelativePath = function (root) {
            return root.startsWith(".");
        };
        this.absolutePathConverter = function (root) {
            var fullPath = pwdQuery().split("/");
            var arrPath = root.split("/");
            var stepNum = arrPath.filter(function (el) { return el === ".."; }).length;
            if (stepNum > 0) {
                fullPath = fullPath.slice(1, stepNum * (-1));
            }
            fullPath.push(arrPath.filter(function (el) { return el !== ".." && el !== "."; })
                .map(function (el) { return el; }));
            fullPath = fullPath.flat().join("/");
            return "/".concat(fullPath);
        };
        this.getFile = function () {
            return fs.readdirSync(_this.currentPath, { withFileTypes: true })
                .filter(function (dirent) { return dirent.isFile(); })
                .map(function (dirent) { return dirent.name; });
        };
        this.getDirectory = function () {
            return fs.readdirSync(_this.currentPath, { withFileTypes: true })
                .filter(function (dirent) { return dirent.isDirectory(); })
                .map(function (dirent) { return dirent.name; });
        };
        this.findFile = function (fileName) {
            return execSync("find " + _this.root + " -name " + fileName).toString();
        };
        this.writeFile = function (path, data) {
            fs.appendFileSync(path, data);
        };
        this.getCurrentPath = function () {
            return _this.currentPath;
        };
        this.setCurrentPath = function (link) {
            _this.currentPath = link;
        };
        this.getRoot = function () {
            return _this.root;
        };
        this.setRoot = function (link) {
            _this.root = link;
        };
        this.setSumFileModified = function (num) {
            _this.sumFileModified = num;
        };
        this.getSumFileModified = function () {
            return _this.sumFileModified;
        };
        this.isvalidExt = function (file) {
            var res = file.split('.').pop();
            return file.split('.')
                .pop()
                .endsWith(_this.fileExt ? _this.fileExt : '');
        };
        this.isEmptyFiles = function () {
            return _this.getFile().length > 0;
        };
        this.isEmptyDir = function () {
            return _this.getDirectory().length > 0;
        };
        this.writePathToFile = function (varName, path, file) {
            path = path ? path : _this.root;
            file ?
                _this.writeFile(path + "/" + file, "let " + (varName + " = '" + (path) + "/" + file + "';"))
                :
                    _this.writeFile(path, "let " + varName + "  = '" + path + "';");
        };
        this.printSumFileModified = function () {
            console.log(chalk.green.bold(_this.sumFileModified + " file/s has been modified"));
            _this.sumFileModified = 0;
        };
        this.addPathRecursively = function (varName, path) {
            path = path ? path : _this.root;
            //add Path to the file with the right extension
            _this.getFile()
                .filter(function (file) { return _this.isvalidExt(file); })
                .forEach(function (file) {
                _this.writePathToFile(varName, path, file);
                _this.sumFileModified++;
            });
            //continue recursively to the other directory
            _this.getDirectory()
                .forEach(function (dir) {
                _this.currentPath = path + "/" + dir;
                _this.addPathRecursively(varName, _this.currentPath);
            });
            //reset the currentPath 
            _this.currentPath = _this.root;
        };
        if (this.isRelativePath(root)) {
            root = this.absolutePathConverter(root);
        }
        this.root = this.currentPath = root;
        this.fileExt = fileExt ? fileExt : null;
        this.sumFileModified = 0;
    }
    return FileHandler;
}());
//Interface
var root, fileToChange, ext;
var args = process.argv.slice(2);
var greeting = "Hello! \nWelcome to PathHandler! \nPlease choose the action you want to perform : \n\n";
console.log(chalk.white.bold(greeting));
console.log("1.Add path recursively to files from a source \n\n2.Add path to specific file.(should be in the same directory)\n\n3.Add path to all the current directory files\n\n ");
var choice = scanf("%d");
switch (choice) {
    case 1:
        if (args[0] == null) {
            console.log("submit a root directory link : ");
            root = scanf("%s");
            if (root == null)
                root = pwdQuery();
        }
        else {
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
if (choice === 3 || choice === 1) {
    console.log("Input extension file you want to work with :(press enter to all files)");
    ext = scanf("%s");
}
var fileHandler = new FileHandler(root, ext);
if (choice === 1) {
    fileHandler.addPathRecursively("test");
    fileHandler.printSumFileModified();
}
if (choice === 2) {
    var absolutePath = cleanPath(fileHandler.findFile(fileToChange));
    fileHandler.writePathToFile("test", absolutePath);
}
if (choice === 3) {
    fileHandler
        .getFile()
        .filter(function (file) { return fileHandler.isvalidExt(file); })
        .forEach(function (file) {
        fileHandler.setSumFileModified(fileHandler.getSumFileModified() + 1);
        fileHandler.writePathToFile("test", fileHandler.getRoot(), file);
    });
    fileHandler.printSumFileModified();
}
