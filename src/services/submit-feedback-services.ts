import { MailAdapter } from "../adapters/mail-adapter"
import { FeedbacksRepository } from "../repositories/feedbacks-repositories"

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request

    if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format')
    }
    
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img width="100%" src="${screenshot}"/>` : '',
        `</div>`
      ].join('\n')
    })
  }
}