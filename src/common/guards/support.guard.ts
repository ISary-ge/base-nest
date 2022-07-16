import { CanActivate, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";




@Injectable()
export class OnlySupportGuard implements CanActivate {
	constructor(private reflector: Reflector) { }
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<{ accountId: number | string, supportId: number | string }>();
		if (!accountId == supportAccountId ) throw new ForbiddenException('You no have support rights!')

		return true;

	}
}