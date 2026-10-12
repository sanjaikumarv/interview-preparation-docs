/* 1. Products */
class EmailNotification {
  send(message) {
    console.log(`Email: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`SMS: ${message}`);
  }
}

/* 2. Creator */
class NotificationFactory {
  createNotification() {
    throw new Error("Method must be implemented");
  }

  notify(message) {
    const notification = this.createNotification();
    notification.send(message);
  }
}

/* 3. Concrete Creators */
class EmailNotificationFactory extends NotificationFactory {
  createNotification() {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification() {
    return new SMSNotification();
  }
}

/* 4. Client code */
const emailFactory = new EmailNotificationFactory();
emailFactory.notify("Welcome!");

const smsFactory = new SMSNotificationFactory();
smsFactory.notify("Your OTP is 1234");
