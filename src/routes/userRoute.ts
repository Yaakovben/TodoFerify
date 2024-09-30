import { Request, Response } from "express";
import SignupDTO from "../types/dto/signupDto";
import UserService from "../services/userService";

export const handleSignupRequset = async (
  req: Request<any, any, SignupDTO>,
  res: Response
): Promise<void> => {
  try {
    const result = await UserService.signup(req.body);
    res.status(result.status!).json(result);
  } catch (err) {
    console.log(err);
  }
};

export const handleProfileRequest = (req: Request, res: Response):void => {
  const result = {
    err: false,
    // @ts-ignore
    data: UserService.getUserById(req.user.id),
    status: 200,
  };
  res.json(result);
};