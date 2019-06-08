import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class SalaService {
    constructor(private db:AngularFireDatabase){

    }

    icones = [
        'logo-html5',
        'logo-css3',
        'logo-javascript',
        'logo-angular',
        'logo-nodejs',
        'ionic',
        'appstore',
        'at',
        'beer',
        'bug',
        'logo-skype',
        'logo-snapchat'
    ];

    salas = [
        {
            id: '1',
            nome: 'Cinema',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Olá! :)'
            }],
            usuarios: []
        },
        {
            id: '2',
            nome: 'Curiosidades',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Olá! :)'
            }],
            usuarios: []
        },
        {
            id: '3',
            nome: 'Esportes',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT'
                },
                texto: 'Olá! :)'
            }],
            usuarios: []
        }
    ];

    nomeNaSala(nome, sala) {
        let a = this.salas[sala.id].usuarios.some(e => e.nome == nome);
        console.log(a)
        return a;
    }

    addMensagem(usuario, texto, sala){
        this.db.list("/salas/" + sala.$key + "/mensagens/").push({
            usuario: usuario,
            texto: texto
        });
    }

    addUsuario(usuario, sala){
        this.db.list("/salas/" + sala.$key + "/usuarios/").push(usuario);
    }

    
}