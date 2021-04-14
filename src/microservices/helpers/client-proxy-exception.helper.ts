import {
  BadRequestException,
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';

export const clientProxyException = (e: any) => {
  let exception = e;
  try {
    exception = JSON.parse(e);
  } catch (e) {}

  const statusCode = exception?.statusCode;
  if (statusCode == 422) {
    throw new UnprocessableEntityException(exception);
  } else if (statusCode == 400) {
    throw new BadRequestException(exception);
  }

  throw new InternalServerErrorException(e);
};
