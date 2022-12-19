import { Notification } from '@application/entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
