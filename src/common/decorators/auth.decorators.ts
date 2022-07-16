import { OnlySupportGuard } from './../guards/support.guard';
import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common';

export const AccountId = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return request.headers['mcn-account-id'];
});

export const UserId = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return request.headers['mcn-user-id'];
});

export const Cookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return data ? request.cookies?.[data] : request.cookies;
});

export const OnlySupport = () => UseGuards(OnlySupportGuard);