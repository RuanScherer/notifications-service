import { CancelNotification } from '@application/use-cases/cancel-notification';
import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found';
import { makeNotification } from '@tests/factories/notification-factory';
import { InMemoryNotificationRepository } from '@tests/repositories/in-memory-notifications-repository';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = makeNotification();
    await notificationRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].canceledAt).toBeTruthy();
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
