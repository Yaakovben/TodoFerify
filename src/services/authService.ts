import jwt, { Jwt } from "jsonwebtoken";
import ResponseData from "../types/dto/responseData";
import SignupDTO from "../types/dto/signupDto";
import { users } from "../data/data";
import TokenPayloadDTO from "../types/dto/tokenPayLoadDto";
import SigninResponseDTO from "../types/dto/signinResponeDto";

export default class AuthService {
  public static async signin(
    userFromReq: SignupDTO
  ): Promise<ResponseData<SigninResponseDTO|unknown>> {
    try {
      const { username, password } = userFromReq;
      // validations
      if (!username || !password) {
        return {
          err: true,
          message: "Missing madatory data",
          status: 400,
        };
      }
      // try to find the user
      const user = users.find((u) => u.username === username);
      // return erros if no user/password matching
      if (!user) {
        return {
            err: true,
            message: "User not found",
            status: 400,
          };
      }

      if (!await user.comparePassword(password)) {
        return {
            err: true,
            message: "Wrong password",
            status: 401,
          };
      }
      // create token
      const payload:TokenPayloadDTO = {
        id:user.id, username
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn:"10m"
      })
      // return the token to the route
      return {
        err:false,
        status:200,
        data:{
            token
        }
      }
    } catch (err) {
      // handle errors
      return {
        err: true,
        message: "Missing madatory data",
        status: 500,
        data:err
      };
    }
  }
}