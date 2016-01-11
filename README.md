# Telephone-Directory
telephone book based on MS ActiveDirectory
![folder](https://habrastorage.org/files/4e5/337/cda/4e5337cda41346bdbfc00c8096675eaf.png)

## require
+ [node-webkit](http://nwjs.io/)
+ [activedirectory](https://github.com/gheeres/node-activedirectory)

## usage
1. first of all install [node-webkit](http://nwjs.io/)
2. download and unpack last [release](https://github.com/titulus/Telephone-Directory/releases)
3. install [node-activedirectory](https://github.com/gheeres/node-activedirectory)
4. [configure](#settingsjs)  `settings.js`
5. run `path\to\nw path\to\telephone-directory`

## convert into exe

Use [Web2Executable](https://github.com/jyapayne/Web2Executable).

----
## </a>settings.js
```javascript
module.exports = {
	 dn:"ldap://example.com" // use domain name, domain-controller name or domain-controller IP
	,dc:"cn=users,dc=example,dc=com" //FQDN. you can remove "cn=users," from that field or chose other cn if you want.
	,user:"user" // username with rights to read
	,pass:"password" // password 
    ,groupname: "Employees" // Employees group
};
```