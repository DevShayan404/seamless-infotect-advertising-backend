import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('api/contact-us')
@ApiTags('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Post()
  @ApiBody({ type: CreateContactUsDto })
  async handleContactForm(
    @Body(new ValidationPipe()) contactData: CreateContactUsDto,
  ) {
    return this.contactUsService.sendEmail(contactData);
  }
}
