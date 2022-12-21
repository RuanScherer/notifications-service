import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found';
import { ReadNotification } from '@application/use-cases/read-notification';
import { makeNotification } from '@tests/factories/notification-factory';
import { InMemoryNotificationRepository } from '@tests/repositories/in-memory-notifications-repository';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    const notification = makeNotification();
    await notificationRepository.create(notification);

    await readNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].readAt).toBeTruthy();
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
