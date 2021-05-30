#!/usr/bin/env node

const fs = require('fs');

export class FileHandler {
    root: string;
    currentPath:string;
    fileExt: string | null;

    constructor(mainRoot: string,ext?: string) {
        this.root = this.currentPath = mainRoot;
        this.fileExt = ext ? ext : null;
    }
    getFile = (): string[] => {
        return fs.readdirSync(this.currentPath, { withFileTypes: true })
            .filter((dirent:any) => dirent.isFile())
            .map((dirent:any) => dirent.name);
    }
    getDirectory = (): string[] => {
        return fs.readdirSync(this.currentPath, { withFileTypes: true })
            .filter((dirent:any) => dirent.isDirectory())
            .map((dirent:any) => dirent.name);
    }
    writeFile = (path: string,data: string): void => {
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
    validExt = (file:any):boolean =>{
        return file
              .split('.')
              .pop()
              .endsWith(this.fileExt ? this.fileExt : '' ) || false;
    }
    isEmptyFiles = ():boolean =>{
        return this.getFile().length > 0;
    }
    isEmptyDir = ():boolean =>{
        return this.getDirectory().length > 0;
    }
    addPathRecursively = (data:string,path?:string):void =>{
        path = path ? path : this.root;
        
        //add Path to the file with the right extension
        this.getFile()
        .filter(file => this.validExt(file))
        .forEach(file => {
            this.writeFile(`let ${data} = '${path+"/"+file}';`,path+"/"+file) 
        });
        //continue recursively to the other directory
        this.getDirectory()
        .forEach((dir)=>{
            this.currentPath = `${path}/${dir}`;
            this.addPathRecursively(data,this.currentPath);
        });

    }
}
let fileHandler = new FileHandler('./src','tsx');
let data = `langPath`;
fileHandler.addPathRecursively(data);
