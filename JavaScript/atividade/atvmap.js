function getAdmin(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins

}

const usuarios = new   Map();

usuarios.set('allan', 'Admin');
usuarios.set('guga', 'Admin');
usuarios.set('vitor', 'Admin');
usuarios.set('Bruno', 'Usuario');
console.log(getAdmin(usuarios));