const amqp = require("amqplib");

const msg = { data: process.argv[2] };

async function connect() {
  try {
    const conn = await amqp.connect("amqp://localhost:5672");
    const channel = await conn.createChannel();
    const res = await channel.assertQueue("jobs");
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log("Job sent with data !!!" + JSON.stringify(msg));
    // conn.close();
    await channel.close();
    await conn.close();
  } catch (e) {
    console.error(e);
  }
}

connect();
