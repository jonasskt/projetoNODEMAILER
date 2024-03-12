const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express')
const nodemailer = require('nodemailer');
const app = express()



app.get('/send-email', (err, res)=>{
    
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1c7d6c2d9c67a4",
          pass: "6b10b086d1bd8d"
        }
      });
      let message = {
        from: "noreply@jonasvg.com",
        to: "Jonas@noreply.com",
        subject: "Esse é o título",
        text:"O texto de forma normal",
        html: "<h2> O texto em formato HTML<h2> </br> <p> Aqui tbm</p>"
      }

      transport.sendMail(message, (error, resp)=>{
        if (error) throw error
        console.log("Email concluido!")
    })
     
     
     
      return res.json({
        erro: false,
        mensagem: "Email enviado com sucesso!"
      })

    })
    
    
    app.listen(3000, ()=>{
    console.log("Servidor startado!")
})

