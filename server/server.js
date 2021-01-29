require('./config/config')
const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors());

app.get('/', function (req, res) {
  res.send('Hi bro from Backend of Christian wtsp?')
})

app.get('/api-portfolio/', function (req, res) {
    let response = {
        name:"Christian Escobar",
        intro:'Hola! soy Ingeniero Informatico titulado en Duoc UC, dentro de mis habilidades esta ser una persona proactiva, analitica, y lider en equipos de trabajo. Actualmente estoy en busca de desafíos, en donde pueda desarrollarme de manera más profesional y siempre con las ganas de aprender.',
        correo:"ch.escobarf@outlook.com",
        socials: [
            {
                nombre:"linkedin",
                link:"https://www.linkedin.com/in/ch-escobarf/",
                img:` <i class="fab fa-linkedin-in"></i> `
            },
            {
                nombre:"gitlab",
                link:"https://gitlab.com/ch.escobarf",
                img:` <i class="fab fa-gitlab"></i> `
            },
            {
                nombre:"github",
                link:"https://github.com/chescobarf",
                img:` <i class="fab fa-github"></i>  `
            },
            {
                nombre:"whatsapp",
                link:"https://api.whatsapp.com/send?phone=56977031115",
                img:` <i class="fab fa-whatsapp"></i>`
            }
        ],
        experiencia: [
         {
             empresa:"Scotiabank Chile",
             cargo:"Analista de Calidad Practicante",
             fecha:"Enero 2019 - Febrero 2019",
             descripcion:`Practicante en el departamento de calidad de la información del área de finanzas.
             Donde estaba a cargo de le generacion de reporteria en base a consultas a bases de datos SQL SERVER, programacion de PLSQL y migracion de datos mendiante ETL`,
             link:"https://www.scotiabankchile.cl/"
         },
         {
            empresa:"Rompecabeza Digital",
            cargo:"Front End Developer",
            fecha:"Mayo 2020 - Presente",
            descripcion:`Trainee en celula de innovacion digital, donde junto a un equipo multidiciplinario buscamos nuevas posibilidades de negocios para los clientes de la agencia, analizando perfomance de sus sitios y posibilidades de como mejorarlos para un mejor posicionamiento. `,
            link:"https://www.rompecabeza.cl/"
         }   
        ],
        educacion:[
            {
                lugar:"Instituto Profesional Duoc UC",
                titulo:"Ingenieria En Informatica",
                fecha:"Marzo 2016 - Diciembre 2019",
                descripcion:"Titulado como Ingeniero en Informatica"
            }
        ],
        habilidades:{
            versionamiento:
            [
                "git-alt",
                "github",
                "gitlab"
            ],
            front:[
                "html5",
                "css3-alt",
                "js-square",
                "sass",
                "react",
                "vuejs",
            ],
            back:[
                "node",
                "php"
            ],
            database:[
                "MySQL",
                "SQL SERVER"
            ],
            extras:[
                "npm",
                "hubspot",
                "shopify",
                "wordpress",
                "trello"
            ]
        },
        proyectos:[
            {title:"Administrador de Pacientes",
             descripcion:`Creador de citas para clinica veterinaria, con almacenamiento de estas en Local Storage
             Realizado Con React`,
             img:`https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Imgs%2FSrc%2FscreenshotGood.png?alt=media&token=615de56d-bc54-4127-bccf-a4ace68a48eb`
            },
            {title:"Cotizador de Prestamos",
             descripcion:`Cotizador de prestamos, en base a un interes fijado por codigo segun cantidad y tiempo
             Realizado Con React`,
             img:`https://firebasestorage.googleapis.com/v0/b/christian-escobar.appspot.com/o/Imgs%2FSrc%2Fscreenshot2Good.png?alt=media&token=b7b5cf5d-1b37-4097-92de-a64057fe2e83`
            }
        ],
        interes:{
            descripcion:`Me gusta mucho el mundo de la tecnologia, me gusta mucho aprender sobre cosas nuevas, generalmente siempre ando viendo videos, haciendo cursos, o leyendo algun articulo sobre las nuevas tecnologias de desarrollo, frameworks, lenguajes,etc.
            Actualmente estoy haciendo cursos para mejorar en JS y aprender React JS.
            
            Ademas de todo eso, soy muy fan de los videojuegos, ver series, anime, peliculas, etc.
            Tambien hago algo de deporte, si tengo tiempo libre me gusta mucho andar en bicicleta siento que es muy bueno para despejarse al sentir el viento chocando en la cara, por otra parte a veces juego futbolito si bien no soy el mejor me entretengo mucho jajaja. `,
            img:[
                ` <i class="fas fa-laptop"></i> `,
                ` <i class="fas fa-gamepad"></i> `,
            ]
        },
        certificaciones:
        [
            'Google Analytics For Beginners',
            'Introduccion Al Desarrollo Web II',
            'Fundamentos Git Y Github',
            'Pug Desde Cero',
            'Kanban Comprendelo Facilmente'
        ]


    }
    res.send(response)
  }) 



app.listen(process.env.PORT), ()=>{
    console.log("Listening of port "+process.env.PORT)
}