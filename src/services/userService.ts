import { users } from "../data/data";
import ResponseData from "../types/dto/responseData";
import SignupDTO from "../types/dto/signupDto";
import User from "../types/models/user";

export default class UserService {
  public static async signup(
    user: SignupDTO
  ): Promise<ResponseData<{ id: string } | unknown>> {
    try {
      const { username, password } = user;
      if (!username || !password) {
        return {
          err: true,
          status: 400,
          message: "Missing mandatory data, username or password",
        };
      }
      const newUser = new User(username);
      await newUser.hashPassword(password);
      users.push(newUser);
      return {
        err: false,
        message: "User signed up successfully",
        status: 201,
        data: { id: newUser.id },
      };
    } catch (err) {
      return {
        err: true,
        status: 500,
        data: err,
      };
    }
  }

  public static getAllUsers(): User[] {
    return users;
  }

  public static getUserById(id: string): User|undefined {
    return users.find((u) => u.id === id);
  }
}