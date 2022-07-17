import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";




@Injectable()
export class OnlySupportGuard implements CanActivate {
	constructor(private reflector: Reflector) { }
	canActivate(context: ExecutionContext): boolean {
		let {accountId, supportAccountId} = context.switchToHttp().getRequest<{ accountId: number | string, supportAccountId: number | string }>();
		if (accountId != supportAccountId ) throw new ForbiddenException('You no have support rights!')

		return true;

	}
}