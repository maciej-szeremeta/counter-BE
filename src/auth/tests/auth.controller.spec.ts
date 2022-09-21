// import { Test, TestingModule, } from '@nestjs/testing';
// import { AuthController, } from '../auth.controller';
// import { AuthService, } from '../auth.service';
// import { response, }from 'express';

// describe('AuthController', () => {
//   let authController: AuthController;
   
//   const mockAuthService = {
//     login: jest.fn((req, res) => {
//       return {
//         'msg': true,
//         'email': 'admin@admin.pl',
//       };
//     }),
//   };

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [ AuthController, ],
//       providers: [ AuthService, ],
//     }).overrideProvider(AuthService)
//       .useValue(mockAuthService)
//       .compile();
     
//     authController = app.get<AuthController>(AuthController);
//   });

//   it('should return "Hello World!"', async () => {
//     expect(authController.loginUser({ email:'admin@admin.pl', pwd:'123!Ab', }, response)).toEqual({
//       'msg': true,
//       'email': 'admin@admin.pl',
//     });

//   });
// });
