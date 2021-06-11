const amqp = require("amqplib");

const msg = { number: 2 };

async function connect() {
  try {
    const conn = await amqp.connect("amqp://localhost:5672");
    const channel = await conn.createChannel();
    const res = await channel.assertQueue("jobs");
    channel.consume("jobs", (message) => {
      const msg = JSON.parse(message.content.toString());
      console.log(`received job with message: "${msg.data}"`);
      channel.ack(message);
    });
  } catch (e) {
    console.error(e);
  }
}

connect();
