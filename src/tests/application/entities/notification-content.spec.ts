import { NotificationContent } from '@application/entities/notification-content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const expectedContent = 'Você recebeu uma solicitação de amizade';
    const content = new NotificationContent(expectedContent);
    expect(content.value).toBe(expectedContent);
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    const expectedContent = 'Hey';
    expect(() => new NotificationContent(expectedContent)).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    const expectedContent = 'a'.repeat(241);
    expect(() => new NotificationContent(expectedContent)).toThrow();
  });
});
