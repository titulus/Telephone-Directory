module.exports = {
     dn:"ldap://example.com" // use domain name, domain-controller name or domain-controller IP
    ,dc:"dc=example,dc=com" //you can remove "cn=users," from that field or chose other cn if you want.
    ,user:"username" // username with rights to read
    ,pass:"password" // password
    ,groupname: "Employees" // Employees group
};