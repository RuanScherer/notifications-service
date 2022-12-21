import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { makeNotification } from '@tests/factories/notification-factory';
import { InMemoryNotificationRepository } from '@tests/repositories/in-memory-notifications-repository';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toBe(2);
  });
});
