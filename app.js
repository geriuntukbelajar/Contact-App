const fs = require('node:fs');
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan No Hp anda: ', (noHp) => {
        const contact = {
            nama,
            noHp,
        };
        const file = fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
        console.log('Terima kasih sudah memasukkan data anda');
        rl.close();
    });
});