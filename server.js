const { response } = require('express')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hi bro from Backend of Christian wtsp?')
})

app.get('/api-portfolio/', function (req, res) {
    let response = {
        intro:'Hola! soy Ingeniero Informatico titulado en Duoc UC, dentro de mis habilidades esta ser una persona proactiva, analitica, y lider en equipos de trabajo. Actualmente estoy en busca de desafíos, en donde pueda desarrollarme de manera más profesional y siempre con las ganas de aprender.',
        correo:"ch.escobarf@outlook.com",
        socials: {
            linkedin: "https://www.linkedin.com/in/ch-escobarf/",
            gitlab:"https://gitlab.com/ch.escobarf",
            github:"https://github.com/chescobarf",
            whatsapp:"https://api.whatsapp.com/send?phone=56977031115"
        },
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
        ]

    }
    res.send(response)
  }) 



app.listen(3000), ()=>{
    console.log("Listening of port 3000")
}