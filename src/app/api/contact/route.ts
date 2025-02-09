import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Logging inicial
  console.log('Variables de entorno:', {
    emailUser: process.env.EMAIL_USER ? 'Definido' : 'No definido',
    emailPass: process.env.EMAIL_PASS ? 'Definido' : 'No definido'
  });

  try {
    const data = await request.json();
    console.log('Datos recibidos:', data);

    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Faltan credenciales de email en variables de entorno');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true // Habilitar logs de debug
    });

    // Verificar la conexión antes de enviar
    try {
      await transporter.verify();
      console.log('Conexión verificada correctamente');
    } catch (verifyError) {
      console.error('Error en la verificación:', verifyError);
      throw verifyError;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo contacto de ${data.firstname} ${data.lastname}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.firstname} ${data.lastname}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phonePrefix} ${data.phoneNumber}</p>
        <p><strong>Tipo de proyecto:</strong> ${data.projectType}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Mensaje enviado:', info.messageId);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    // Log detallado del error
    console.error('Error completo:', error);
    
    return NextResponse.json(
      { 
        message: 'Error al enviar el email', 
        error: error instanceof Error ? error.message : 'Error desconocido',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}