import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});
