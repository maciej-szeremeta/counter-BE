import { CanActivate, ExecutionContext, Injectable, } from '@nestjs/common';
import { Reflector, } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate{
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    //   * Musi zwracać true lub false
    return roles.includes(request.user.role);
  }
}