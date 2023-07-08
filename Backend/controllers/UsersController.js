// import { Request, Response } from 'express';
import { request } from 'express';
import UsersService from '../services/UsersService.js';
import { StatusCodes } from 'http-status-codes';

class UsersController {
    fetchData = async (request, response) => {
        try {
          const pageNumber = request.query.pageNumber;
          const numberOfRowsToFetch = request.query.numberOfRowsToFetch;
          const filterValue = request.query.filterValue;
          const result = await UsersService.fetchData(pageNumber, numberOfRowsToFetch, filterValue);
          response.status(StatusCodes.OK).send(result);
        } catch (error) {
          console.error(error);
          response.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
        }
      };

      getNumber = async (request, response) => {
        try{
          console.log('hiiii');
          const filterValue = request.query.filterValue;
          const result = await UsersService.getNumber(filterValue);
          response.status(StatusCodes.OK).send(result);
        }
        catch (error) {
          console.error(error);
          response.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
        }
      };

    addUser = async (
        request,
        response
    ) =>{
        try {
            fullName1=request.query.fullName;
            userId1=request.query.userId;
            phoneNumber1=request.query.phoneNumber;
            ipAddress1=request.query.ipAddress;
            email1=request.query.email;
            const result = await UsersServices.addUser(fullName1, userId1, phoneNumber1, ipAddress1, email1);
            response.status(StatusCodes.OK).send(result);
            return;
        }
        catch (error) {
            console.error(error);
            return;
        }
    }

//     deleteUser = async (
//         request,
//         response
//     ) =>{
//         try {
//             parameters=request.query.mmmm;lhlj
//             const result = await UsersServices.deleteUser();
//             response.status(StatusCodes.OK).send(result);
//             return;
//         }
//         catch (error) {
//             console.error(error);
//             return;
//         }
//     }
};

export default new UsersController;