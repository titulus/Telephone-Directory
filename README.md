# Telephone-Directory
telephone book based on MS ActiveDirectory
## require
+ [node-webkit](http://nwjs.io/)
+ [activedirectory](https://github.com/gheeres/node-activedirectory)

## usage
1. first of all install [node-webkit](http://nwjs.io/)
2. download and unpack last [release](https://github.com/titulus/Telephone-Directory/releases)
3. install [node-activedirectory](https://github.com/gheeres/node-activedirectory)
4. add `private.js` into the source folder
5. run `path\to\nw path\to\telephone-directory`

## convert into exe
1. pack `telephone-directory` folder into `telephone-directory.zip` for example
```bash
7z a telephone-directory.zip path\to\telephone-directory\*
```
2. rename `telephone-directory.zip` into `telephone-directory.nw`
```bash
rename telephone-directory.zip telephone-directory.nw
```
3. do some magic
```bash
copy /b path\to\nw.exe+telephone-directory.nw telephone-directory.exe
```
4. add all files from `node-webkit` folder to the folder contains `telephone-directory.exe` except `nw.exe`

your folder must look like

![folder](https://habrastorage.org/files/c55/375/390/c553753903fc416c8ed2ed6c7392d3a0.png)

----
## private.js
```javascript
module.exports = {
	 dn:"ldap://example.com"
	,dc:"dc=example,dc=com"
	,user:"user"
	,pass:"pass"
};
```