import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { NotificationRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common/decorators';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}
