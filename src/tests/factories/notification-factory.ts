import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new NotificationContent('This is a notification'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
