import { Publisher } from './base-publisher';
import { TicketCreatedEvent } from './types/ticket-created-event';
import { Subjects } from './types/subjects';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}