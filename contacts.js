const fs = require('node:fs');
const chalk = require('chalk');

// membuat folder data kalau gak ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json kalau gak ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama,email,noHp) => {
    const contact = {nama, email, noHp};
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);

    //cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat){
        console.log(
            chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!')
        );
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
    console.log('Terima kasih sudah memasukkan data anda');

};

module.exports = {simpanContact};