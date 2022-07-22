import cron from 'node-cron';

export default cron.schedule('* * * * *', () => {
  console.log(`Task is running every minute ${new Date()}`);
});
