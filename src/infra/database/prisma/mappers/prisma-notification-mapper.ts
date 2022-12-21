import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(rawNotification: RawNotification) {
    return new Notification(
      {
        category: rawNotification.category,
        content: new NotificationContent(rawNotification.content),
        recipientId: rawNotification.recipientId,
        readAt: rawNotification.readAt,
        canceledAt: rawNotification.canceledAt,
        createdAt: rawNotification.createdAt,
      },
      rawNotification.id,
    );
  }
}
